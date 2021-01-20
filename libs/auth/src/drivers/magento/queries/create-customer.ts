import {gql} from 'apollo-angular';


export const createCustomerMutation = gql`
  mutation CreateCustomer(
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
