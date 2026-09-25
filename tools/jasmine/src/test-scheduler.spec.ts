import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import {
  createTestScheduler,
  runMarbles,
} from './test-scheduler.js';

describe('@daffodil/jasmine | createTestScheduler', () => {
  it('should return a TestScheduler', () => {
    expect(createTestScheduler()).toEqual(jasmine.any(TestScheduler));
  });

  it('should assert that the observable matches the marble', () => {
    createTestScheduler().run(({ expectObservable }) => {
      expectObservable(of(1)).toBe('(a|)', { a: 1 });
    });
  });
});

describe('@daffodil/jasmine | runMarbles', () => {
  it('should assert that the observable matches the marble', () => {
    runMarbles(({ expectObservable }) => {
      expectObservable(of(1)).toBe('(a|)', { a: 1 });
    });
  });

  it('should return the result of the callback', () => {
    expect(runMarbles(() => 'result')).toEqual('result');
  });
});
