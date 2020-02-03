import { MutationOptions } from 'apollo-client';
import { DaffAccountRegistration } from '../../models/account-registration';

export interface DaffAuthQueryManagerInterface {
  generateATokenMutation(
    email: string,
    password: string
  ): MutationOptions<any>;

  createACustomerMutation(
    info: DaffAccountRegistration
  ): MutationOptions<any>
}
