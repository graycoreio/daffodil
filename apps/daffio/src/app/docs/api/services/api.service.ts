import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffDocsAssetFetchService,
  DaffDocsAssetFetchServiceInterface,
  DAFF_DOCS_ASSET_PATH_TOKEN,
} from '@daffodil/documentation';

import { DaffioApiServiceInterface } from './api-service.interface';
import { DaffioApiReference } from '../models/api-reference';

@Injectable({ providedIn: 'root' })
export class DaffioApiService implements DaffioApiServiceInterface {

  constructor(
    @Inject(DaffDocsAssetFetchService) private fetchAsset: DaffDocsAssetFetchServiceInterface,
    @Inject(DAFF_DOCS_ASSET_PATH_TOKEN) private docsPath: string,
  ) {}

  list(): Observable<DaffioApiReference[]> {
    return this.fetchAsset.fetch<DaffioApiReference[]>(`${this.docsPath}docs/api/api-list.json`);
  }
}
