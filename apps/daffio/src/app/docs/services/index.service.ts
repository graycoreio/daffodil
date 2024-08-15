import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';

import {
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DAFFIO_DOCS_PATH_TOKEN } from './docs-path.token';
import {
  DaffioAssetFetchService,
  DaffioAssetFetchServiceInterface,
} from '../../core/assets/fetch/service.interface';
import { DaffioDocList } from '../models/doc-list';

@Injectable()
export class DaffioDocsIndexService<T extends DaffioDocList = DaffioDocList> {

  constructor(
    @Inject(DaffioAssetFetchService) private fetchAsset: DaffioAssetFetchServiceInterface,
    @Inject(DAFFIO_DOCS_PATH_TOKEN) private docsPath: string,
  ) {}

  getList(kind: DaffDocKind): Observable<T> {
    return this.fetchAsset.fetch<T>(`${this.docsPath}/docs/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[kind]}/index.json`);
  }
}
