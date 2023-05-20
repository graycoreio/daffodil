import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { cold } from 'jasmine-marbles';

import {
  DaffCartResolveState,
  DaffCartFacade,
} from '@daffodil/cart/state';
import {
  DaffCartTestingModule,
  MockDaffCartFacade,
} from '@daffodil/cart/state/testing';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { daffCartRoutingConfigurationDefault } from '../../config/config';
import { daffCartRoutingResolutionConfigurationDefault } from '../../config/resolution/config';
import { DaffResolvedCartGuard } from './resolved-cart.guard';

describe('@daffodil/cart/routing | DaffResolvedCartGuard', () => {
  let service: DaffResolvedCartGuard;
  let facade: MockDaffCartFacade;
  let router: Router;
  let cartFactory: DaffCartFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffCartTestingModule,
        RouterTestingModule,
      ],
    });

    facade = TestBed.inject(MockDaffCartFacade);
    router = TestBed.inject(Router);
    cartFactory = TestBed.inject(DaffCartFactory);

    service = new DaffResolvedCartGuard(
      TestBed.inject(DaffCartFacade),
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
        facade.cart$.next(null);
      });

      it('should not emit', () => {
        const expected = cold('-');

        expect(service.canActivate()).toBeObservable(expected);
      });
    });

    describe('when there is a successfully resolved cart', () => {
      beforeEach(() => {
        facade.resolved$.next(DaffCartResolveState.Succeeded);
        facade.cart$.next(cartFactory.create());
      });

      it('should allow activation', () => {
        const expected = cold('(a|)', { a: true });

        expect(service.canActivate()).toBeObservable(expected);
      });
    });

    describe('when there is a failed cart resolution', () => {
      beforeEach(() => {
        facade.resolved$.next(DaffCartResolveState.Failed);
        facade.cart$.next(null);
      });

      describe('when the redirect URL is not specified', () => {
        it('should not redirect', () => {
          service = new DaffResolvedCartGuard(TestBed.inject(DaffCartFacade), router, {
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
        service = new DaffResolvedCartGuard(TestBed.inject(DaffCartFacade), router, {
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
