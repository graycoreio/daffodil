import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { DAFF_PRODUCT_COMPOSITE_REDUCERS } from './reducers/injection-tokens/reducers.token';
import { DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY } from './reducers/public_api';

/**
 * A module that provides the default reducers and effects for composite product redux state.
 */
@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY, DAFF_PRODUCT_COMPOSITE_REDUCERS),
  ],
})
export class DaffCompositeProductStateModule { }
