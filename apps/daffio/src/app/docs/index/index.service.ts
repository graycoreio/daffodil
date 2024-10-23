import {
  Inject,
  Injectable,
} from '@angular/core';

import {
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
  DAFF_DOCS_PATH,
  DaffDocKind,
} from '@daffodil/docs-utils';

import {
  DaffioAssetFetchService,
  DaffioAssetFetchServiceInterface,
} from '../../core/assets/fetch/service.interface';
import { DaffioDocList } from '../models/doc-list';
import { DAFFIO_DOCS_PATH_TOKEN } from '../services/docs-path.token';

@Injectable()
export class DaffioDocsIndexService<T extends DaffioDocList = DaffioDocList> {

  constructor(
    @Inject(DaffioAssetFetchService) private fetchAsset: DaffioAssetFetchServiceInterface,
    @Inject(DAFFIO_DOCS_PATH_TOKEN) private docsPath: string,
  ) {}

  getListForKind(kind: DaffDocKind, prefix = DAFF_DOCS_PATH) {
    return this.fetchAsset.fetch<T>(`${this.docsPath}/${prefix}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[kind]}/index.json`);
  }
}
