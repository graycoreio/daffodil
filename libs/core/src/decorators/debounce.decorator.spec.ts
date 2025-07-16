import { debounce } from './debounce.decorator';

describe('debounce decorator', () => {
  let mockMethod: jasmine.Spy;
  let testClass: any;
  let pendingTimeouts: number[] = [];

  beforeEach(() => {
    mockMethod = jasmine.createSpy('mockMethod');
    pendingTimeouts = [];

    class TestClass {
      @debounce(200)
      debouncedMethod(...args: any[]) {
        mockMethod(...args);
      }

      @debounce(500)
      quickDefaultMethod(...args: any[]) {
        mockMethod(...args);
      }
    }

    testClass = new TestClass();
  });

  afterEach(() => {
    pendingTimeouts.forEach(timeoutId => clearTimeout(timeoutId));
    pendingTimeouts = [];
  });

  const setTestTimeout = (callback: () => void, delay: number): number => {
    const timeoutId = <any>setTimeout(callback, delay);
    pendingTimeouts.push(timeoutId);
    return timeoutId;
  };

  it('should delay method execution', (done) => {
    testClass.debouncedMethod('test');

    expect(mockMethod).not.toHaveBeenCalled();

    setTestTimeout(() => {
      expect(mockMethod).toHaveBeenCalledWith('test');
      expect(mockMethod).toHaveBeenCalledTimes(1);
      done();
    }, 400);
  });

  it('should debounce multiple rapid calls', (done) => {
    testClass.debouncedMethod('call1');
    testClass.debouncedMethod('call2');
    testClass.debouncedMethod('call3');

    expect(mockMethod).not.toHaveBeenCalled();

    setTestTimeout(() => {
      expect(mockMethod).toHaveBeenCalledWith('call3');
      expect(mockMethod).toHaveBeenCalledTimes(1);
      done();
    }, 400);
  });

  it('should preserve method context', (done) => {
    class ContextTest {
      value = 'context-value';

      @debounce(100)
      testContext() {
        mockMethod(this.value);
      }
    }

    const instance = new ContextTest();
    instance.testContext();

    setTestTimeout(() => {
      expect(mockMethod).toHaveBeenCalledWith('context-value');
      done();
    }, 300);
  });

  it('should use default delay when no parameter provided', (done) => {
    testClass.quickDefaultMethod('default-test');

    setTestTimeout(() => {
      expect(mockMethod).not.toHaveBeenCalled();
    }, 300);

    setTestTimeout(() => {
      expect(mockMethod).toHaveBeenCalledWith('default-test');
      expect(mockMethod).toHaveBeenCalledTimes(1);
      done();
    }, 800);
  });

  it('should cancel previous timeout when called again', (done) => {
    testClass.debouncedMethod('first');

    setTestTimeout(() => {
      testClass.debouncedMethod('second');
    }, 100);

    setTestTimeout(() => {
      expect(mockMethod).not.toHaveBeenCalled();
    }, 250);

    setTestTimeout(() => {
      expect(mockMethod).toHaveBeenCalledWith('second');
      expect(mockMethod).toHaveBeenCalledTimes(1);
      done();
    }, 500);
  });
});
