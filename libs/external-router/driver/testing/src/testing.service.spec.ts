import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { DaffExternalRouterDriverTestingConfig } from './config';
import { DaffExternalRouterDriverTestingModule } from './testing.module';
import { DaffExternalRouterTestingDriver } from './testing.service';

describe('@daffodil/external-router/driver/testing | DaffExternalRouterTestingDriver', () => {
  let service: DaffExternalRouterTestingDriver;
  let scheduler: TestScheduler;

  const setupTest = (
    configuration: DaffExternalRouterDriverTestingConfig = {},
  ) => {
    TestBed.configureTestingModule({
      imports: [DaffExternalRouterDriverTestingModule.forRoot(configuration)],
    });
    service = TestBed.inject<DaffExternalRouterTestingDriver>(DaffExternalRouterTestingDriver);

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  };

  it('should be created', () => {
    setupTest();
    expect(service).toBeTruthy();
  });

  it('should return a resolved route if the route lookup succeeds', () => {
    setupTest({
      test: 'PRODUCT',
    });

    scheduler.run(helpers => {
      const { expectObservable } = helpers;
      const expected = '(a|)';

      expectObservable(service.resolve('test')).toBe(expected, {
        a: { url: 'test', type: 'PRODUCT' },
      });
    });
  });

  it('should throw an error if the route lookup fails', () => {
    setupTest();
    scheduler.run(helpers => {
      const { expectObservable } = helpers;
      const expected = '#';

      expectObservable(service.resolve('test')).toBe(
        expected,
        null,
        `\
The route 'test' wasn't provided with a matching type by the testing driver. \
Did you configure the available route types with DaffExternalRouterDriverTestingModule.forRoot(config)`,
      );
    });
  });
});
