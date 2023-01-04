import { gql } from 'apollo-angular';


export const orderAddressFragment = gql`
  fragment orderAddress on OrderAddress {
    city
    company
    country_code
    fax
    firstname
    middlename
    lastname
    postcode
    prefix
    region_id
    region_code
    street
    suffix
    telephone
  }
`;
