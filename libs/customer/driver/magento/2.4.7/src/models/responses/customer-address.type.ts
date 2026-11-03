export interface MagentoCustomerAddress {
  id?: number;
  region: {
    region_code: string;
    region_id: number;
  };
  country_code?: string;
  street?: string[];
  company?: string;
  telephone?: string;
  postcode?: string;
  city?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  default_billing?: boolean;
  default_shipping?: boolean;
}
