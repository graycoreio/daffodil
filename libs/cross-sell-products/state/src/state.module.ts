import {
  inject,
  NgModule,
} from '@angular/core';

import {
  DAFF_CART_RETRIEVAL_ACTIONS,
  daffCartProvideMetaReducerFactories,
} from '@daffodil/cart/state';
import { daffProductProvideMetaReducerFactories } from '@daffodil/product/state';

import {
  daffCrossSellProductsCartMetaReducerFactory,
  daffCrossSellProductEntitiesMetaReducerFactory,
} from './reducers/public_api';

/**
 * A module that provides the default reducers for the cross-sell product redux state.
 */
@NgModule({
  providers: [
    daffProductProvideMetaReducerFactories(() => daffCrossSellProductEntitiesMetaReducerFactory(inject(DAFF_CART_RETRIEVAL_ACTIONS))),
    daffCartProvideMetaReducerFactories(() => daffCrossSellProductsCartMetaReducerFactory(inject(DAFF_CART_RETRIEVAL_ACTIONS))),
  ],
})
export class DaffCrossSellProductStateModule {}
