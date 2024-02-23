import { TestBed } from '@angular/core/testing';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffMultiInjectionToken } from '@daffodil/core';

import { createMultiInjectionToken } from './multi.factory';

describe('@daffodil/core | createMultiInjectionToken', () => {
  let name: string;
  let values: Array<number>;

  let result: DaffMultiInjectionToken<number>;

  beforeEach(() => {
    name = faker.random.word();
    values = [
      faker.datatype.number(),
      faker.datatype.number(),
    ];
    result = createMultiInjectionToken(name);
  });

  it('should return a token', () => {
    expect(result.token.toString()).toContain(name);
  });

  it('should return a provider', () => {
    const res = result.provider(...values);
    values.forEach((value, i) => {
      expect(res[i].provide).toEqual(result.token);
      expect(res[i].useValue).toEqual(value);
    });
  });
});

describe('@daffodil/core | createMultiInjectionToken | Integration', () => {
  let name: string;
  let values: Array<number>;

  let result: DaffMultiInjectionToken<number>;

  beforeEach(() => {
    name = faker.random.word();
    values = [
      faker.datatype.number(),
      faker.datatype.number(),
    ];

    result = createMultiInjectionToken(name);
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
      expect(TestBed.inject(result.token)).toEqual(values);
    });
  });

  describe('when values are not provided', () => {
    it('should inject an empty array', () => {
      expect(TestBed.inject(result.token)).toEqual([]);
    });
  });
});
