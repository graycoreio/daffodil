import { NgModule } from '@angular/core';

import { DAFF_SEARCH_RESULT_KIND_FACTORIES } from '@daffodil/search/testing';

import { DaffSearchProductResultFactory } from './factories/public_api';

/**
 * Provides the default search result factory as a search result type factory.
 */
@NgModule({
  providers: [
    {
      provide: DAFF_SEARCH_RESULT_KIND_FACTORIES,
      useExisting: DaffSearchProductResultFactory,
      multi: true,
    },
  ],
})
export class DaffSearchProductTestingModule { }
