import { gql } from 'apollo-angular';

export const deleteCustomerAddress = gql`
  mutation MagentoDeleteCustomerAddress($id: Int!) {
    deleteCustomerAddress(id: $id)
  }
`;
