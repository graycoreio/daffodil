import { DaffCustomerRegistration } from './customer-registration';

export interface DaffAccountRegistration<T extends DaffCustomerRegistration> {
  customer: T;
  password: string;
}
