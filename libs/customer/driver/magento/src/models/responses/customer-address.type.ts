export interface MagentoCustomerAddress {
  id: string;
  region: {
    region_code: string;
    region: string;
  };
  country_code: string;
  street: string[];
  company: string;
  telephone: string;
  postcode: string;
  city: string;
  firstname: string;
  lastname: string;
  email: string;
}
