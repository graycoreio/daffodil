import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffProduct } from '@daffodil/product';

import { DaffSearchProductFacadeInterface } from './search-facade.interface';
import { DaffSearchProductStateRootSlice } from '../../reducers/public_api';
import { DaffSearchProductSelectors } from '../../selectors/public_api';

/**
 * @inheritdoc
 */
export abstract class DaffSearchProductFacade implements DaffSearchProductFacadeInterface {
  productResults$: Observable<DaffProduct[]>;

  constructor(
    private store: Store<DaffSearchProductStateRootSlice>,
    selectors: DaffSearchProductSelectors,
  ) {
    const {
      selectProductResults,
    } = selectors;

    this.productResults$ = this.store.pipe(select(selectProductResults));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
