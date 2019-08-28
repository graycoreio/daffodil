import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffioApiDocReference } from '../models/api-doc-reference';
import { DaffioApiDocServiceInterface } from './api-doc-service.interface';


const DOCS_BASE_URL = '/assets/daffio/docs/';

@Injectable({providedIn: 'root'})
export class DaffioApiDocService implements DaffioApiDocServiceInterface {

  constructor(private http: HttpClient) {}

  list(): Observable<DaffioApiDocReference[]> {
    return this.http.get<DaffioApiDocReference[]>(DOCS_BASE_URL + 'api/api-list.json');
  }
}
