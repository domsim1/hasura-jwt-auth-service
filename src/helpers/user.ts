import { env } from './verify-env';

import gql from 'graphql-tag';
import { print as gqPrint } from 'graphql/language/printer';

import bcyrpt from 'bcrypt';
import fetch from 'node-fetch';

import {
  CreateUserMutation,
  CreateUserMutationVariables,
} from '../generated/graphql';
import { HelperReturn } from '../types/helper-return';

const MUTATION_CREATE_USER = gql`
  mutation createUser($email: String, $password: String) {
    insert_users(objects: { email: $email, password: $password }) {
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
  password: string
): Promise<HelperReturn> {
  const hashedPassword = await bcyrpt.hash(password, env.SALT_ROUNDS);
  const queryVars: CreateUserMutationVariables = {
    email,
    password: hashedPassword,
  };
  const queryRes = await fetch(env.HAZURA_GRAPHQL_ENDPOINT, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': env.HASURA_GRAPHQL_ADMIN_SECRET!,
    },
    body: JSON.stringify({
      query: gqPrint(MUTATION_CREATE_USER),
      variables: queryVars,
    }),
  });
  const jsonRes = await queryRes.json();
  console.log(JSON.stringify(jsonRes));
  try {
    const res = jsonRes.data as CreateUserMutation;
    return {
      success: !!res.insert_users!.returning[0]!.id,
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

export async function loginUser(email: string, password: string) {
  const queryVars = {
    email,
  };
  const queryRes = await fetch(env.HAZURA_GRAPHQL_ENDPOINT, {
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
}
