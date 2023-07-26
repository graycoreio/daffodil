import { gql } from 'apollo-angular';

export const magentoCustomerPaymentAuthorizenetAddressFragment = gql`
  fragment magentoCustomerPaymentAuthorizenetAddress on CustomerAddress {
    city
    country_code
    firstname
    lastname
    postcode
    region {
      region_code
      region_id
    }
    street
    telephone
    company
    default_billing
    default_shipping
  }
`;
