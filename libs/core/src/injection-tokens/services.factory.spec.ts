import {
  Injectable,
  Type,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffServicesInjectionToken } from '@daffodil/core';

import { createServicesInjectionToken } from './services.factory';

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

@Injectable({
  providedIn: 'root',
})
class Test2 implements TestType {
  get() {
    return 'test2';
  }
}

describe('@daffodil/core | createServicesInjectionToken', () => {
  let name: string;
  let values: Array<Type<TestType>>;

  let result: DaffServicesInjectionToken<TestType>;

  beforeEach(() => {
    name = faker.random.word();
    values = [
      Test1,
      Test2,
    ];
    result = createServicesInjectionToken(name);
  });

  it('should return a token', () => {
    expect(result.token.toString()).toContain(name);
  });

  it('should return a provider', () => {
    const res = result.provider(...values);
    values.forEach((value, i) => {
      expect(res[i].provide).toEqual(result.token);
      expect(res[i].useExisting).toEqual(value);
    });
  });
});

describe('@daffodil/core | createServicesInjectionToken | Integration', () => {
  let name: string;
  let values: Array<Type<TestType>>;

  let result: DaffServicesInjectionToken<TestType>;

  beforeEach(() => {
    name = faker.random.word();
    values = [
      Test1,
      Test2,
    ];
    result = createServicesInjectionToken(name);
  });

  describe('when values are provided', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          result.provider(...values),
        ],
      });
    });

    it('should inject the values', () => {
      expect(TestBed.inject(result.token)[0].get()).toEqual('test1');
      expect(TestBed.inject(result.token)[1].get()).toEqual('test2');
    });
  });

  describe('when values are not provided', () => {
    it('should inject an empty array', () => {
      expect(TestBed.inject(result.token)).toEqual([]);
    });
  });
});
