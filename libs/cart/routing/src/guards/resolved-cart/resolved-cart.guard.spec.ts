import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffCartResolveState,
  DaffCartFacade,
} from '@daffodil/cart/state';
import { DaffCartStateTestingModule } from '@daffodil/cart/state/testing';

import { DaffResolvedCartGuard } from './resolved-cart.guard';
import { daffCartRoutingConfigurationDefault } from '../../config/config';
import { daffCartRoutingResolutionConfigurationDefault } from '../../config/resolution/config';

describe('@daffodil/cart/routing | DaffResolvedCartGuard', () => {
  let service: DaffResolvedCartGuard;
  let facade;
  let router: Router;
  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    TestBed.configureTestingModule({
      imports: [DaffCartStateTestingModule, RouterTestingModule],
    });

    facade = TestBed.inject(DaffCartFacade);
    router = TestBed.inject(Router);

    service = new DaffResolvedCartGuard(
      facade,
      router,
      daffCartRoutingConfigurationDefault,
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('canActivate', () => {
    describe('when the cart has not been resolved', () => {
      beforeEach(() => {
        facade.resolved$.next(DaffCartResolveState.Default);
      });

      it('should not emit', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(service.canActivate()).toBe('-');
        });
      });
    });

    describe('when there is a successfully resolved cart', () => {
      beforeEach(() => {
        facade.resolved$.next(DaffCartResolveState.Succeeded);
      });

      it('should allow activation', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(service.canActivate()).toBe('(a|)', { a: true });
        });
      });
    });

    describe('when there is a failed cart resolution', () => {
      beforeEach(() => {
        facade.resolved$.next(DaffCartResolveState.Failed);
      });

      describe('when the redirect URL is not specified', () => {
        it('should not redirect', () => {
          service = new DaffResolvedCartGuard(facade, router, {
            ...daffCartRoutingConfigurationDefault,
            resolution: {
              ...daffCartRoutingResolutionConfigurationDefault,
              failedResolutionPath: null,
            },
          });

          scheduler.run(({ expectObservable }) => {
            expectObservable(service.canActivate()).toBe('(a|)', { a: false });
          });
        });
      });

      it('should return a UrlTree to the configured route', () => {
        service = new DaffResolvedCartGuard(facade, router, {
          ...daffCartRoutingConfigurationDefault,
          resolution: {
            ...daffCartRoutingResolutionConfigurationDefault,
            failedResolutionPath: 'some-path',
          },
        });

        scheduler.run(({ expectObservable }) => {
          expectObservable(service.canActivate()).toBe('(a|)', { a: router.parseUrl('some-path') });
        });
      });
    });
  });
});
