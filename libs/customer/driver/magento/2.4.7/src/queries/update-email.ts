import { gql } from 'apollo-angular';

import { magentoCustomerFragment } from './fragments/public_api';

export const MAGENTO_UPDATE_EMAIL_QUERY_NAME = 'MagentoUpdateEmail';

export const updateEmail = gql`
  mutation ${MAGENTO_UPDATE_EMAIL_QUERY_NAME}($email: String!, $password: String!) {
    updateCustomerEmail(email: $email, password: $password) {
      customer {
        ...magentoCustomer
      }
    }
  }
  ${magentoCustomerFragment}
`;
