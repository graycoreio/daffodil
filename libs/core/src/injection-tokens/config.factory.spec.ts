import { InjectionToken } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffConfigInjectionToken } from '@daffodil/core';

import { createConfigInjectionToken } from './config.factory';

interface Config {
  field: string;
  other: string;
}

describe('@daffodil/core | createConfigInjectionToken', () => {
  let name: string;
  let value: Partial<Config>;
  let defaultConfig: Config;

  let result: DaffConfigInjectionToken<Config>;

  beforeEach(() => {
    name = faker.random.word();
    value = {
      field: faker.random.word(),
    };
    defaultConfig = {
      field: faker.random.word(),
      other: faker.random.word(),
    };
    result = createConfigInjectionToken(defaultConfig, name);
  });

  it('should return a token', () => {
    expect(result.token.toString()).toContain(name);
  });

  describe('when the provided value is an injection token', () => {
    let token: InjectionToken<Partial<Config>>;
    let defaultToken: InjectionToken<Config>;

    beforeEach(() => {
      token = new InjectionToken('test');
      defaultToken = new InjectionToken('default');
      TestBed.configureTestingModule({
        providers: [
          {
            provide: token,
            useValue: value,
          },
          {
            provide: defaultToken,
            useValue: defaultConfig,
          },
        ],
      });
    });

    it('should return a provider that spreads in passed values with the default', () => {
      const res = result.provider(token);
      expect(res.provide).toEqual(result.token);
      expect(TestBed.runInInjectionContext<Config>(<any>res.useFactory).field).toEqual(value.field);
      expect(TestBed.runInInjectionContext<Config>(<any>res.useFactory).other).toEqual(defaultConfig.other);
    });
  });

  it('should return a provider that spreads in passed values with the default', () => {
    const res = result.provider(value);
    expect(res.provide).toEqual(result.token);
    expect(TestBed.runInInjectionContext<Config>(<any>res.useFactory).field).toEqual(value.field);
    expect(TestBed.runInInjectionContext<Config>(<any>res.useFactory).other).toEqual(defaultConfig.other);
  });
});
