import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';

import {
  crossOsFilename,
  DAFF_DOCS_PATH,
  DaffDoc,
} from '@daffodil/docs-utils';

import { DAFFIO_DOCS_PATH_TOKEN } from './docs-path.token';
import { DaffioDocsServiceInterface } from './docs-service.interface';
import { getSafePath } from './safe-path';
import {
  DaffioAssetFetchService,
  DaffioAssetFetchServiceInterface,
} from '../../core/assets/fetch/service.interface';

@Injectable({
  providedIn: 'root',
})
export class DaffioDocsService implements DaffioDocsServiceInterface {
  constructor(
    @Inject(DaffioAssetFetchService) private fetchAsset: DaffioAssetFetchServiceInterface,
    @Inject(DAFFIO_DOCS_PATH_TOKEN) private docsPath: string,
  ) {}

  get<T extends DaffDoc = DaffDoc>(path: string): Observable<T> {
    path = getSafePath(path);
    return this.fetchAsset.fetch<T>(`${this.docsPath}/${DAFF_DOCS_PATH}/${crossOsFilename(path)}.json`, path);
  }
}
