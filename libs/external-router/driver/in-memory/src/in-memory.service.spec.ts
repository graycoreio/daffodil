import { TestBed } from '@angular/core/testing';

import { daffUriTruncateLeadingSlash } from '@daffodil/core/routing';
import { DaffExternalRouterNotFoundError } from '@daffodil/external-router';
import { DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION } from '@daffodil/external-router/driver';
import {
  DaffExternalRouterDriverInMemoryConfig,
  provideDaffExternalRouterInMemoryDriver,
} from '@daffodil/external-router/driver/in-memory';
import { runMarbles } from '@daffodil/jasmine';

import { DaffExternalRouterInMemoryDriver } from './in-memory.service';

describe('@daffodil/external-router/driver/in-memory | DaffExternalRouterInMemoryDriver', () => {
  let service: DaffExternalRouterInMemoryDriver;

  const setupTest = (
    configuration?: DaffExternalRouterDriverInMemoryConfig,
  ) => {
    TestBed.configureTestingModule({
      providers: [
        provideDaffExternalRouterInMemoryDriver(configuration),
      ],
    });

    service = TestBed.inject(DaffExternalRouterInMemoryDriver);

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

    runMarbles(helpers => {
      const { expectObservable } = helpers;
      const expected = '(a|)';

      expectObservable(service.resolve(url)).toBe(expected, {
        a: { url: daffUriTruncateLeadingSlash(url), type: 'PRODUCT', id: jasmine.any(String), code: jasmine.any(Number) },
      });
    });
  });

  it('should throw a DaffExternalRouterNotFoundError if the route lookup fails', () => {
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

    runMarbles(helpers => {
      const { expectObservable } = helpers;
      const expected = '#';

      expectObservable(service.resolve('/not_the_url')).toBe(expected, undefined, new DaffExternalRouterNotFoundError());
    });
  });
});
