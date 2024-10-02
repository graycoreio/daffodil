import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  distinctUntilChanged,
  map,
  Observable,
  switchMap,
} from 'rxjs';

import {
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
  DAFF_DOCS_PATH,
  DaffDocKind,
} from '@daffodil/docs-utils';
import { DaffRouterActivatedRoute } from '@daffodil/router';

import {
  DaffioAssetFetchService,
  DaffioAssetFetchServiceInterface,
} from '../../core/assets/fetch/service.interface';
import { DaffioRoute } from '../../core/router/route.type';
import { DaffioDocList } from '../models/doc-list';
import { DAFFIO_DOCS_PATH_TOKEN } from '../services/docs-path.token';

@Injectable()
export class DaffioDocsIndexService<T extends DaffioDocList = DaffioDocList> {

  constructor(
    @Inject(DaffioAssetFetchService) private fetchAsset: DaffioAssetFetchServiceInterface,
    @Inject(DAFFIO_DOCS_PATH_TOKEN) private docsPath: string,
    private route: DaffRouterActivatedRoute,
  ) {}

  getListForKind(kind: DaffDocKind, prefix = DAFF_DOCS_PATH) {
    return this.fetchAsset.fetch<T>(`${this.docsPath}/${prefix}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[kind]}/index.json`);
  }

  getList(): Observable<T> {
    return this.route.route$.pipe(
      switchMap((route) => route.data),
      map((data: DaffioRoute['data']) => <const>[data.docKind, data.docPrefix]),
      distinctUntilChanged(),
      switchMap(([kind, prefix]) => this.getListForKind(kind, prefix)),
    );
  }
}
