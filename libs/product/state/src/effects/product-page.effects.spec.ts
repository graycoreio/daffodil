import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import {
  Observable,
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
  DaffProductPageLoad,
  DaffProductPageLoadSuccess,
  DaffProductPageLoadFailure,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffProductPageEffects } from './product-page.effects';
import { DaffProductPageLoadByUrl } from '../actions/public_api';

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
      imports: [
        DaffProductTestingDriverModule.forRoot(),
      ],
      providers: [
        DaffProductPageEffects,
        provideMockActions(() => actions$),
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
        const response = {
          id: mockProduct.id,
          products: [mockProduct],
        };
        spyOn(daffProductDriver, 'get').and.returnValue(of(response));
        const productLoadSuccessAction = new DaffProductPageLoadSuccess(response);
        actions$ = hot('--a', { a: productPageLoadAction });
        expected = cold('--b', { b: productLoadSuccessAction });
      });

      it('should dispatch a ProductLoadSuccess action', () => {
        expect(effects.load$).toBeObservable(expected);
      });
    });

    describe('and the call to ProductService fails', () => {

      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to load product' };
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

  describe('when ProductPageLoadByUrlAction is triggered', () => {

    let expected;
    let productPageLoadAction: DaffProductPageLoadByUrl;

    beforeEach(() => {
      productPageLoadAction = new DaffProductPageLoadByUrl(mockProduct.url);
    });

    describe('and the call to ProductService is successful', () => {

      beforeEach(() => {
        const response = {
          id: mockProduct.id,
          products: [mockProduct],
        };
        spyOn(daffProductDriver, 'getByUrl').and.returnValue(of(response));
        const productLoadSuccessAction = new DaffProductPageLoadSuccess(response);
        actions$ = hot('--a', { a: productPageLoadAction });
        expected = cold('--b', { b: productLoadSuccessAction });
      });

      it('should dispatch a ProductLoadSuccess action', () => {
        expect(effects.loadByUrl$).toBeObservable(expected);
      });
    });

    describe('and the call to ProductService fails', () => {

      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to load product' };
        const response = cold('#', {}, error);
        spyOn(daffProductDriver, 'getByUrl').and.returnValue(response);
        const productLoadFailureAction = new DaffProductPageLoadFailure(error);
        actions$ = hot('--a', { a: productPageLoadAction });
        expected = cold('--b', { b: productLoadFailureAction });
      });

      it('should dispatch a ProductLoadFailure action', () => {
        expect(effects.loadByUrl$).toBeObservable(expected);
      });
    });
  });
});
