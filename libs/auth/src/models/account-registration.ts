import { DaffCustomerRegistration } from './customer-registration';

export interface DaffAccountRegistration {
  customer: DaffCustomerRegistration;
  password: string;
}
