import { HttpClient } from '@angular/common/http';
import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffioDoc } from '../models/doc';
import { DaffioGuideList } from '../models/guide-list';
import { DAFFIO_DOCS_PATH_TOKEN } from './docs-path.token';
import { DaffioDocsServiceInterface } from './docs-service.interface';

@Injectable({
  providedIn: 'root',
})
export class DaffioDocsService<T extends DaffioDoc, V extends DaffioGuideList> implements DaffioDocsServiceInterface<DaffioDoc, DaffioGuideList> {

  constructor(
    private http: HttpClient,
    @Inject(DAFFIO_DOCS_PATH_TOKEN) private docsPath: string,
  ) {}

  get(path: string): Observable<T> {
    return this.http.get<T>(this.docsPath + path + '.json');
  }

  getGuideList(): Observable<DaffioGuideList> {
    return this.http.get<V>(this.docsPath + 'guides/guide-list.json');
  }
}
