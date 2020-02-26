export interface MagentoCartAddress {
  region: {
    code: string;
    label: string;
  };
  country: {
    code: string;
    label: string;
  };
  street: string[];
  company: string;
  telephone: string;
  postcode: string;
  city: string;
  firstname: string;
  lastname: string;
}
