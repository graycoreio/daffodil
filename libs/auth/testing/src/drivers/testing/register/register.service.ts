import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  DaffAccountRegistration,
  DaffLoginInfo,
  DaffRegisterServiceInterface,
} from '@daffodil/auth';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingRegisterService implements DaffRegisterServiceInterface<
  DaffAccountRegistration,
  DaffLoginInfo
> {
  register(registration: DaffAccountRegistration): Observable<DaffLoginInfo> {
    return of({
      email: registration.customer.email,
      password: registration.password
    });
  }
}
