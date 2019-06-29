import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiDocServiceProviderModule } from './api-doc-provider-service.module';

@Injectable({
  providedIn: ApiDocServiceProviderModule
})
export class DaffioDocService {

  constructor(private http: HttpClient) {}

  getDoc(path: string): Observable<any> {
    console.log(path);
    return this.http.get('/assets/daffio/' + path + '.json');
  }

  getDocsList(): Observable<any> {
    return this.http.get('/assets/daffio/api/api-list.json');
  }
}
