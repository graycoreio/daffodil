import { DaffInheritableError } from './inheritable-error';

class MockError extends DaffInheritableError {}

describe('Core | Error | DaffInheritableError', () => {
  let mockError: MockError;

  beforeEach(() => {
    mockError = new MockError();
  });

  it('should detect the error class with instanceof', () => {
    expect(mockError instanceof MockError).toBeTruthy();
  });
});
