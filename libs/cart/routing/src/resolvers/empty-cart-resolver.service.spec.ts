import {
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  StoreModule,
  Store,
} from '@ngrx/store';
import {
  Observable,
  Subject,
} from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import {
  DaffCartResolver,
  DaffCartResolverRedirectUrl,
  DaffEmptyCartResolverRedirectUrl,
}  from '@daffodil/cart/routing';
import { DaffCartLoadSuccess } from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartItemFactory,
} from '@daffodil/cart/testing';

import { DaffEmptyCartResolver } from './empty-cart-resolver.service';

describe('DaffEmptyCartResolver', () => {
  const actions$: Observable<any> = null;
  let emptyCartResolver: DaffEmptyCartResolver;
  let store: Store<any>;
  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;
  let stubCart: DaffCart;
  let router: Router;
  const stubUrl = '/cart';
  let cartResolverSubject: Subject<DaffCart>;
  let cartResolver: jasmine.SpyObj<DaffCartResolver>;

  beforeEach(waitForAsync(() => {
    cartResolver = jasmine.createSpyObj('DaffCartResolver', ['resolve']);

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterTestingModule,
      ],
      providers: [
        provideMockActions(() => actions$),
        { provide: DaffEmptyCartResolverRedirectUrl, useValue: stubUrl },
        { provide: DaffCartResolverRedirectUrl, useValue: stubUrl },
        { provide: DaffCartResolver, useValue: cartResolver },
      ],
    });

    emptyCartResolver = TestBed.inject(DaffEmptyCartResolver);
    cartFactory = TestBed.inject(DaffCartFactory);
    cartItemFactory = TestBed.inject(DaffCartItemFactory);
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);

    cartResolverSubject = new Subject();
    cartResolver.resolve.and.returnValue(cartResolverSubject);
    stubCart = cartFactory.create();

    spyOn(router, 'navigateByUrl');
  }));

  it('should be created', () => {
    expect(emptyCartResolver).toBeTruthy();
  });

  describe('resolve', () => {

    describe('when a cart is loaded', () => {

      it('should resolve with the cart', done => {
        emptyCartResolver.resolve().subscribe((resolvedValue) => {
          expect(resolvedValue).toEqual(stubCart);
          done();
        });

        cartResolverSubject.next(stubCart);
      });

      describe('and cart is empty', () => {

        it('should redirect to the provided DaffEmptyCartRedirectUrl', done => {
          emptyCartResolver.resolve().subscribe(() => {
            expect(router.navigateByUrl).toHaveBeenCalledWith(stubUrl);
            done();
          });

          stubCart.items = [];
          cartResolverSubject.next(stubCart);
        });
      });

      describe('and cart is not empty', () => {

        it('should not redirect to the provided DaffEmptyCartRedirectUrl', done => {
          emptyCartResolver.resolve().subscribe(() => {
            expect(router.navigateByUrl).not.toHaveBeenCalledWith(stubUrl);
            done();
          });

          stubCart = cartFactory.create({ items: cartItemFactory.createMany(1) });
          cartResolverSubject.next(stubCart);
        });
      });
    });
  });
});
