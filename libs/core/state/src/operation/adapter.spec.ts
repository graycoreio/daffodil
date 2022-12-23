import {
  daffOperationInitialState,
  DaffOperationState,
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';

import { DaffOperationStateAdapter } from './adapter';

describe('@daffodil/core/state | DaffOperationStateAdapter', () => {
  let state: DaffOperationState;
  let result: DaffOperationState;
  let adapter: DaffOperationStateAdapter;

  beforeEach(() => {
    state = daffOperationInitialState;
    adapter = new DaffOperationStateAdapter();
  });

  describe('startResolution', () => {
    beforeEach(() => {
      result = adapter.startResolution(state);
    });

    it('should set loading to resolving', () => {
      expect(result.loading).toEqual(DaffState.Resolving);
    });
  });

  describe('startMutation', () => {
    beforeEach(() => {
      result = adapter.startMutation(state);
    });

    it('should set loading to mutating', () => {
      expect(result.loading).toEqual(DaffState.Mutating);
    });
  });

  describe('completeOperation', () => {
    beforeEach(() => {
      state = {
        errors: [{ code: 'code', message: 'message' }],
        loading: DaffState.Resolving,
      };
      result = adapter.completeOperation(state);
    });

    it('should set loading to stable', () => {
      expect(result.loading).toEqual(DaffState.Stable);
    });

    it('should reset errors', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('operationFailed', () => {
    let error: DaffStateError;

    beforeEach(() => {
      error = { code: 'code', message: 'message' };
      state = {
        ...daffOperationInitialState,
        loading: DaffState.Resolving,
      };
      result = adapter.operationFailed([error], state);
    });

    it('should set loading to stable', () => {
      expect(result.loading).toEqual(DaffState.Stable);
    });

    it('should add the error', () => {
      expect(result.errors).toEqual([error]);
    });
  });
});
