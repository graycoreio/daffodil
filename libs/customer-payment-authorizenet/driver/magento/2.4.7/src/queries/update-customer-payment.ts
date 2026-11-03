import { gql } from 'apollo-angular';

import { magentoTokenBaseCardFragment } from './fragments/public_api';

export const updateTokenBaseCard = gql`
  mutation MagentoUpdateCustomerPayment($input: TokenBaseCardUpdateInput!) {
    updateTokenBaseCard(input: $input) {
      ...magentoTokenBaseCard
    }
  }
  ${magentoTokenBaseCardFragment}
`;
