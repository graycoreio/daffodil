import { Product, ProductFactory } from '../../../../index';

import { 
  initialState, 
  reducer, 
  State,
  getProductLoading, 
  getSelectedProductId, 
  getProductQty 
} from "../reducers/product.reducer";
import { ProductLoad, ProductLoadSuccess, ProductLoadFailure, UpdateQty } from "../actions/product.actions";

describe('Product | Product Reducer', () => {

  let productFactory: ProductFactory;
  let product: Product;
  let productId: string;

  beforeEach(() => {
    productFactory = new ProductFactory();

    product = productFactory.create();
    productId = product.id;
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when ProductLoadAction is triggered', () => {
    let result;

    beforeEach(() => {
      const productLoadAction: ProductLoad = new ProductLoad(productId);

      result = reducer(initialState, productLoadAction);
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
    let state: State;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }

      let productLoadSuccess = new ProductLoadSuccess(product);
      result = reducer(state, productLoadSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when ProductLoadFailureAction is triggered', () => {

    let error: string;
    let result;
    let state: State;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      let productLoadFailure = new ProductLoadFailure(error);

      result = reducer(state, productLoadFailure);
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
      let productLoadFailure = new UpdateQty(givenQty);

      result = reducer(initialState, productLoadFailure);
    });

    it('sets qty to payload', () => {
      expect(result.qty).toEqual(givenQty);
    });
  });

  describe('getSelectedProductId', () => {
    
    it('returns selectedProductId', () => {
      expect(getSelectedProductId(initialState)).toEqual(initialState.selectedProductId);
    });
  });

  describe('getProductQty', () => {
    
    it('returns selectedProductId', () => {
      expect(getProductQty(initialState)).toEqual(initialState.qty);
    });
  });

  describe('getProductLoading', () => {
    
    it('returns loading state', () => {
      expect(getProductLoading(initialState)).toEqual(initialState.loading);
    });
  });
});
