import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffAuthorizeNetTokenRequest } from '@daffodil/authorizenet';
import { DaffAuthorizeNetService } from '@daffodil/authorizenet/driver';

@Injectable({
  providedIn: 'root',
})
export class DaffTestingAuthorizeNetService implements DaffAuthorizeNetService {

  generateToken(tokenRequest: DaffAuthorizeNetTokenRequest): Observable<any> {
    return of({ paymentInfo: 'paymentInfo' });
  }
}
