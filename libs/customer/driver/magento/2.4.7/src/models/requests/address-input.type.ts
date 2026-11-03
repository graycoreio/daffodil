import { MagentoCustomerAddressAttributeInput } from './address-attribute-input.type';
import { MagentoCustomerAddressRegionInput } from './address-region-input.type';

export interface MagentoCustomerAddressInput {
  city?: string;
  company?: string;
  country_code?: string;
  country_id?: string;
  custom_attributes?: MagentoCustomerAddressAttributeInput;
  default_billing?: boolean;
  default_shipping?: boolean;
  fax?: string;
  firstname?: string;
  lastname?: string;
  middlename?: string;
  postcode?: string;
  prefix?: string;
  region?: MagentoCustomerAddressRegionInput;
  street?: string[];
  suffix?: string;
  telephone?: string;
  vat_id?: string;
}
