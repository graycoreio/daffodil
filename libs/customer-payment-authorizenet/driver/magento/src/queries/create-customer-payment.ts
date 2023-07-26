import { gql } from 'apollo-angular';

import { magentoTokenBaseCardFragment } from './fragments/public_api';

export const createTokenBaseCard = gql`
  mutation MagentoCreateCustomerPayment($input: TokenBaseCardCreateInput!) {
    createTokenBaseCard(input: $input) {
      ...magentoTokenBaseCard
    }
  }
  ${magentoTokenBaseCardFragment}
`;
