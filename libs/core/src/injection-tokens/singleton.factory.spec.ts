import {
  Injectable,
  Type,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffSingletonInjectionToken } from '@daffodil/core';

import { createSingletonInjectionToken } from './singleton.factory';

interface TestType {
  get(): string;
}

@Injectable({
  providedIn: 'root',
})
class Test1 implements TestType {
  get() {
    return 'test1';
  }
}

describe('@daffodil/core | createSingletonInjectionToken', () => {
  let name: string;
  let value: Type<TestType>;

  let result: DaffSingletonInjectionToken<TestType>;

  beforeEach(() => {
    name = faker.random.word();
    value = Test1;
    result = createSingletonInjectionToken(name);
  });

  it('should return a token', () => {
    expect(result.token.toString()).toContain(name);
  });

  it('should return a provider', () => {
    const res = result.provider(value);
    expect(res.provide).toEqual(result.token);
    expect(res.useExisting).toEqual(value);
  });
});

describe('@daffodil/core | createSingletonInjectionToken | Integration', () => {
  let name: string;
  let value: Type<TestType>;

  let result: DaffSingletonInjectionToken<TestType>;

  beforeEach(() => {
    name = faker.random.word();
    value = Test1;
    result = createSingletonInjectionToken(name);
  });

  describe('when value are provided', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          result.provider(value),
        ],
      });
    });

    it('should inject the value', () => {
      expect(TestBed.inject(result.token).get()).toEqual('test1');
    });
  });
});
