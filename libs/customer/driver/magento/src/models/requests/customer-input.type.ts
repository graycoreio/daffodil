import { MagentoCustomerGender } from '../gender.enum';

export interface MagentoCustomerInput {
  allow_remote_shopping_assistance?: boolean;
  date_of_birth?: string;
  firstname?: string;
  gender?: MagentoCustomerGender;
  is_subscribed?: boolean;
  lastname?: string;
  middlename?: string;
  password?: string;
  prefix?: string;
  suffix?: string;
  taxvat?: string;
}
