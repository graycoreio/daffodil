import { gql } from 'apollo-angular';

import { magentoCustomerAddressFragment } from './fragments/public_api';

export const createCustomerAddress = gql`
  mutation MagentoCreateCustomerAddress($input: CustomerAddressInput!) {
    createCustomerAddress(input: $input) {
      ...magentoCustomerAddress
    }
  }
  ${magentoCustomerAddressFragment}
`;
