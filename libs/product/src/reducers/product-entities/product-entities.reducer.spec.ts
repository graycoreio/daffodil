import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffProductLoadSuccess } from '../../actions/product.actions';
import { DaffProductGridLoadSuccess, DaffProductGridReset } from '../../actions/product-grid.actions';
import { daffProductEntitiesReducer } from './product-entities.reducer';
import { DaffBestSellersLoadSuccess } from '../../actions/best-sellers.actions';
import { DaffProduct } from '../../models/product';
import { daffProductEntitiesAdapter } from './product-entities-reducer-adapter';

describe('Product | Product Entities Reducer', () => {

  let productFactory: DaffProductFactory;

  beforeEach(() => {
    productFactory = new DaffProductFactory();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = daffProductEntitiesReducer(daffProductEntitiesAdapter<DaffProduct>().getInitialState(), action);

      expect(result).toEqual(daffProductEntitiesAdapter<DaffProduct>().getInitialState());
    });
  });

  describe('when ProductGridLoadSuccessAction is triggered', () => {

    let products: DaffProduct[];
    let result;

    beforeEach(() => {
      products = productFactory.createMany(2);
      const productGridLoadSuccess = new DaffProductGridLoadSuccess(products);
      
      result = daffProductEntitiesReducer(daffProductEntitiesAdapter<DaffProduct>().getInitialState(), productGridLoadSuccess);
    });

    it('sets expected number of products on state', () => {
      expect(result.ids.length).toEqual(products.length);
    });

    it('sets expected product on state', () => {
      expect(result.entities[products[0].id]).toEqual(products[0]);
    });
  });

  describe('when BestSellersLoadSuccessAction is triggered', () => {

    let products: DaffProduct[];
    let result;

    beforeEach(() => {
      products = productFactory.createMany(2);
      
      const bestSellersLoadSuccess = new DaffBestSellersLoadSuccess(products);
      
      result = daffProductEntitiesReducer(daffProductEntitiesAdapter<DaffProduct>().getInitialState(), bestSellersLoadSuccess);
    });

    it('sets expected number of products on state', () => {
      expect(result.ids.length).toEqual(products.length);
    });

    it('sets expected product on state', () => {
      expect(result.entities[products[0].id]).toEqual(products[0]);
    });
  });

  describe('when ProductLoadSuccessAction is triggered', () => {
    
    let product: DaffProduct;
    let result;
    let productId;

    beforeEach(() => {
      product = productFactory.create();
      productId = product.id;
      
      const productLoadSuccess = new DaffProductLoadSuccess(product);
      
      result = daffProductEntitiesReducer(daffProductEntitiesAdapter<DaffProduct>().getInitialState(), productLoadSuccess);
    });

    it('sets expected product on state', () => {
      expect(result.entities[productId]).toEqual(product);
    });
  });

  describe('when ProductGridResetAction is triggered', () => {
    
    let result;

    beforeEach(() => {
      const productGridReset = new DaffProductGridReset();
      
      result = daffProductEntitiesReducer(daffProductEntitiesAdapter<DaffProduct>().getInitialState(), productGridReset);
    });

    it('removes all entities from state', () => {
      expect(result.entities).toEqual({});
    });
  });
});
