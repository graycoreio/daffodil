import { TestBed } from '@angular/core/testing';
import { cold, hot } from 'jasmine-marbles';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';

import { DaffCartFacade, DaffCartOrderResultGuardRedirectUrl } from '@daffodil/cart/state';
import {
  DaffCartTestingModule,
} from '@daffodil/cart/state/testing';

import { DaffOrderResultGuard } from './order-result.guard';

describe('Cart | State | Guards | DaffOrderResultGuard', () => {
	let guard: DaffOrderResultGuard;
	let facade;
	let router: Router;
	const stubUrl = 'url';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DaffCartOrderResultGuardRedirectUrl, useValue: stubUrl },
        provideMockStore()
      ],
			imports: [
        RouterTestingModule,
        DaffCartTestingModule
			]
    });

		guard = TestBed.inject(DaffOrderResultGuard);
		facade = TestBed.inject(DaffCartFacade);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
	});

	describe('canActivate', () => {
    describe('when there is an order result', () => {
			beforeEach(() => {
				facade.hasOrderResult$ = hot('--a', {a: true});
			});

			it('should allow activation when there is a order result', () => {
        const expected = cold('--a', { a: true })

        expect(guard.canActivate()).toBeObservable(expected);
      });
    });

		describe('when there is no order result', () => {
      let expected;

			beforeEach(() => {
        expected = cold('--a', { a: false })
				spyOn(router, 'navigateByUrl');
				facade.hasOrderResult$ = hot('--a', {a: false});
			});

			it('should not allow activation', () => {
				expect(guard.canActivate()).toBeObservable(expected);
			});

			it('should redirect to the given DaffCartOrderResultGuardRedirectUrl', () => {
				expect(guard.canActivate()).toBeObservable(expected);
				expect(router.navigateByUrl).toHaveBeenCalledWith(stubUrl);
			});
		});
	});
});
