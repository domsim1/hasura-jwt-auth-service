interface EnvironmentVariables {
  PORT: number;
  SALT_ROUNDS: number;
  HAZURA_GRAPHQL_ENDPOINT: string;
  JWT_SECRET: string;
  HASURA_GRAPHQL_ADMIN_SECRET: string;
}

function createEnvironmentVariableInstance(): EnvironmentVariables {
  if (!process.env.HAZURA_GRAPHQL_ENDPOINT) {
    throw new Error("Missing 'HAZURA_GRAPHQL_ENDPOINT' in .env");
  }
  if (!process.env.JWT_SECRET) {
    throw new Error("Missing 'HAZURA_GRAPHQL_ENDPOINT' in .env");
  }
  if (!process.env.HASURA_GRAPHQL_ADMIN_SECRET) {
    throw new Error("Missing 'HASURA_GRAPHQL_ADMIN_SECRET' in .env");
  }
  return {
    PORT: Number(process.env.PORT) || 3000,
    SALT_ROUNDS: Number(process.env.SALT_ROUNDS) || 10,
    HAZURA_GRAPHQL_ENDPOINT: process.env.HAZURA_GRAPHQL_ENDPOINT,
    JWT_SECRET: process.env.JWT_SECRET,
    HASURA_GRAPHQL_ADMIN_SECRET: process.env.HASURA_GRAPHQL_ADMIN_SECRET,
  };
}

export const env = createEnvironmentVariableInstance();
