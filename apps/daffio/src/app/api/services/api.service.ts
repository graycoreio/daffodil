import { HttpClient } from '@angular/common/http';
import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffioApiServiceInterface } from './api-service.interface';
import { DAFFIO_DOCS_PATH_TOKEN } from '../../docs/services/docs-path.token';
import { DaffioApiReference } from '../models/api-reference';

@Injectable({ providedIn: 'root' })
export class DaffioApiService implements DaffioApiServiceInterface {

  constructor(
    private http: HttpClient,
    @Inject(DAFFIO_DOCS_PATH_TOKEN) private docsPath: string,
  ) {}

  list(): Observable<DaffioApiReference[]> {
    return this.http.get<DaffioApiReference[]>(this.docsPath + 'api/api-list.json');
  }
}
