import { Injectable } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';
import { DaffDocsFacadeInterface } from '@daffodil/docs/state';
import { DaffDocsItem } from '@daffodil/docs-utils';

/**
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffDocsFacade implements DaffDocsFacadeInterface {
  loading$ = new BehaviorSubject<boolean>(false);
  errors$ = new BehaviorSubject<DaffStateError[]>([]);
  loadingState$ = new BehaviorSubject<DaffState>(DaffState.Stable);
  resolving$ = new BehaviorSubject<boolean>(false);
  mutating$ = new BehaviorSubject<boolean>(false);
  hasErrors$ = new BehaviorSubject<boolean>(false);

  docsItems$ = new BehaviorSubject<Array<DaffDocsItem>>([]);
  docsEntities$ = new BehaviorSubject<Dictionary<DaffDocsItem>>({});
  docsIds$ = new BehaviorSubject<DaffDocsItem['id'][]>([]);
  docsCount$ = new BehaviorSubject<number>(0);

  getDocs$(docsId: DaffDocsItem['id']): BehaviorSubject<DaffDocsItem> {
    return new BehaviorSubject<any>(null);
  }

  dispatch(action: Action) {};
}
