import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffioDoc } from '../models/doc';
import { DaffioGuideList } from '../models/guide-list';
import { DaffioDocsServiceInterface } from './docs-service.interface';

const DOCS_BASE_URL = '/assets/daffio/docs/';

@Injectable({
  providedIn: 'root',
})
export class DaffioDocsService<T extends DaffioDoc, V extends DaffioGuideList> implements DaffioDocsServiceInterface<DaffioDoc, DaffioGuideList> {

  constructor(private http: HttpClient) {}

  get(path: string): Observable<T> {
    return this.http.get<T>(DOCS_BASE_URL + path + '.json');
  }
  getGuideList(): Observable<DaffioGuideList> {
    return this.http.get<V>(DOCS_BASE_URL + 'guides/guide-list.json');
  }
}
