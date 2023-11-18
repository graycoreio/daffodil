import {
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  cold,
  hot,
} from 'jasmine-marbles';
import { BehaviorSubject } from 'rxjs';

import {
  DaffCart,
  DaffCartStorageService,
} from '@daffodil/cart';
import { DaffResolveCartGuardRedirectUrl } from '@daffodil/cart/routing';
import {
  DaffResolveCart,
  DaffCartResolveState,
  DaffCartFacade,
}  from '@daffodil/cart/state';
import { DaffCartStateTestingModule } from '@daffodil/cart/state/testing';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { DaffResolveCartGuard } from './resolve-cart.guard';

describe('@daffodil/cart/routing | DaffResolveCartGuard', () => {
  let cartResolver: DaffResolveCartGuard;
  let cartFacade: DaffCartFacade;
  let cartFactory: DaffCartFactory;

  let cartStorageSpy: jasmine.SpyObj<DaffCartStorageService>;

  let stubCart: DaffCart;
  let router: Router;
  const stubUrl = '/cart';

  beforeEach(waitForAsync(() => {
    cartStorageSpy = jasmine.createSpyObj('DaffCartStorageService', ['getCartId']);

    TestBed.configureTestingModule({
      imports: [
        DaffCartStateTestingModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: DaffResolveCartGuardRedirectUrl, useValue: stubUrl },
        {
          provide: DaffCartStorageService,
          useValue: cartStorageSpy,
        },
      ],
    });

    cartResolver = TestBed.inject(DaffResolveCartGuard);
    cartFactory = TestBed.inject(DaffCartFactory);
    cartFacade = TestBed.inject(DaffCartFacade);
    router = TestBed.inject(Router);

    stubCart = cartFactory.create();


    spyOn(router, 'navigateByUrl');
  }));

  it('should be created', () => {
    expect(cartResolver).toBeTruthy();
  });

  describe('canActivate', () => {
    describe('when there is a cart ID in storage', () => {
      beforeEach(() => {
        cartStorageSpy.getCartId.and.returnValue(stubCart.id);
      });

      describe('and when the resolved state is default and the cart is resolved successfully', () => {
        beforeEach(() => {
          cartFacade.resolved$ = hot('abc', { a: DaffCartResolveState.Default, b: DaffCartResolveState.Resolving, c: DaffCartResolveState.Succeeded });
        });

        it('should dispatch a DaffResolveCart action', () => {
          spyOn(cartFacade, 'dispatch');
          const expected = cold('--a', { a: true });
          expect(cartResolver.canActivate()).toBeObservable(expected);
          expect(cartFacade.dispatch).toHaveBeenCalledWith(new DaffResolveCart());
        });

        it('should return true when success is dispatched', () => {
          const expected = cold('--a', { a: true });
          expect(cartResolver.canActivate()).toBeObservable(expected);
        });
      });

      describe('and when the resolved state is default and the cart is not resolved successfully', () => {
        beforeEach(() => {
          cartFacade.resolved$ = hot('abc', { a: DaffCartResolveState.Default, b: DaffCartResolveState.Resolving, c: DaffCartResolveState.Failed });
        });

        it('should dispatch a DaffResolveCart action', () => {
          spyOn(cartFacade, 'dispatch');
          const expected = cold('--a', { a: router.parseUrl(stubUrl) });
          expect(cartResolver.canActivate()).toBeObservable(expected);
          expect(cartFacade.dispatch).toHaveBeenCalledWith(new DaffResolveCart());
        });

        it('should redirect when failure is dispatched', () => {
          const expected = cold('--a', { a: router.parseUrl(stubUrl) });
          expect(cartResolver.canActivate()).toBeObservable(expected);
        });
      });

      describe('and when the resolved state is resolving and the cart is resolved successfully', () => {
        beforeEach(() => {
          cartFacade.resolved$ = hot('-bc', { b: DaffCartResolveState.Resolving, c: DaffCartResolveState.Succeeded });
        });

        it('should not dispatch a DaffResolveCart action', () => {
          spyOn(cartFacade, 'dispatch');
          const expected = cold('--a', { a: true });
          expect(cartResolver.canActivate()).toBeObservable(expected);
          expect(cartFacade.dispatch).not.toHaveBeenCalledWith(new DaffResolveCart());
        });

        it('should return true when success is dispatched', () => {
          const expected = cold('--a', { a: true });
          expect(cartResolver.canActivate()).toBeObservable(expected);
        });
      });

      describe('and when the resolved state is resolving and the cart is not resolved successfully', () => {
        beforeEach(() => {
          cartFacade.resolved$ = hot('-bc', { b: DaffCartResolveState.Resolving, c: DaffCartResolveState.Failed });
        });

        it('should not dispatch a DaffResolveCart action', () => {
          spyOn(cartFacade, 'dispatch');
          const expected = cold('--a', { a: router.parseUrl(stubUrl) });
          expect(cartResolver.canActivate()).toBeObservable(expected);
          expect(cartFacade.dispatch).not.toHaveBeenCalledWith(new DaffResolveCart());
        });

        it('should redirect when failure is dispatched', () => {
          const expected = cold('--a', { a: router.parseUrl(stubUrl) });
          expect(cartResolver.canActivate()).toBeObservable(expected);
        });
      });

      describe('and when the cart is resolved successfully', () => {
        beforeEach(() => {
          cartFacade.resolved$ = new BehaviorSubject(DaffCartResolveState.Succeeded);
        });

        it('should not dispatch a DaffResolveCart action', (done) => {
          spyOn(cartFacade, 'dispatch');
          cartResolver.canActivate().subscribe((res) => {
            expect(cartFacade.dispatch).not.toHaveBeenCalledWith(new DaffResolveCart());
            done();
          });
        });

        it('should return true', (done) => {
          cartResolver.canActivate().subscribe((res) => {
            expect(res).toBeTrue();
            done();
          });
        });
      });

      describe('and when the resolved state is failed and the cart is resolved successfully', () => {
        beforeEach(() => {
          cartFacade.resolved$ = hot('abc', { a: DaffCartResolveState.Failed, b: DaffCartResolveState.Resolving, c: DaffCartResolveState.Succeeded });
        });

        it('should dispatch a DaffResolveCart action', () => {
          spyOn(cartFacade, 'dispatch');
          const expected = cold('--a', { a: true });
          expect(cartResolver.canActivate()).toBeObservable(expected);
          expect(cartFacade.dispatch).toHaveBeenCalledWith(new DaffResolveCart());
        });

        it('should return true when success is dispatched', () => {
          const expected = cold('--a', { a: true });
          expect(cartResolver.canActivate()).toBeObservable(expected);
        });
      });

      describe('and when the resolved state is failed and the cart is not resolved successfully', () => {
        beforeEach(() => {
          cartFacade.resolved$ = hot('abc', { a: DaffCartResolveState.Failed, b: DaffCartResolveState.Resolving, c: DaffCartResolveState.Failed });
        });

        it('should dispatch a DaffResolveCart action', () => {
          spyOn(cartFacade, 'dispatch');
          const expected = cold('--a', { a: router.parseUrl(stubUrl) });
          expect(cartResolver.canActivate()).toBeObservable(expected);
          expect(cartFacade.dispatch).toHaveBeenCalledWith(new DaffResolveCart());
        });

        it('should redirect when failure is dispatched', () => {
          const expected = cold('--a', { a: router.parseUrl(stubUrl) });
          expect(cartResolver.canActivate()).toBeObservable(expected);
        });
      });
    });

    describe('when there is not a cart ID in storage', () => {
      beforeEach(() => {
        cartFacade.resolved$ = new BehaviorSubject(DaffCartResolveState.Default);
        cartStorageSpy.getCartId.and.returnValue(null);
      });

      it('should redirect', (done) => {
        cartResolver.canActivate().subscribe((res) => {
          expect(res).toEqual(router.parseUrl(stubUrl));
          done();
        });
      });
    });
  });
});
