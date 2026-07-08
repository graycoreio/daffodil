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
  DaffProductLoad,
  DaffProductLoadSuccess,
  DaffProductLoadFailure,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffProductEffects } from './product.effects';

describe('DaffProductEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffProductEffects<DaffProduct>;
  let mockProduct: DaffProduct;
  let daffProductDriver: DaffProductServiceInterface;

  let productFactory: DaffProductFactory;
  let productId;

  beforeEach(() => {
    productId = 'product id';

    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingDriverModule.forRoot(),
      ],
      providers: [
        DaffProductEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffProductEffects);
    productFactory = TestBed.inject(DaffProductFactory);

    daffProductDriver = TestBed.inject(DaffProductDriver);

    mockProduct = productFactory.create();
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when ProductLoadAction is triggered', () => {

    const productLoadAction = new DaffProductLoad(productId);

    describe('and the call to ProductService is successful', () => {

      it('should dispatch a ProductLoadSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          spyOn(daffProductDriver, 'get').and.returnValue(of({
            id: mockProduct.id,
            products: [mockProduct],
          }));
          const productLoadSuccessAction = new DaffProductLoadSuccess({
            id: mockProduct.id,
            products: [mockProduct],
          });
          actions$ = helpers.hot('--a', { a: productLoadAction });
          helpers.expectObservable(effects.load$).toBe('--b', { b: productLoadSuccessAction });
        });
      });
    });

    describe('and the call to ProductService fails', () => {

      it('should dispatch a ProductLoadFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to load product' };
          const response = helpers.cold<any>('#', {}, error);
          spyOn(daffProductDriver, 'get').and.returnValue(response);
          const productLoadFailureAction = new DaffProductLoadFailure(error);
          actions$ = helpers.hot('--a', { a: productLoadAction });
          helpers.expectObservable(effects.load$).toBe('--b', { b: productLoadFailureAction });
        });
      });
    });
  });
});
