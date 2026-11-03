import { gql } from 'apollo-angular';

export const deleteTokenBaseCard = gql`
  mutation MagentoDeleteCustomerPayment($id: String!) {
    deleteTokenBaseCard(hash: $id)
  }
`;
