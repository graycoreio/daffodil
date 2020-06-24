import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DaffAuthorizeNetService, DaffAuthorizeNetTokenRequest } from '@daffodil/authorizenet';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingAuthorizeNetService implements DaffAuthorizeNetService {

  generateToken(tokenRequest: DaffAuthorizeNetTokenRequest): Observable<any> {
    return of({ paymentInfo: 'paymentInfo' });
  }
}
