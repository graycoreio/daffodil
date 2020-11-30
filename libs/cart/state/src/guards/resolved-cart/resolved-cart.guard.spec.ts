import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { DaffCart } from '@daffodil/cart';
import {
  DaffResolveCartSuccess,
  DaffCartLoadSuccess,
  DaffCartFacade,
  DaffResolveCart
} from '@daffodil/cart/state';
import { DaffResolvedCartGuardRedirectUrl } from '@daffodil/cart/state';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffCartTestingModule, MockDaffCartFacade } from '@daffodil/cart/state/testing';

import { DaffResolvedCartGuard } from './resolved-cart.guard';

describe('Cart | State | Guards | DaffResolvedCartGuard', () => {
	let service: DaffResolvedCartGuard;
	let facade: MockDaffCartFacade;
  let router: Router;

  let cartFactory: DaffCartFactory;

  let cart: DaffCart;

	const stubUrl = 'url';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
				{ provide: DaffResolvedCartGuardRedirectUrl, useValue: stubUrl }
			],
			imports: [
        DaffCartTestingModule,
        RouterTestingModule,
			]
    });

		service = TestBed.get(DaffResolvedCartGuard);
		facade = TestBed.get(DaffCartFacade);
    router = TestBed.get(Router);

    spyOn(facade, 'dispatch');

    cartFactory = TestBed.get(DaffCartFactory);

    cart = cartFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
	});

	describe('canActivate', () => {
    let obs: Observable<boolean>;

    beforeEach(() => {
      obs = service.canActivate();
    });

    it('should initiate cart resolution', () => {
      const expected = new DaffResolveCart();
      expect(facade.dispatch).toHaveBeenCalledWith(expected);
    });

    describe('when the cart has not been resolved', () => {
      beforeEach(() => {
        facade.resolved$.next(false);
      });

      it('should not emit', () => {
        const expected = cold('-');

        expect(obs).toBeObservable(expected);
      });
    });

    describe('when there is a resolved cart with an ID', () => {
      beforeEach(() => {
        facade.id$.next(cart.id);
        facade.resolved$.next(true);
      });

      it('should allow activation', () => {
        const expected = cold('(a|)', { a: true })

        expect(obs).toBeObservable(expected);
      });
    });


		describe('when there is not a resolved cart with an ID', () => {
			beforeEach(() => {
				spyOn(router, 'navigateByUrl');
        facade.id$.next(null);
        facade.resolved$.next(true);
			});

			it('should not allow activation', () => {
				const expected = cold('(a|)', { a: false });

				expect(obs).toBeObservable(expected);
			});

			it('should redirect to the given DaffResolvedCartGuardRedirectUrl', () => {
				obs.subscribe();
				expect(router.navigateByUrl).toHaveBeenCalledWith(stubUrl);
			});
		});
	});
});
