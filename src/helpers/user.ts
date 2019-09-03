import { env } from './verify-env';

import gql from 'graphql-tag';
import { print as gqPrint } from 'graphql/language/printer';

import bcyrpt from 'bcrypt';
import fetch from 'node-fetch';
import { sign } from 'jsonwebtoken';

import {
  CreateUserMutation,
  CreateUserMutationVariables,
  GetUserByEmailQuery,
  GetUserByEmailQueryVariables,
} from '../generated/graphql';
import { HelperReturn } from '../types/helper-return';
import { JsonRes } from '../types/fetch-json';

const MUTATION_CREATE_USER = gql`
  mutation createUser($email: String, $password: String, $first_name: String, $last_name: String) {
    insert_users(objects: { email: $email, password: $password, first_name: $first_name, last_name: $last_name }) {
      returning {
        id
      }
    }
  }
`;

const QUERY_USER_BY_EMAIL = gql`
  query getUserByEmail($email: String) {
    users(where: { email: { _eq: $email } }) {
      id
      password
    }
  }
`;

export async function createUser(
  email: string,
  password: string,
  firstname: string,
  lastname: string
): Promise<HelperReturn> {
  const hashedPassword = await bcyrpt.hash(password, env.SALT_ROUNDS);
  const queryVars: CreateUserMutationVariables = {
    email,
    password: hashedPassword,
    first_name: firstname,
    last_name: lastname,
  };
  const queryRes = await fetch(env.HASURA_GRAPHQL_ENDPOINT, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': env.HASURA_GRAPHQL_ADMIN_SECRET,
    },
    body: JSON.stringify({
      query: gqPrint(MUTATION_CREATE_USER),
      variables: queryVars,
    }),
  });
  const jsonRes: JsonRes<CreateUserMutation> = await queryRes.json();
  try {
    if (jsonRes && jsonRes.errors) {
      for (const error of jsonRes.errors) {
        console.error(JSON.stringify(error));
      }
      throw new Error ('Hasura returned errors!');
    }
    if (!jsonRes || !jsonRes.data) {
      throw new Error ('No data returned from request!');
    }

    const res = jsonRes.data;
    if (!res || !res.insert_users || !res.insert_users.returning || !res.insert_users.returning.length) {
      throw new Error ('No insert_users!')
    }
    return {
      success: !!res.insert_users.returning[0].id,
      message: 'User created successfully!',
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message: 'Failed to create user',
      statusCode: 500,
    };
  }
}

export async function loginUser(
  email: string, 
  password: string
): Promise<HelperReturn> {
  const queryVars: GetUserByEmailQueryVariables = {
    email,
  };
  const queryRes = await fetch(env.HASURA_GRAPHQL_ENDPOINT, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': env.HASURA_GRAPHQL_ADMIN_SECRET,
    },
    body: JSON.stringify({
      query: gqPrint(QUERY_USER_BY_EMAIL),
      variables: queryVars,
    }),
  });
  const jsonRes: JsonRes<GetUserByEmailQuery> = await queryRes.json();
  try {
    if (jsonRes && jsonRes.errors) {
      for (const error of jsonRes.errors) {
        console.error(JSON.stringify(error));
      }
      throw new Error ('Hasura returned errors!');
    }
    if (!jsonRes || !jsonRes.data) {
      throw new Error ('No data returned from request!');
    }
    const res = jsonRes.data;
    if (!res || !res.users || !res.users.length || !res.users[0] || !res.users[0].id) {
      throw new Error ('No user!')
    }
    const userPasswordHash = res.users[0].password;
    const userId = res.users[0].id;
    const isPasswordMatch = await bcyrpt.compare(password, userPasswordHash);
    if (!isPasswordMatch) {
      throw new Error ('Password does not match!');
    }
    const jwtBody = {
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': 'user',
        'x-hasura-default-role': 'user',
        'x-hasura-user-id': userId
      },
    };
    const secret = env.JWT_SECRET;
    const jwt = sign(jwtBody, secret, { expiresIn: '7d' });
    return {
      success: !!jwt,
      message: jwt,
    };
  } catch (err) {
    console.error(err);
    return {
      message: 'Unauthorized',
      success: false,
      statusCode: 401,
    }
  }
}
