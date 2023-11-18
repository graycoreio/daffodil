import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { cold } from 'jasmine-marbles';

import {
  DaffCartResolveState,
  DaffCartFacade,
} from '@daffodil/cart/state';
import { DaffCartStateTestingModule } from '@daffodil/cart/state/testing';

import { DaffResolvedCartGuard } from './resolved-cart.guard';
import { daffCartRoutingConfigurationDefault } from '../../config/config';
import { daffCartRoutingResolutionConfigurationDefault } from '../../config/resolution/config';

describe('Cart | State | Guards | DaffResolvedCartGuard', () => {
  let service: DaffResolvedCartGuard;
  let facade;
  let router: Router;

  beforeEach(() => {
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
        const expected = cold('-');

        expect(service.canActivate()).toBeObservable(expected);
      });
    });

    describe('when there is a successfully resolved cart', () => {
      beforeEach(() => {
        facade.resolved$.next(DaffCartResolveState.Succeeded);
      });

      it('should allow activation', () => {
        const expected = cold('(a|)', { a: true });

        expect(service.canActivate()).toBeObservable(expected);
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

          const expected = cold('(a|)', { a: false });
          expect(service.canActivate()).toBeObservable(expected);
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

        const expected = cold('(a|)', { a: router.parseUrl('some-path') });
        expect(service.canActivate()).toBeObservable(expected);
      });
    });
  });
});
