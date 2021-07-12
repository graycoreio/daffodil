import { ActionReducer } from '@ngrx/store';

import { daffComposeReducers } from './create-meta';

interface MockState {
  foo: string;
  bar: string;
}

const initialState: MockState = {
  foo: '',
  bar: '',
};

describe('@daffodil/core/state | daffComposeReducers', () => {
  let reducers: ActionReducer<MockState>[];
  let metaReducer: ActionReducer<MockState>;

  beforeEach(() => {
    reducers = [
      (state, action) => ({
        ...state,
        foo: '1',
      }),
      (state, action) => ({
        ...state,
        bar: '2',
      }),
    ];

    metaReducer = daffComposeReducers(reducers);
  });

  describe('the meta reducer', () => {
    let result: MockState;

    beforeEach(() => {
      result = metaReducer(initialState, { type: 'action' });
    });

    it('should apply all passed reducers', () => {
      expect(result.foo).toEqual('1');
      expect(result.bar).toEqual('2');
    });
  });
});
