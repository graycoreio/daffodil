import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffioDoc } from '../models/doc';
import { DaffioDocServiceInterface } from './docs-service.interface';

const DOCS_BASE_URL = '/assets/daffio/';

@Injectable({
  providedIn: 'root'
})
export class DaffioDocService<T extends DaffioDoc> implements DaffioDocServiceInterface<DaffioDoc> {

  constructor(private http: HttpClient) {}

  get(path: string): Observable<T> {
    return this.http.get<T>(DOCS_BASE_URL + path + '.json');
  }
}
