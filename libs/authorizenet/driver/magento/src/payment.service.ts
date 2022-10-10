import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  map,
  Observable,
} from 'rxjs';

import {
  DaffAuthorizenetPaymentRequest,
  DaffAuthorizenetPaymentResponse,
} from '@daffodil/authorizenet';
import { DaffAuthorizeNetPaymentDriverInterface } from '@daffodil/authorizenet/driver';

import { DaffMagentoAuthorizeNetService } from './authorize-net.service';

@Injectable({
  providedIn: 'root',
})
export class DaffMagentoAuthorizeNetPaymentService implements DaffAuthorizeNetPaymentDriverInterface {
  constructor(
    private authorizenetService: DaffMagentoAuthorizeNetService,
  ) {}

  generateToken(request: DaffAuthorizenetPaymentRequest): Observable<DaffAuthorizenetPaymentResponse> {
    return this.authorizenetService.generateToken(request.data).pipe(
      map(response => ({
        method: 'anet',
        data: response,
      })),
    );
  }
}
