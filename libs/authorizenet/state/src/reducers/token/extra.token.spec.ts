import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffAuthorizeNetReducersState } from '@daffodil/authorizenet/state';

import {
  daffAuthorizeNetProvideExtraReducers,
  DAFF_AUTHORIZE_NET_EXTRA_REDUCERS,
} from './extra.token';

describe('@daffodil/authorizenet/state | daffAuthorizeNetProvideExtraReducers', () => {
  let reducers: ActionReducer<DaffAuthorizeNetReducersState>[];
  let result: ActionReducer<DaffAuthorizeNetReducersState>[];

  beforeEach(() => {
    reducers = [
      (state, action) => state,
      (state, action) => state,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffAuthorizeNetProvideExtraReducers(...reducers),
      ],
    });

    result = TestBed.inject(DAFF_AUTHORIZE_NET_EXTRA_REDUCERS);
  });

  it('should provide the reducers to the token', () => {
    reducers.forEach(reducer => {
      expect(result).toContain(reducer);
    });
  });
});
