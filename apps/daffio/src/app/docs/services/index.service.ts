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

import { DAFFIO_DOCS_PATH_TOKEN } from './docs-path.token';
import {
  DaffioAssetFetchService,
  DaffioAssetFetchServiceInterface,
} from '../../core/assets/fetch/service.interface';
import { DaffioRoute } from '../../core/router/route.type';
import { DaffioDocList } from '../models/doc-list';

@Injectable()
export class DaffioDocsIndexService<T extends DaffioDocList = DaffioDocList> {

  constructor(
    @Inject(DaffioAssetFetchService) private fetchAsset: DaffioAssetFetchServiceInterface,
    @Inject(DAFFIO_DOCS_PATH_TOKEN) private docsPath: string,
    private route: DaffRouterActivatedRoute,
  ) {}

  getList(): Observable<T> {
    return this.route.route$.pipe(
      switchMap((route) => route.data),
      map((data: DaffioRoute['data']) => [data.docKind, data.docPrefix]),
      distinctUntilChanged(),
      switchMap(([kind, prefix]) =>
        this.fetchAsset.fetch<T>(`${this.docsPath}/${prefix || DAFF_DOCS_PATH}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[kind]}/index.json`),
      ),
    );
  }
}
