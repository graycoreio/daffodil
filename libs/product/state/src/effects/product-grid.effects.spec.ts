import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { DaffStateError } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductDriver,
  DaffProductServiceInterface,
} from '@daffodil/product/driver';
import { DaffProductTestingDriverModule } from '@daffodil/product/driver/testing';
import {
  DaffProductGridLoad,
  DaffProductGridLoadSuccess,
  DaffProductGridLoadFailure,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffProductGridEffects } from './product-grid.effects';

describe('DaffProductGridEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffProductGridEffects<DaffProduct>;
  let productFactory: DaffProductFactory;
  let daffProductDriver: DaffProductServiceInterface;
  let mockProductGrid: DaffProduct[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingDriverModule.forRoot(),
      ],
      providers: [
        DaffProductGridEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffProductGridEffects);
    productFactory = TestBed.inject(DaffProductFactory);
    daffProductDriver = TestBed.inject(DaffProductDriver);

    mockProductGrid = new Array(productFactory.create());
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when ProductGridLoadAction is triggered', () => {

    const productGridLoadAction = new DaffProductGridLoad();

    describe('and the call to ProductService is successful', () => {

      it('should dispatch a ProductGridLoadSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          spyOn(daffProductDriver, 'getAll').and.returnValue(of(mockProductGrid));
          const productGridLoadSuccessAction = new DaffProductGridLoadSuccess(mockProductGrid);
          actions$ = helpers.hot('--a', { a: productGridLoadAction });
          helpers.expectObservable(effects.loadAll$).toBe('--b', { b: productGridLoadSuccessAction });
        });
      });
    });

    describe('and the call to ProductService fails', () => {

      it('should dispatch a ProductGridLoadFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to load product grid' };
          const response = helpers.cold<any>('#', {}, error);
          spyOn(daffProductDriver, 'getAll').and.returnValue(response);
          const productGridLoadFailureAction = new DaffProductGridLoadFailure(error);
          actions$ = helpers.hot('--a', { a: productGridLoadAction });
          helpers.expectObservable(effects.loadAll$).toBe('--b', { b: productGridLoadFailureAction });
        });
      });
    });
  });
});
