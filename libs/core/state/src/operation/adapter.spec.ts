import {
  daffOperationInitialState,
  DaffOperationState,
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';

import {
  daffCompleteOperation,
  daffOperationFailed,
  daffStartMutation,
  daffStartResolution,
} from './adapter';

describe('@daffodil/core/state | daffStartResolution', () => {
  let state: DaffOperationState;
  let result: DaffOperationState;

  beforeEach(() => {
    state = daffOperationInitialState;
    result = daffStartResolution(state);
  });

  it('should set loading to resolving', () => {
    expect(result.loading).toEqual(DaffState.Resolving);
  });
});

describe('@daffodil/core/state | daffStartMutation', () => {
  let state: DaffOperationState;
  let result: DaffOperationState;

  beforeEach(() => {
    state = daffOperationInitialState;
    result = daffStartMutation(state);
  });

  it('should set loading to mutating', () => {
    expect(result.loading).toEqual(DaffState.Mutating);
  });
});

describe('@daffodil/core/state | daffCompleteOperation', () => {
  let state: DaffOperationState;
  let result: DaffOperationState;

  beforeEach(() => {
    state = {
      errors: [{ code: 'code', message: 'message' }],
      loading: DaffState.Resolving,
    };
    result = daffCompleteOperation(state);
  });

  it('should set loading to stable', () => {
    expect(result.loading).toEqual(DaffState.Stable);
  });

  it('should reset errors', () => {
    expect(result.errors).toEqual([]);
  });
});

describe('@daffodil/core/state | daffOperationFailed', () => {
  let state: DaffOperationState;
  let result: DaffOperationState;

  let error: DaffStateError;

  beforeEach(() => {
    error = { code: 'code', message: 'message' };
    state = {
      ...daffOperationInitialState,
      loading: DaffState.Resolving,
    };
    result = daffOperationFailed([error], state);
  });

  it('should set loading to stable', () => {
    expect(result.loading).toEqual(DaffState.Stable);
  });

  it('should add the error', () => {
    expect(result.errors).toEqual([error]);
  });
});
