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
import { Observable } from 'rxjs';

import {
  DaffCustomerPaymentStateRootSlice,
  DaffCustomerPaymentList,
}  from '@daffodil/customer-payment/state';

import { DaffCustomerPaymentResolver } from './customer-payments.resolver';

describe('@daffodil/customer-payment/routing | DaffCustomerPaymentResolver', () => {
  const actions$: Observable<any> = null;
  let resolver: DaffCustomerPaymentResolver;
  let store: Store<DaffCustomerPaymentStateRootSlice>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterTestingModule,
      ],
      providers: [
        provideMockActions(() => actions$),
      ],
    });

    resolver = TestBed.inject(DaffCustomerPaymentResolver);
    store = TestBed.inject(Store);
  }));

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  describe('resolve', () => {
    it('should dispatch a DaffCustomerPaymentList action', done => {
      spyOn(store, 'dispatch');
      resolver.resolve().subscribe(() => {
        expect(<any>store.dispatch).toHaveBeenCalledWith(new DaffCustomerPaymentList());
        done();
      });
    });

    it('should return true', done => {
      resolver.resolve().subscribe(result => {
        expect(result).toBeTrue();
        done();
      });
    });
  });
});
