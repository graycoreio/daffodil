import { NgModule } from '@angular/core';

import { provideDaffSearchResultKindFactories } from '@daffodil/search/testing';

import { DaffSearchProductResultFactory } from './factories/public_api';

/**
 * Provides the default search result factory as a search result type factory.
 */
@NgModule({
  providers: [
    provideDaffSearchResultKindFactories(DaffSearchProductResultFactory),
  ],
})
export class DaffSearchProductTestingModule { }
