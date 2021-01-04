import {gql} from 'apollo-angular';


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
    region
    region_id
    street
    suffix
    telephone
  }
`;
