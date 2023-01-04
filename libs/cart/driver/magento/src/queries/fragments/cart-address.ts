import { gql } from 'apollo-angular';


export const cartAddressFragment = gql`
  fragment cartAddress on CartAddressInterface {
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
