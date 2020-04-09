import gql from 'graphql-tag';

export const generateTokenMutation = gql`
  mutation GenerateToken($email: String!, $password: String!) {
    generateCustomerToken(
      email: $email,
      password: $password
    ) {
      token
    }
  }
`;
