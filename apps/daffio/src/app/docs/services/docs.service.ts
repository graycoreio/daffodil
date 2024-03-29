import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';

import { crossOsFilename } from '@daffodil/docs-utils';

import { DAFFIO_DOCS_PATH_TOKEN } from './docs-path.token';
import { DaffioDocsServiceInterface } from './docs-service.interface';
import {
  DaffioAssetFetchService,
  DaffioAssetFetchServiceInterface,
} from '../../core/assets/fetch/service.interface';
import { DaffioDoc } from '../models/doc';
import { DaffioPackagesList } from '../models/packages-list';

@Injectable({
  providedIn: 'root',
})
export class DaffioDocsService<T extends DaffioDoc = DaffioDoc, V extends DaffioPackagesList = DaffioPackagesList> implements DaffioDocsServiceInterface<T, V> {

  constructor(
    @Inject(DaffioAssetFetchService) private fetchAsset: DaffioAssetFetchServiceInterface,
    @Inject(DAFFIO_DOCS_PATH_TOKEN) private docsPath: string,
  ) {}

  get(path: string): Observable<T> {
    return this.fetchAsset.fetch<T>(`${this.docsPath}${crossOsFilename(path)}.json`);
  }

  getGuideList(): Observable<V> {
    return this.fetchAsset.fetch<V>(`${this.docsPath}packages/guide-list.json`);
  }
}
