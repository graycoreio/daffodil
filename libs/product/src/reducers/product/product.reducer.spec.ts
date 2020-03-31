import { initialState, daffProductReducer } from './product.reducer';
import { DaffProductLoad, DaffProductLoadSuccess, DaffProductLoadFailure, DaffProductUpdateQty } from '../../actions/product.actions';
import { DaffProduct } from '../../models/product';
import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffProductReducerState } from './product-reducer-state.interface';

describe('Product | Product Reducer', () => {

  let productFactory: DaffProductFactory;
  let product: DaffProduct;
  let productId: string;

  beforeEach(() => {
    productFactory = new DaffProductFactory();

    product = productFactory.create();
    productId = product.id;
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = daffProductReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when ProductLoadAction is triggered', () => {
    let result;

    beforeEach(() => {
      const productLoadAction: DaffProductLoad = new DaffProductLoad(productId);

      result = daffProductReducer(initialState, productLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });

    it('sets selectedProductId to the product id', () => {
      expect(result.selectedProductId).toEqual(productId);
    });
  });

  describe('when ProductLoadSuccessAction is triggered', () => {

    let result;
    let state: DaffProductReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }

      const productLoadSuccess = new DaffProductLoadSuccess(product);
      result = daffProductReducer(state, productLoadSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when ProductLoadFailureAction is triggered', () => {

    const error = 'error message';
    let result;
    let state: DaffProductReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      const productLoadFailure = new DaffProductLoadFailure(error);

      result = daffProductReducer(state, productLoadFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('when UpdateQtyAction is triggered', () => {

    let givenQty: number;
    let result;

    beforeEach(() => {
      givenQty = 3;
      const productLoadFailure = new DaffProductUpdateQty(givenQty);

      result = daffProductReducer(initialState, productLoadFailure);
    });

    it('sets qty to payload', () => {
      expect(result.qty).toEqual(givenQty);
    });
  });
});
