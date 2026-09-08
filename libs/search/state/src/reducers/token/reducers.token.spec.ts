import { inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { daffComposeReducers } from '@daffodil/core/state';
import {
  daffSearchProvideExtraReducers,
  DaffSearchReducersState,
  daffSearchInitialState,
  DaffSearchLoad,
} from '@daffodil/search/state';

import { daffSearchReducers } from '../reducers';
import { DAFF_SEARCH_EXTRA_REDUCERS } from './extra.token';
import {
  DAFF_SEARCH_REDUCERS,
  provideDaffSearchReducersFactory,
} from './reducers.token';

describe('daffSearchProvideExtraReducers', () => {
  let extraQuery: string;

  let extraReducer: ActionReducer<DaffSearchReducersState>;
  let reducer: ActionReducer<DaffSearchReducersState>;
  let result: DaffSearchReducersState;

  beforeEach(() => {
    const initialState: DaffSearchReducersState = {
      search: daffSearchInitialState,
      incremental: daffSearchInitialState,
    };
    extraReducer = (state, action) => ({
      ...state,
      search: {
        ...state.search,
        recent: [
          ...state.search.recent,
          extraQuery,
        ],
      },
    });

    TestBed.configureTestingModule({
      providers: [
        ...daffSearchProvideExtraReducers(extraReducer),
        provideDaffSearchReducersFactory(() => daffComposeReducers([
          combineReducers(daffSearchReducers),
          ...inject(DAFF_SEARCH_EXTRA_REDUCERS),
        ])),
      ],
    });

    extraQuery = 'extra';
    reducer = TestBed.inject(DAFF_SEARCH_REDUCERS);

    result = reducer(initialState, new DaffSearchLoad('any'));
  });

  it('should run the extra reducer after the daffodil reducers', () => {
    expect(result.search.recent[1]).toEqual(extraQuery);
  });
});
