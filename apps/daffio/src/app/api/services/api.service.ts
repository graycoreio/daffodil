import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffioApiReference } from '../models/api-reference';
import { DaffioApiServiceInterface } from './api-service.interface';


const DOCS_BASE_URL = '/assets/daffio/docs/';

@Injectable({ providedIn: 'root' })
export class DaffioApiService implements DaffioApiServiceInterface {

  constructor(private http: HttpClient) {}

  list(): Observable<DaffioApiReference[]> {
    return this.http.get<DaffioApiReference[]>(DOCS_BASE_URL + 'api/api-list.json');
  }
}
