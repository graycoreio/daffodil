import { gql } from 'apollo-angular';

export const magentoCustomerAddressFragment = gql`
  fragment magentoCustomerAddress on CustomerAddress {
    id
    city
    country_code
    firstname
    lastname
    postcode
    region {
      region_code
      region
    }
    street
    telephone
    company
  }
`;
