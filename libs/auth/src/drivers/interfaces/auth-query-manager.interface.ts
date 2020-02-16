import { MutationOptions } from 'apollo-client';
import { DaffLoginInfo } from '../../models/login-info';
import { DaffAccountRegistration } from '../../models/account-registration';

export interface DaffAuthQueryManagerInterface<
  RegisterRequest extends DaffAccountRegistration,
  LoginRequest extends DaffLoginInfo
> {
  generateATokenMutation(request: LoginRequest): MutationOptions<any>;

  createACustomerMutation(request: RegisterRequest): MutationOptions<any>
}
