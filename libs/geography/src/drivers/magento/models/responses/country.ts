import { MagentoRegion } from './region';

export interface MagentoCountry {
  id: string;
  available_regions:	MagentoRegion[];
  full_name_english:	string;
  full_name_locale:	string;
  three_letter_abbreviation:	string;
  two_letter_abbreviation:	string;
}
