import { gql } from 'apollo-angular';

import { magentoCustomerAddressFragment } from './fragments/public_api';

export const MAGENTO_GET_CUSTOMER_ADDRESSES_QUERY_NAME = 'MagentoGetCustomerAddresses';

export const getCustomerAddresses = gql`
  query ${MAGENTO_GET_CUSTOMER_ADDRESSES_QUERY_NAME} {
    customer {
      addresses {
        ...magentoCustomerAddress
      }
    }
  }
  ${magentoCustomerAddressFragment}
`;
