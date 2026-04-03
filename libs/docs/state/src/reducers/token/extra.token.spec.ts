import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import {
  daffDocsInitialState,
  DaffDocsReducersState,
  daffGetDocsAdapter,
} from '@daffodil/docs/state';

import {
  provideDaffDocsExtraReducers,
  DAFF_DOCS_EXTRA_REDUCERS,
} from './extra.token';

describe('@daffodil/docs/state | provideDaffDocsExtraReducers', () => {
  let reducers: Array<ActionReducer<DaffDocsReducersState>>;
  let result: Array<ActionReducer<DaffDocsReducersState>>;

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
    reducers = [
      (state = initialState, action) => state,
      (state = initialState, action) => state,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...provideDaffDocsExtraReducers(...reducers),
      ],
    });

    result = TestBed.inject( DAFF_DOCS_EXTRA_REDUCERS);
  });

  it('should provide the reducers to the token', () => {
    reducers.forEach(reducer => {
      expect(result).toContain(reducer);
    });
  });
});
