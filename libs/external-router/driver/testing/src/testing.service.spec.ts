import { TestBed } from '@angular/core/testing';

import { DaffExternalRouterNotFoundError } from '@daffodil/external-router';
import { runMarbles } from '@daffodil/jasmine';

import { DaffExternalRouterDriverTestingConfig } from './config';
import { DaffExternalRouterDriverTestingModule } from './testing.module';
import { DaffExternalRouterTestingDriver } from './testing.service';

describe('@daffodil/external-router/driver/testing | DaffExternalRouterTestingDriver', () => {
  let service: DaffExternalRouterTestingDriver;

  const setupTest = (
    configuration: DaffExternalRouterDriverTestingConfig = {},
  ) => {
    TestBed.configureTestingModule({
      imports: [DaffExternalRouterDriverTestingModule.forRoot(configuration)],
    });
    service = TestBed.inject(DaffExternalRouterTestingDriver);

  };

  it('should be created', () => {
    setupTest();
    expect(service).toBeTruthy();
  });

  it('should return a resolved route if the route lookup succeeds', () => {
    const url = 'test';
    setupTest({
      [url]: 'PRODUCT',
    });

    runMarbles(helpers => {
      const { expectObservable } = helpers;
      const expected = '(a|)';

      expectObservable(service.resolve(`/${url}`)).toBe(expected, {
        a: { url, type: 'PRODUCT', id: jasmine.any(String), code: jasmine.any(Number) },
      });
    });
  });

  it('should throw a not found error if the route lookup fails', () => {
    setupTest();
    runMarbles(helpers => {
      const { expectObservable } = helpers;
      const expected = '#';

      expectObservable(service.resolve('/test')).toBe(
        expected,
        undefined,
        new DaffExternalRouterNotFoundError(),
      );
    });
  });
});
