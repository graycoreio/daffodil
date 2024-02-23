import { faker } from '@faker-js/faker/locale/en_US';

import { DaffSingleInjectionToken } from '@daffodil/core';

import { createSingleInjectionToken } from './single.factory';

describe('@daffodil/core | createSingleInjectionToken', () => {
  let name: string;
  let value: number;

  let result: DaffSingleInjectionToken<number>;

  beforeEach(() => {
    name = faker.random.word();
    value = faker.datatype.number();
    result = createSingleInjectionToken(name);
  });

  it('should return a token', () => {
    expect(result.token.toString()).toContain(name);
  });

  it('should return a provider', () => {
    const res = result.provider(value);
    expect(res.provide).toEqual(result.token);
    expect(res.useValue).toEqual(value);
  });
});
