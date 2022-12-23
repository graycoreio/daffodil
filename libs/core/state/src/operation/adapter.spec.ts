import {
  daffOperationInitialState,
  DaffOperationState,
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';

import {
  completeOperation,
  operationFailed,
  startMutation,
  startResolution,
} from './adapter';

describe('@daffodil/core/state | startResolution', () => {
  let state: DaffOperationState;
  let result: DaffOperationState;

  beforeEach(() => {
    state = daffOperationInitialState;
    result = startResolution(state);
  });

  it('should set loading to resolving', () => {
    expect(result.loading).toEqual(DaffState.Resolving);
  });
});

describe('@daffodil/core/state | startMutation', () => {
  let state: DaffOperationState;
  let result: DaffOperationState;

  beforeEach(() => {
    state = daffOperationInitialState;
    result = startMutation(state);
  });

  it('should set loading to mutating', () => {
    expect(result.loading).toEqual(DaffState.Mutating);
  });
});

describe('@daffodil/core/state | completeOperation', () => {
  let state: DaffOperationState;
  let result: DaffOperationState;

  beforeEach(() => {
    state = {
      errors: [{ code: 'code', message: 'message' }],
      loading: DaffState.Resolving,
    };
    result = completeOperation(state);
  });

  it('should set loading to stable', () => {
    expect(result.loading).toEqual(DaffState.Stable);
  });

  it('should reset errors', () => {
    expect(result.errors).toEqual([]);
  });
});

describe('@daffodil/core/state | operationFailed', () => {
  let state: DaffOperationState;
  let result: DaffOperationState;

  let error: DaffStateError;

  beforeEach(() => {
    error = { code: 'code', message: 'message' };
    state = {
      ...daffOperationInitialState,
      loading: DaffState.Resolving,
    };
    result = operationFailed([error], state);
  });

  it('should set loading to stable', () => {
    expect(result.loading).toEqual(DaffState.Stable);
  });

  it('should add the error', () => {
    expect(result.errors).toEqual([error]);
  });
});
