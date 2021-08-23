import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import {
  Observable ,
  of,
} from 'rxjs';

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

    let expected;
    const productLoadAction = new DaffProductLoad(productId);

    describe('and the call to ProductService is successful', () => {

      beforeEach(() => {
        spyOn(daffProductDriver, 'get').and.returnValue(of({
          id: mockProduct.id,
          products: [mockProduct],
        }));
        const productLoadSuccessAction = new DaffProductLoadSuccess({
          id: mockProduct.id,
          products: [mockProduct],
        });
        actions$ = hot('--a', { a: productLoadAction });
        expected = cold('--b', { b: productLoadSuccessAction });
      });

      it('should dispatch a ProductLoadSuccess action', () => {
        expect(effects.load$).toBeObservable(expected);
      });
    });

    describe('and the call to ProductService fails', () => {

      beforeEach(() => {
        const error: DaffStateError = { code: 'code', message: 'Failed to load product' };
        const response = cold('#', {}, error);
        spyOn(daffProductDriver, 'get').and.returnValue(response);
        const productLoadFailureAction = new DaffProductLoadFailure(error);
        actions$ = hot('--a', { a: productLoadAction });
        expected = cold('--b', { b: productLoadFailureAction });
      });

      it('should dispatch a ProductLoadFailure action', () => {
        expect(effects.load$).toBeObservable(expected);
      });
    });
  });
});
