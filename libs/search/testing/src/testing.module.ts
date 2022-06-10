import { NgModule } from '@angular/core';

import { DaffSearchResultFactory } from './factories/public_api';
import { DAFF_SEARCH_RESULT_KIND_FACTORIES } from './injection-tokens/public_api';

/**
 * Provides the default search result factory as a search result type factory.
 */
@NgModule({
  providers: [
    {
      provide: DAFF_SEARCH_RESULT_KIND_FACTORIES,
      useExisting: DaffSearchResultFactory,
      multi: true,
    },
  ],
})
export class DaffSearchTestingModule { }
