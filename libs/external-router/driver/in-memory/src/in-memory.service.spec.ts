import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION } from '@daffodil/external-router/driver';
import {
  DaffExternalRouterDriverInMemoryConfig,
  DaffExternalRouterDriverInMemoryModule,
} from '@daffodil/external-router/driver/in-memory';

import { DaffExternalRouterInMemoryDriver } from './in-memory.service';

describe('@daffodil/external-router/driver/in-memory | DaffExternalRouterInMemoryDriver', () => {
  let service: DaffExternalRouterInMemoryDriver;
  let scheduler: TestScheduler;

  const setupTest = (
    configuration?: DaffExternalRouterDriverInMemoryConfig,
  ) => {
    TestBed.configureTestingModule({
      imports: [DaffExternalRouterDriverInMemoryModule.forRoot(configuration)],
    });
    service = TestBed.inject<DaffExternalRouterInMemoryDriver>(DaffExternalRouterInMemoryDriver);

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  };

  it('should be created', () => {
    setupTest();
    expect(service).toBeTruthy();
  });

  it('should return a resolved route if the route lookup succeeds', () => {
    const url = '/test';
    setupTest({
      resolver: u =>
        u === url ? {
          type: 'PRODUCT',
          url: u,
          id: 'test',
          code: 200,
        } : DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION,
    });

    scheduler.run(helpers => {
      const { expectObservable } = helpers;
      const expected = '(a|)';

      expectObservable(service.resolve(url)).toBe(expected, {
        a: { url, type: 'PRODUCT', id: jasmine.any(String), code: jasmine.any(Number) },
      });
    });
  });

  it('should return a DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION if the route lookup fails', () => {
    const url = '/test';
    setupTest({
      resolver: u =>
        u === url ? {
          type: 'PRODUCT',
          url: u,
          id: 'test',
          code: 200,
        } : DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION,
    });

    scheduler.run(helpers => {
      const { expectObservable } = helpers;
      const expected = '(a|)';

      expectObservable(service.resolve('/not_the_url')).toBe(expected, {
        a: DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION,
      });
    });
  });
});
