import { routerNavigatedAction } from '@ngrx/router-store';

import { DaffErrorable } from '@daffodil/core/state';

import { daffRouterStateNavigatedClearErrorsReducer as reducer } from './navigated.reducer';

type TestState = DaffErrorable;

const initialState: TestState = {
  errors: [
    {
      code: 'code',
      message: 'message',
    },
  ],
};

describe('@daffodil/core/state | daffRouterStateNavigatedClearErrorsReducer', () => {
  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when ROUTER_NAVIGATED is triggered', () => {
    let result: TestState;

    beforeEach(() => {
      const navigatedAction = routerNavigatedAction({ payload: null });

      result = reducer(initialState, navigatedAction);
    });

    it('sets clears errors', () => {
      expect(result.errors).toEqual([]);
    });
  });
});
