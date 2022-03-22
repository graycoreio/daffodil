import { gql } from '@damienwebdev/apollo-angular';


export const createCustomerMutation = gql`
  mutation MagentoCreateCustomer(
    $email: String!,
    $password: String!,
    $firstname: String!,
    $lastname: String!,
  ) {
    createCustomer(input: {
      firstname: $firstname,
      lastname: $lastname,
      email: $email,
      password: $password
    })
  }
`;
