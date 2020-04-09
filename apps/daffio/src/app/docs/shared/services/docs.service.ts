import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffioDoc } from '../models/doc';
import { DaffioDocServiceInterface } from './docs-service.interface';
import { DaffioGuideList } from '../models/guide-list';

const DOCS_BASE_URL = '/assets/daffio/';

@Injectable({
  providedIn: 'root'
})
export class DaffioDocService<T extends DaffioDoc, V extends DaffioGuideList> implements DaffioDocServiceInterface<DaffioDoc, DaffioGuideList> {

  constructor(private http: HttpClient) {}

  get(path: string): Observable<T> {
    return this.http.get<T>(DOCS_BASE_URL + path + '.json');
  }
  getGuideList(): Observable<DaffioGuideList> {
    return this.http.get<V>(DOCS_BASE_URL + 'docs/guides/guide-list.json');
  }
}
