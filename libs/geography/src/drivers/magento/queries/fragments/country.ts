import gql from 'graphql-tag';
import { regionFragment } from './region';

export const countryFragment = gql`
  fragment country on Country {
    available_regions {
      ...region
    }
    full_name_english
    full_name_locale
    three_letter_abbreviation
    two_letter_abbreviation
  }
  ${regionFragment}
`;
