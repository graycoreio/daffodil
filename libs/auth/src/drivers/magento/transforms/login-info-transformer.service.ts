import { Injectable } from '@angular/core';

import { DaffAccountRegistration } from '../../../models/account-registration';
import { DaffLoginInfo } from '../../../models/login-info';

/**
 * Transforms magento auths into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoLoginInfoTransformerService {
  transform(registration: DaffAccountRegistration): DaffLoginInfo {
    return {
      email: registration.customer.email,
      password: registration.password,
    };
  }
}
