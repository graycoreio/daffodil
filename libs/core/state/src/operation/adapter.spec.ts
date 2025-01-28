import {
  daffOperationInitialState,
  DaffOperationState,
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';

import {
  daffClearErrors,
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
    expect(result.daffState).toEqual(DaffState.Resolving);
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
    expect(result.daffState).toEqual(DaffState.Updating);
  });
});

describe('@daffodil/core/state | daffCompleteOperation', () => {
  let state: DaffOperationState;
  let result: DaffOperationState;

  beforeEach(() => {
    state = {
      daffErrors: [{ code: 'code', message: 'message' }],
      daffState: DaffState.Resolving,
    };
    result = daffCompleteOperation(state);
  });

  it('should set loading to stable', () => {
    expect(result.daffState).toEqual(DaffState.Stable);
  });

  it('should reset errors', () => {
    expect(result.daffErrors).toEqual([]);
  });
});

describe('@daffodil/core/state | daffClearErrors', () => {
  let state: DaffOperationState;
  let result: DaffOperationState;

  beforeEach(() => {
    state = {
      daffErrors: [{ code: 'code', message: 'message' }],
      daffState: DaffState.Resolving,
    };
    result = daffClearErrors(state);
  });

  it('should reset errors', () => {
    expect(result.daffErrors).toEqual([]);
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
      daffState: DaffState.Resolving,
    };
    result = daffOperationFailed([error], state);
  });

  it('should set loading to error', () => {
    expect(result.daffState).toEqual(DaffState.Error);
  });

  it('should add the error', () => {
    expect(result.daffErrors).toEqual([error]);
  });
});
