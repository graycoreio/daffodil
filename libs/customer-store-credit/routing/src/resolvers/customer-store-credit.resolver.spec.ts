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
  DaffCustomerStoreCreditStateRootSlice,
  DaffCustomerStoreCreditLoad,
}  from '@daffodil/customer-store-credit/state';

import { DaffCustomerStoreCreditResolver } from './customer-store-credit.resolver';

describe('@daffodil/customer-store-credit/routing | DaffCustomerStoreCreditResolver', () => {
  const actions$: Observable<any> = null;
  let resolver: DaffCustomerStoreCreditResolver;
  let store: Store<DaffCustomerStoreCreditStateRootSlice>;
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

    resolver = TestBed.inject(DaffCustomerStoreCreditResolver);
    store = TestBed.inject(Store);
  }));

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  describe('resolve', () => {
    it('should dispatch a DaffCustomerStoreCreditLoad action', done => {
      spyOn(store, 'dispatch');
      resolver.resolve().subscribe(() => {
        expect(<any>store.dispatch).toHaveBeenCalledWith(new DaffCustomerStoreCreditLoad());
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
