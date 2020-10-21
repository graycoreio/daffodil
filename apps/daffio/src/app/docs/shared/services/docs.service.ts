import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffioDoc } from '../models/doc';
import { DaffioGuideList } from '../models/guide-list';
import { DaffioDocServiceInterface } from './docs-service.interface';

const DOCS_BASE_URL = '/assets/daffio/';

@Injectable({
  providedIn: 'root',
})
export class DaffioDocService<T extends DaffioDoc, V extends DaffioGuideList> implements DaffioDocServiceInterface<DaffioDoc, DaffioGuideList> {

  constructor(private http: HttpClient) {}

  get(path: string): Observable<T> {
    return this.http.get<T>(DOCS_BASE_URL + path.split('#')[0] + '.json');
  }
  getGuideList(): Observable<DaffioGuideList> {
    return this.http.get<V>(DOCS_BASE_URL + 'docs/guides/guide-list.json');
  }
}
