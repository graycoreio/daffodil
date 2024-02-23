import { faker } from '@faker-js/faker/locale/en_US';

import { DaffConfigInjectionToken } from '@daffodil/core';

import { createConfigInjectionToken } from './config.factory';

interface Config {
  field: string;
  other: string;
}

describe('@daffodil/core | createConfigInjectionToken', () => {
  let name: string;
  let value: number;
  let defaultConfig: Config;

  let result: DaffConfigInjectionToken<Config>;

  beforeEach(() => {
    name = faker.random.word();
    defaultConfig = {
      field: faker.random.word(),
      other: faker.random.word(),
    };
    result = createConfigInjectionToken(defaultConfig, name);
  });

  it('should return a token', () => {
    expect(result.token.toString()).toContain(name);
  });

  it('should return a provider that spreads in passed values with the default', () => {
    const val = faker.random.word();
    const res = result.provider({
      field: val,
    });
    expect(res.provide).toEqual(result.token);
    expect(res.useValue.field).toEqual(val);
    expect(res.useValue.other).toEqual(defaultConfig.other);
  });
});
