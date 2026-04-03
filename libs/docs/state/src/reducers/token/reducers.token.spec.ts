import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import {
  provideDaffDocsExtraReducers,
  DaffDocsReducersState,
  daffDocsInitialState,
  daffGetDocsAdapter,
} from '@daffodil/docs/state';

import { DAFF_DOCS_REDUCERS } from './reducers.token';

describe('@daffodil/docs/state | provideDaffDocsExtraReducers', () => {
  let extraError: DaffStateError;

  let extraReducer: ActionReducer<DaffDocsReducersState>;
  let reducer: ActionReducer<DaffDocsReducersState>;
  let result: DaffDocsReducersState;

  beforeEach(() => {
    const initialState: DaffDocsReducersState = {
      docs: {
        ...daffDocsInitialState,
        daffErrors: [{
          code: 'code',
          message: 'already in state',
        }],
      },
      docsEntities: daffGetDocsAdapter().getInitialState(),
    };
    extraError = {
      code:  'code',
      message: 'an injected error',
    };
    extraReducer = (state = initialState, action) => ({
      ...state,
      docs: {
        ...state.docs,
        daffErrors: [
          ...state.docs.daffErrors,
          extraError,
        ],
      },
    });

    TestBed.configureTestingModule({
      providers: [
        ...provideDaffDocsExtraReducers(extraReducer),
      ],
    });

    reducer = TestBed.inject( DAFF_DOCS_REDUCERS);

    result = reducer(initialState, { type: 'action' });
  });

  it('should run the extra reducer after the daffodil reducers', () => {
    expect(result.docs.daffErrors[1]).toEqual(extraError);
  });
});
