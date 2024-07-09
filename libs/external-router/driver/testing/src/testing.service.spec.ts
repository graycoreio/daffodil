import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { DaffExternalRouterDriverTestingConfig } from './config';
import { DaffExternalRouterDriverTestingModule } from './testing.module';
import { DaffExternalRouterTestingDriver } from './testing.service';
import { DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION } from '../../src/not-found-resolution';

describe('@daffodil/external-router/driver/testing | DaffExternalRouterTestingDriver', () => {
  let service: DaffExternalRouterTestingDriver;
  let scheduler: TestScheduler;

  const setupTest = (
    configuration: DaffExternalRouterDriverTestingConfig = {},
  ) => {
    TestBed.configureTestingModule({
      imports: [DaffExternalRouterDriverTestingModule.forRoot(configuration)],
    });
    service = TestBed.inject(DaffExternalRouterTestingDriver);

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
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

    scheduler.run(helpers => {
      const { expectObservable } = helpers;
      const expected = '(a|)';

      expectObservable(service.resolve(`/${url}`)).toBe(expected, {
        a: { url, type: 'PRODUCT', id: jasmine.any(String), code: jasmine.any(Number) },
      });
    });
  });

  it('should return a 404 result if the route lookup fails', () => {
    setupTest();
    scheduler.run(helpers => {
      const { expectObservable } = helpers;
      const expected = '(a|)';

      expectObservable(service.resolve('/test')).toBe(
        expected,
        { a: DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION },
      );
    });
  });
});
