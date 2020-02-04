import { MutationOptions } from 'apollo-client';
import { DaffRegisterRequest } from '../../models/register-request';
import { DaffCustomerRegistration } from '../../models/customer-registration';

export interface DaffAuthQueryManagerInterface<
  RegisterRequest extends DaffRegisterRequest<RegisterRequestT>,
  RegisterRequestT extends DaffCustomerRegistration
> {
  generateATokenMutation(
    email: string,
    password: string
  ): MutationOptions<any>;

  createACustomerMutation(
    info: RegisterRequest
  ): MutationOptions<any>
}
