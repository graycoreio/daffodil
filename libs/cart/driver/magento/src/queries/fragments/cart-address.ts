import { gql } from 'apollo-angular';


export const cartAddressFragment = gql`
  fragment cartAddress on CartAddressInterface {
    customer_address_id
    city
    country {
      code
      label
    }
    firstname
    lastname
    postcode
    region {
      code
      region_id
    }
    street
    telephone
    company
  }
`;
