import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  DaffRegisterRequest,
  DaffRegisterResponse,
  DaffRegisterServiceInterface
} from '@daffodil/auth';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingRegisterService implements DaffRegisterServiceInterface<DaffRegisterRequest, DaffRegisterResponse> {
  register(registration: DaffRegisterRequest): Observable<DaffRegisterResponse> {
    return of({token: 'asdfwetrsa78dg786dsfg8'});
  }
}
