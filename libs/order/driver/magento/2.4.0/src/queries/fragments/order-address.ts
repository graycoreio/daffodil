import gql from 'graphql-tag';

export const orderAddressFragment = gql`
  fragment orderAddress on GraycoreOrderAddress {
    order_id
    prefix
    suffix
    firstname
    middlename
    lastname
    telephone
    email
    street
    city
    region
    region_id
    country_code
    postcode
  }
`;
