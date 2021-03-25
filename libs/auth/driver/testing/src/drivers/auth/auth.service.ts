import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffAuthServiceInterface } from '@daffodil/auth/driver';

@Injectable({
  providedIn: 'root',
})
export class DaffTestingAuthService implements DaffAuthServiceInterface {
  check(): Observable<void> {
    return of(undefined);
  }
}
