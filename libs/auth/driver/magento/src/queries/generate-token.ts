import { gql } from '@damienwebdev/apollo-angular';


export const generateTokenMutation = gql`
  mutation MagentoGenerateToken($email: String!, $password: String!) {
    generateCustomerToken(
      email: $email,
      password: $password
    ) {
      token
    }
  }
`;
