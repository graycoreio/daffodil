import { MutationOptions } from 'apollo-client';
import { DaffCustomerRegistration } from '../../models/customer-registration';
import { DaffLoginInfo } from '../../models/login-info';
import { DaffAccountRegistration } from '../../models/account-registration';

export interface DaffAuthQueryManagerInterface<
  RegisterRequest extends DaffAccountRegistration<RegisterRequestT>,
  RegisterRequestT extends DaffCustomerRegistration,
  LoginRequest extends DaffLoginInfo
> {
  generateATokenMutation(request: LoginRequest): MutationOptions<any>;

  createACustomerMutation(request: RegisterRequest): MutationOptions<any>
}
