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
import { DaffTestingProductService } from '@daffodil/product/driver/testing';
import {
  DaffProductPageLoad,
  DaffProductPageLoadSuccess,
  DaffProductPageLoadFailure,
} from '@daffodil/product/state';
import {
  DaffProductFactory,
  DaffProductImageFactory,
} from '@daffodil/product/testing';

import { DaffProductPageEffects } from './product-page.effects';

describe('DaffProductPageEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffProductPageEffects<DaffProduct>;
  let mockProduct: DaffProduct;
  let daffProductDriver: DaffProductServiceInterface;

  let productFactory: DaffProductFactory;
  let productId;

  beforeEach(() => {
    productId = 'product id';

    TestBed.configureTestingModule({
      providers: [
        DaffProductPageEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffProductDriver,
          useValue: new DaffTestingProductService(new DaffProductFactory(), new DaffProductImageFactory()),
        },
      ],
    });

    effects = TestBed.inject(DaffProductPageEffects);
    productFactory = TestBed.inject(DaffProductFactory);

    daffProductDriver = TestBed.inject(DaffProductDriver);

    mockProduct = productFactory.create();
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when ProductPageLoadAction is triggered', () => {

    let expected;
    const productPageLoadAction = new DaffProductPageLoad(productId);

    describe('and the call to ProductService is successful', () => {

      beforeEach(() => {
        spyOn(daffProductDriver, 'get').and.returnValue(of(mockProduct));
        const productLoadSuccessAction = new DaffProductPageLoadSuccess(mockProduct);
        actions$ = hot('--a', { a: productPageLoadAction });
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
        const productLoadFailureAction = new DaffProductPageLoadFailure(error);
        actions$ = hot('--a', { a: productPageLoadAction });
        expected = cold('--b', { b: productLoadFailureAction });
      });

      it('should dispatch a ProductLoadFailure action', () => {
        expect(effects.load$).toBeObservable(expected);
      });
    });
  });
});
