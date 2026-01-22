import { NgModule } from '@angular/core';
import {
  combineReducers,
  StoreModule,
} from '@ngrx/store';

import {
  DaffDocsStateModule,
  provideDaffDocsLoadSuccessActions,
} from '@daffodil/docs/state';
import {
  DaffSearchStateModule,
  DaffSearchActionTypes,
  DaffSearchActions,
  daffSearchProvideExtraReducers,
} from '@daffodil/search/state';
import {
  DAFF_SEARCH_DOCS_RESULT_KIND,
  DaffSearchDocsResult,
} from '@daffodil/search-docs';

import {
  DAFF_SEARCH_DOCS_STORE_FEATURE_KEY,
  daffSearchDocsReducers,
  daffSearchDocsCollectionSearchReducers,
} from './reducers/public_api';

@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_SEARCH_DOCS_STORE_FEATURE_KEY, daffSearchDocsReducers),
    DaffDocsStateModule,
    DaffSearchStateModule,
  ],
  providers: [
    daffSearchProvideExtraReducers(combineReducers(daffSearchDocsCollectionSearchReducers)),
    // provideDaffDocsExtraReducers(combineReducers(daffSearchDocsDocsReducers)),
    provideDaffDocsLoadSuccessActions<DaffSearchActions<DaffSearchDocsResult>>(
      {
        type: DaffSearchActionTypes.SearchLoadSuccessAction,
        transform: (action) => ({ payload: action.payload.collection[DAFF_SEARCH_DOCS_RESULT_KIND] || [] }),
      },
    ),
    provideDaffDocsLoadSuccessActions<DaffSearchActions<DaffSearchDocsResult>>(
      {
        type: DaffSearchActionTypes.SearchIncrementalSuccessAction,
        transform: (action) => ({ payload: action.payload[DAFF_SEARCH_DOCS_RESULT_KIND] || [] }),
      },
    ),
  ],
})
export class DaffSearchDocsStateCoreModule {}
