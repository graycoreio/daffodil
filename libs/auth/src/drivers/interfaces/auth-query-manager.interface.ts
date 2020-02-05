import { MutationOptions } from 'apollo-client';
import { DaffRegisterRequest } from '../../models/register-request';
import { DaffCustomerRegistration } from '../../models/customer-registration';
import { DaffLoginRequest } from '../../models/login-request';

export interface DaffAuthQueryManagerInterface<
  RegisterRequest extends DaffRegisterRequest<RegisterRequestT>,
  RegisterRequestT extends DaffCustomerRegistration,
  LoginRequest extends DaffLoginRequest
> {
  generateATokenMutation(request: LoginRequest): MutationOptions<any>;

  createACustomerMutation(request: RegisterRequest): MutationOptions<any>
}
