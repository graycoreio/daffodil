import {
  inject,
  Injectable,
} from '@angular/core';
import {
  from,
  map,
  Observable,
} from 'rxjs';

import {
  DaffDocKind,
  DaffDocsNavList,
} from '@daffodil/docs-utils';

import { DAFFIO_DOCS_INDEX_LOADERS } from './loaders.token';

@Injectable()
export class DaffioDocsIndexService<T extends DaffDocsNavList = DaffDocsNavList> {
  private loaders = inject(DAFFIO_DOCS_INDEX_LOADERS);

  getListForKind(kind: DaffDocKind): Observable<T> {
    return from(this.loaders[kind]()).pipe(
      map((module) => <T>module.default),
    );
  }
}
