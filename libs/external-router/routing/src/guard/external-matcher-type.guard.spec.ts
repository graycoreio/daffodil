import { provideLocationMocks } from '@angular/common/testing';
import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  Router,
  UrlSegment,
  provideRouter,
} from '@angular/router';

import {
  DAFF_EXTERNAL_ROUTER_CONFIG,
  DaffExternalRouterConfiguration,
  DaffRouteWithSeoData,
  provideExternalRouter,
} from '@daffodil/external-router';
import {
  DaffExternalRouterDriver,
  DaffExternalRouterDriverInterface,
} from '@daffodil/external-router/driver';
import { DaffExternalRouterDriverTestingModule } from '@daffodil/external-router/driver/testing';

import { daffExternalMatcherTypeGuard } from './external-matcher-type.guard';

describe('daffExternalMatcherTypeGuard', () => {
  let router: Router;
  let config: DaffExternalRouterConfiguration;
  let driver: DaffExternalRouterDriverInterface;
  let route: DaffRouteWithSeoData;
  let type: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        provideLocationMocks(),
        provideExternalRouter({ failedResolutionPath: '/not-found' }),
        importProvidersFrom(DaffExternalRouterDriverTestingModule.forRoot({
          'test-path' : { type: 'TEST_TYPE', url: 'test-path', code: 200, id: 'test' },
          'seo-path': { type: 'SEO_TYPE', url: 'seo-path', code: 200, id: 'seo', data: { canonical_url: 'test-path', meta_description: 'test', title: 'custom-title' }},
          'temp-redirect-path': { type: 'UNKNOWN', url: 'temp-redirect-result', code: 301, id: 'test' },
          'redirect-path' : { type: 'UNKNOWN', url: 'redirect-result', code: 302, id: 'test' },
          'error-path' : { type: 'UNKNOWN', url: null, code: 500, id: 'test' },
        })),
      ],
    });

    router = TestBed.inject(Router);
    config = TestBed.inject(DAFF_EXTERNAL_ROUTER_CONFIG);
    driver = TestBed.inject(DaffExternalRouterDriver);

    route = { data: { daffSeoData: { title: 'test title' }}};
  });

  it('should match the route type', (done) => {
    TestBed.runInInjectionContext(() => {
      daffExternalMatcherTypeGuard('TEST_TYPE')(route, [<UrlSegment>{ path: 'test-path' }]).subscribe(result => {
        expect(result).toBe(true);
        expect(route.title).toBe('test title');
        done();
      });
    });
  });

  it('should set seo data on matched routes', (done) => {
    TestBed.runInInjectionContext(() => {
      daffExternalMatcherTypeGuard('SEO_TYPE')(route, [<UrlSegment>{ path: 'seo-path' }]).subscribe(result => {
        expect(result).toBe(true);
        expect(route.title).toBe('custom-title');
        done();
      });
    });
  });

  it('should handle permanent redirects', (done) => {
    TestBed.runInInjectionContext(() => {
      daffExternalMatcherTypeGuard(type)(route, [<UrlSegment>{ path: 'redirect-path' }]).subscribe(result => {
        expect(result).toEqual(router.parseUrl('/redirect-result'));
        done();
      });
    });
  });

  it('should handle temporary redirects', (done) => {
    TestBed.runInInjectionContext(() => {
      daffExternalMatcherTypeGuard(type)(route, [<UrlSegment>{ path: 'temp-redirect-path' }]).subscribe(result => {
        expect(result).toEqual(router.parseUrl('/temp-redirect-result'));
        done();
      });
    });
  });

  it('should handle not found error', (done) => {
    TestBed.runInInjectionContext(() => {
      daffExternalMatcherTypeGuard(type)(route, [<UrlSegment>{ path: 'unknown' }]).subscribe(result => {
        expect(result).toBe(false);
        done();
      });
    });
  });

  it('should handle unknown errors', (done) => {
    TestBed.runInInjectionContext(() => {
      daffExternalMatcherTypeGuard(type)(route, [<UrlSegment>{ path: 'error-path' }])
        .subscribe(result => {
          expect(result).toEqual(router.parseUrl(config.failedResolutionPath));
          done();
        });
    });
  });
});
