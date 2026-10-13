import {
  inject,
  NgModule,
} from '@angular/core';

import {
  DAFF_CART_RETRIEVAL_ACTIONS,
  daffCartProvideMetaReducerFactories,
  DaffCartStateModule,
} from '@daffodil/cart/state';
import {
  daffProductProvideMetaReducerFactories,
  DaffProductStateModule,
} from '@daffodil/product/state';

import {
  daffCrossSellProductsCartMetaReducerFactory,
  daffCrossSellProductEntitiesMetaReducerFactory,
} from './reducers/public_api';

/**
 * A module that provides the default reducers for the cross-sell product redux state.
 */
@NgModule({
  imports: [
    DaffProductStateModule,
    DaffCartStateModule,
  ],
  providers: [
    daffProductProvideMetaReducerFactories(() => daffCrossSellProductEntitiesMetaReducerFactory(inject(DAFF_CART_RETRIEVAL_ACTIONS))),
    daffCartProvideMetaReducerFactories(() => daffCrossSellProductsCartMetaReducerFactory(inject(DAFF_CART_RETRIEVAL_ACTIONS))),
  ],
})
export class DaffCrossSellProductStateModule {}
