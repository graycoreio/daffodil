import { Dictionary } from '@ngrx/entity';
import { Observable } from 'rxjs';

import {
  DaffStateError,
  DaffOperationStateFacadeInterface,
  DaffState,
} from '@daffodil/core/state';
import { DaffDocsItem } from '@daffodil/docs-utils';

import { DaffDocsReducerState } from '../../reducers/public_api';

export interface DaffDocsFacadeInterface<T extends DaffDocsItem = DaffDocsItem> extends DaffOperationStateFacadeInterface<DaffDocsReducerState> {
  loading$: Observable<boolean>;
  errors$: Observable<DaffStateError[]>;
  loadingState$: Observable<DaffState>;
  resolving$: Observable<boolean>;
  mutating$: Observable<boolean>;
  hasErrors$: Observable<boolean>;

  docsItems$: Observable<Array<T>>;
  docsEntities$: Observable<Dictionary<T>>;
  docsIds$: Observable<T['id'][]>;
  docsCount$: Observable<number>;

  getDocs$(docsId: T['id']): Observable<T | null>;
}
