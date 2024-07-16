import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';

import {
  crossOsFilename,
  DaffDoc,
  DaffDocsList,
} from '@daffodil/docs-utils';

import { DAFF_DOCS_ASSET_PATH_TOKEN } from './docs-path.token';
import { DaffDocsAssetServiceInterface } from './docs-service.interface';
import {
  DaffDocsAssetFetchService,
  DaffDocsAssetFetchServiceInterface,
} from './fetch/service.interface';

@Injectable({
  providedIn: 'root',
})
export class DaffDocsAssetService<T extends DaffDoc = DaffDoc, V extends DaffDocsList = DaffDocsList> implements DaffDocsAssetServiceInterface<T, V> {

  constructor(
    @Inject(DaffDocsAssetFetchService) private fetchAsset: DaffDocsAssetFetchServiceInterface,
    @Inject(DAFF_DOCS_ASSET_PATH_TOKEN) private docsPath: string,
  ) {}

  get(path: string): Observable<T> {
    return this.fetchAsset.fetch<T>(`${this.docsPath}${crossOsFilename(path)}.json`);
  }

  getPackageList(): Observable<V> {
    return this.fetchAsset.fetch<V>(`${this.docsPath}docs/packages/index.json`);
  }

  getGuidesList(): Observable<V> {
    return this.fetchAsset.fetch<V>(`${this.docsPath}docs/guides/index.json`);
  }
}
