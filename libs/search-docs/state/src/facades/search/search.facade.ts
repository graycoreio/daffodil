import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffSearchDocsResult } from '@daffodil/search-docs';

import { DaffSearchDocsFacadeInterface } from './search-facade.interface';
import { DaffSearchDocsStateRootSlice } from '../../reducers/public_api';
import { DaffSearchDocsSelectors } from '../../selectors/public_api';


/**
 * @inheritdoc
 */
export abstract class DaffSearchDocsFacade implements DaffSearchDocsFacadeInterface {
  docsResults$: Observable<Array<DaffSearchDocsResult>>;

  constructor(
    private store: Store<DaffSearchDocsStateRootSlice>,
    selectors: DaffSearchDocsSelectors,
  ) {
    const {
      selectDocsResults,
    } = selectors;

    this.docsResults$ = this.store.pipe(select(selectDocsResults));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
