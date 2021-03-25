import { Injectable } from '@angular/core';

import {
  DaffAccountRegistration,
  DaffLoginInfo,
} from '@daffodil/auth';

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
