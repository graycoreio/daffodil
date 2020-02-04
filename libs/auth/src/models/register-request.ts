import { DaffAccountRegistration } from './account-registration';
import { DaffCustomerRegistration } from './customer-registration';

export type DaffRegisterRequest<T extends DaffCustomerRegistration> = DaffAccountRegistration<T>;
