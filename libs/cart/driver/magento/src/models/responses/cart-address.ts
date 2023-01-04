export interface MagentoCartAddress {
  region: {
    code: string;
    region_id: number;
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
  email: string;
}
