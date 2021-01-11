import {gql} from 'apollo-angular';


export const magentoSimpleProductFragment = gql`
  fragment magentoSimpleProduct on SimpleProduct {
    name
  }
`;
