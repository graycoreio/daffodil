import { gql } from '@damienwebdev/apollo-angular';


export const magentoSimpleProductFragment = gql`
  fragment magentoSimpleProduct on SimpleProduct {
    name
  }
`;
