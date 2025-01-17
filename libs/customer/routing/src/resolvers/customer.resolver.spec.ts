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
  DaffCustomerStateRootSlice,
  DaffCustomerLoad,
}  from '@daffodil/customer/state';

import { DaffCustomerResolver } from './customer.resolver';

describe('@daffodil/customer/routing | DaffCustomerResolver', () => {
  const actions$: Observable<any> = null;
  let resolver: DaffCustomerResolver;
  let store: Store<DaffCustomerStateRootSlice>;
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

    resolver = TestBed.inject(DaffCustomerResolver);
    store = TestBed.inject(Store);
  }));

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  describe('resolve', () => {
    it('should dispatch a DaffCustomerLoad action', done => {
      spyOn(store, 'dispatch');
      resolver.resolve().subscribe(() => {
        expect(<any>store.dispatch).toHaveBeenCalledWith(new DaffCustomerLoad());
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
