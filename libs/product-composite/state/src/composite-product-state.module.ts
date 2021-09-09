import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import {
  daffCompositeProductReducers,
  DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY,
} from './reducers/public_api';

/**
 * A module that provides the default reducers and effects for composite product redux state.
 */
@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY, daffCompositeProductReducers),
  ],
})
export class DaffCompositeProductStateModule { }
