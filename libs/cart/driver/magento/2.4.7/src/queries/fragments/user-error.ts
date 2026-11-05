import { gql } from 'apollo-angular';

export const magentoCartUserError = gql`
  fragment cartUserError on CartUserInputError {
    code
    message
  }
`;
