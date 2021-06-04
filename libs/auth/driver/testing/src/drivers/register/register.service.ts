import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffAccountRegistration,
  DaffLoginInfo,
} from '@daffodil/auth';
import { DaffRegisterServiceInterface } from '@daffodil/auth/driver';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffTestingRegisterService implements DaffRegisterServiceInterface<
  DaffAccountRegistration,
  DaffLoginInfo
> {
  register(registration: DaffAccountRegistration): Observable<DaffLoginInfo> {
    return of({
      email: registration.customer.email,
      password: registration.password,
    });
  }
}
