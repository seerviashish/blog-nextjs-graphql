import client from '../../utils/graphql/client';
import { gql } from '@apollo/client';
export const signIn = async (email: string, password: string) => {
  const {} = await client.mutate(gql``);
};
