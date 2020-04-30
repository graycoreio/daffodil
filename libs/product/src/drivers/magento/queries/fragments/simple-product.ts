import gql from 'graphql-tag';

export const magentoSimpleProductFragment = gql`
  fragment magentoSimpleProduct on SimpleProduct {
    name
  }
`;
