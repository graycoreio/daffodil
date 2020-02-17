import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  DaffAuthServiceInterface,
  DaffAuthToken
} from '@daffodil/auth';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingAuthService implements DaffAuthServiceInterface<DaffAuthToken> {
  check(auth: DaffAuthToken): Observable<boolean> {
    return of(true);
  }
}
