import { Injectable } from '@angular/core';

import { DaffLoginInfo } from '../../../models/login-info'
import { DaffAccountRegistration } from '../../../models/account-registration'

/**
 * Transforms magento auths into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoLoginInfoTransformerService {
  transform(registration: DaffAccountRegistration): DaffLoginInfo {
    return {
      email: registration.customer.email,
      password: registration.password
    }
  }
}
