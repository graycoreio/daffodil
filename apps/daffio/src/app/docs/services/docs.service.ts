import { HttpClient } from '@angular/common/http';
import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';

import { crossOsFilename } from '@daffodil/docs-utils';

import { DAFFIO_DOCS_PATH_TOKEN } from './docs-path.token';
import { DaffioDocsServiceInterface } from './docs-service.interface';
import { DaffioDoc } from '../models/doc';
import { DaffioGuideList } from '../models/guide-list';

@Injectable({
  providedIn: 'root',
})
export class DaffioDocsService<T extends DaffioDoc = DaffioDoc, V extends DaffioGuideList = DaffioGuideList> implements DaffioDocsServiceInterface<T, V> {

  constructor(
    private http: HttpClient,
    @Inject(DAFFIO_DOCS_PATH_TOKEN) private docsPath: string,
  ) {}

  get(path: string): Observable<T> {
    return this.http.get<T>(this.docsPath + crossOsFilename(path) + '.json');
  }

  getGuideList(): Observable<V> {
    return this.http.get<V>(this.docsPath + 'guides/guide-list.json');
  }
}
