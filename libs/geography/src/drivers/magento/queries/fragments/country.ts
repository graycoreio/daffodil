import gql from 'graphql-tag';

export const countryFragment = gql`
  fragment country on Country {
    id
    full_name_english
    full_name_locale
    three_letter_abbreviation
    two_letter_abbreviation
  }
`;
