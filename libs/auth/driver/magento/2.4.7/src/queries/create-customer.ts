import { gql } from 'apollo-angular';


export const createCustomerMutation = gql`
  mutation MagentoCreateCustomer(
    $email: String!,
    $password: String!,
    $subscribe: Boolean!,
    $firstname: String!,
    $lastname: String!,
  ) {
    createCustomerV2(input: {
      firstname: $firstname,
      lastname: $lastname,
      email: $email,
      password: $password,
      is_subscribed: $subscribe
    }) {
      customer {
        email
      }
    }
  }
`;
