import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  DaffLoginRequest,
  DaffLoginResponse,
  DaffLoginServiceInterface
} from '@daffodil/auth';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingLoginService implements DaffLoginServiceInterface<DaffLoginRequest, DaffLoginResponse> {
  login(loginInfo: DaffLoginRequest): Observable<DaffLoginResponse> {
    return of({token: '8a8fd6a45dec7823'});
  }
}
