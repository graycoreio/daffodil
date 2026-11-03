import { gql } from 'apollo-angular';

import { magentoCustomerAddressFragment } from './fragments/public_api';

export const updateCustomerAddress = gql`
  mutation MagentoUpdateCustomerAddress($id: Int!, $input: CustomerAddressInput!) {
    updateCustomerAddress(id: $id, input: $input) {
      ...magentoCustomerAddress
    }
  }
  ${magentoCustomerAddressFragment}
`;
