import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { TestScheduler } from 'rxjs/testing';

import { DaffCartOrderResultGuardRedirectUrl } from '@daffodil/cart/routing';
import { DaffCartFacade } from '@daffodil/cart/state';
import { DaffCartStateTestingModule } from '@daffodil/cart/state/testing';

import { DaffOrderResultGuard } from './order-result.guard';

describe('@daffodil/cart/routing | DaffOrderResultGuard', () => {
  let guard: DaffOrderResultGuard;
  let facade;
  let router: Router;
  let scheduler: TestScheduler;
  const stubUrl = 'url';

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    TestBed.configureTestingModule({
      providers: [
        { provide: DaffCartOrderResultGuardRedirectUrl, useValue: stubUrl },
        provideMockStore(),
      ],
      imports: [
        RouterTestingModule,
        DaffCartStateTestingModule,
      ],
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
      it('should allow activation when there is a order result', () => {
        scheduler.run(({ hot, expectObservable }) => {
          facade.hasOrderResult$ = hot('--a', { a: true });
          expectObservable(guard.canActivate()).toBe('--a', { a: true });
        });
      });
    });

    describe('when there is no order result', () => {
      beforeEach(() => {
        spyOn(router, 'navigateByUrl');
      });

      it('should not allow activation', () => {
        scheduler.run(({ hot, expectObservable }) => {
          facade.hasOrderResult$ = hot('--a', { a: false });
          expectObservable(guard.canActivate()).toBe('--a', { a: false });
        });
      });

      it('should redirect to the given DaffCartOrderResultGuardRedirectUrl', () => {
        scheduler.run(({ hot, expectObservable }) => {
          facade.hasOrderResult$ = hot('--a', { a: false });
          expectObservable(guard.canActivate()).toBe('--a', { a: false });
        });
        expect(router.navigateByUrl).toHaveBeenCalledWith(stubUrl);
      });
    });
  });
});
