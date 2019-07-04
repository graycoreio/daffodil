import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiDocServiceProviderModule } from './api-doc-provider-service.module';

const DOCS_BASE_URL = '/assets/daffio/';

@Injectable({
  providedIn: ApiDocServiceProviderModule
})
export class DaffioDocService {

  constructor(private http: HttpClient) {}

  getDoc(path: string): Observable<any> {
    return this.http.get(DOCS_BASE_URL + path + '.json');
  }

  getDocsList(): Observable<any> {
    return this.http.get(DOCS_BASE_URL + 'api/api-list.json');
  }
}
