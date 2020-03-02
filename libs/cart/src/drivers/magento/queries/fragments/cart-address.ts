import gql from 'graphql-tag';

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
      label
    }
    street
    telephone
    company
  }
`;
