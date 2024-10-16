import { NgModule } from '@angular/core';

import { DaffSearchResultFactory } from './factories/public_api';
import { provideDaffSearchResultKindFactories } from './injection-tokens/public_api';

/**
 * Provides the default search result factory as a search result type factory.
 */
@NgModule({
  providers: [
    provideDaffSearchResultKindFactories(DaffSearchResultFactory),
  ],
})
export class DaffSearchTestingModule { }
