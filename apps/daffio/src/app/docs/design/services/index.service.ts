import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';

import {
  DAFF_DOCS_DESIGN_PATH,
  DAFF_DOCS_PATH,
} from '@daffodil/docs-utils';

import {
  DaffioAssetFetchService,
  DaffioAssetFetchServiceInterface,
} from '../../../core/assets/fetch/service.interface';
import { DaffioDocList } from '../../models/doc-list';
import { DAFFIO_DOCS_PATH_TOKEN } from '../../services/docs-path.token';

@Injectable()
export class DaffioDocsDesignIndexService<T extends DaffioDocList = DaffioDocList> {

  constructor(
    @Inject(DaffioAssetFetchService) private fetchAsset: DaffioAssetFetchServiceInterface,
    @Inject(DAFFIO_DOCS_PATH_TOKEN) private docsPath: string,
  ) {}

  getList(): Observable<T> {
    return this.fetchAsset.fetch<T>(`${this.docsPath}/${DAFF_DOCS_PATH}/${DAFF_DOCS_DESIGN_PATH}/index.json`);
  }
}
