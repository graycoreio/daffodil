import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffAuthorizeNetService, DaffAuthorizeNetTokenRequest } from '@daffodil/authorizenet';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryAuthorizeNetService implements DaffAuthorizeNetService<DaffAuthorizeNetTokenRequest> {
  url = '/api/authorizenet';

  constructor(private http: HttpClient) {}

  generateToken(paymentTokenRequest: DaffAuthorizeNetTokenRequest): Observable<any> {
    return this.http.post<DaffAuthorizeNetTokenRequest>(this.url + '/generateToken', paymentTokenRequest);
  }
}
