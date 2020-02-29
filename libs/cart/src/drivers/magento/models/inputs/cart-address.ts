export interface MagentoCartAddressInput {
  city:	string;
  company?: string;
  country_code: string;
  firstname: string;
  lastname: string;
  postcode?: string;
  region?: string;
  save_in_address_book: boolean;
  street: string[];
  telephone?: string;
}
