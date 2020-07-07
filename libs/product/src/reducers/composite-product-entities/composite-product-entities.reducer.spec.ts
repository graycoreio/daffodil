import { DaffProductFactory, DaffCompositeProductFactory } from '@daffodil/product/testing';

import { DaffProductLoadSuccess } from '../../actions/product.actions';
import { DaffProductGridLoadSuccess } from '../../actions/product-grid.actions';
import { daffCompositeProductEntitiesReducer } from './composite-product-entities.reducer';
import { DaffBestSellersLoadSuccess } from '../../actions/best-sellers.actions';
import { DaffProduct } from '../../models/product';
import { daffCompositeProductAppliedOptionsEntitiesAdapter } from './composite-product-entities-reducer-adapter';
import { DaffCompositeProduct } from '../../models/composite-product';
import { DaffCompositeProductApplyOption } from '../../actions/composite-product.actions';

describe('Product | Composite Product Entities Reducer', () => {

	let productFactory: DaffProductFactory;
	let compositeProductFactory: DaffCompositeProductFactory;
	const initialState = daffCompositeProductAppliedOptionsEntitiesAdapter().getInitialState();
	let compositeProduct: DaffCompositeProduct;

  beforeEach(() => {
		productFactory = new DaffProductFactory();
		compositeProductFactory = new DaffCompositeProductFactory();
		compositeProduct = compositeProductFactory.create()
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = daffCompositeProductEntitiesReducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('when ProductGridLoadSuccessAction is triggered', () => {

    let products: DaffProduct[];
    let compositeProducts: DaffCompositeProduct[];
    let result;

    beforeEach(() => {
			products = productFactory.createMany(2);
			compositeProducts = compositeProductFactory.createMany(2);

			products = [
				...products,
				...compositeProducts
			];
      const productGridLoadSuccess = new DaffProductGridLoadSuccess(products);
      
      result = daffCompositeProductEntitiesReducer(initialState, productGridLoadSuccess);
    });

    it('sets a composite product entity for each composite product', () => {
      expect(result.ids.length).toEqual(compositeProducts.length);
    });
  });

  describe('when BestSellersLoadSuccessAction is triggered', () => {

    let products: DaffProduct[];
    let compositeProducts: DaffCompositeProduct[];
    let result;

    beforeEach(() => {
			products = productFactory.createMany(2);
			compositeProducts = compositeProductFactory.createMany(2);

			products = [
				...products,
				...compositeProducts
			];
      
      const bestSellersLoadSuccess = new DaffBestSellersLoadSuccess(products);
      
      result = daffCompositeProductEntitiesReducer(initialState, bestSellersLoadSuccess);
    });

    it('sets a composite product entity for each composite product', () => {
      expect(result.ids.length).toEqual(compositeProducts.length);
    });
  });

  describe('when ProductLoadSuccessAction is triggered', () => {
    
    let product: DaffProduct;
		let result;

    beforeEach(() => {
      product = productFactory.create();
    });
		
    it('sets a composite product entity when the given product is composite', () => {
			const productLoadSuccess = new DaffProductLoadSuccess(compositeProduct);
			result = daffCompositeProductEntitiesReducer(initialState, productLoadSuccess);
			expect(result.entities[compositeProduct.id]).toEqual({ id: compositeProduct.id, items: { [compositeProduct.items[0].id]: compositeProduct.items[0].options[0].id } });
    });
		
    it('does not set a composite product entity when the given product is not composite', () => {
			const productLoadSuccess = new DaffProductLoadSuccess(product);
			result = daffCompositeProductEntitiesReducer(initialState, productLoadSuccess);
      expect(result.entities[product.id]).toBeUndefined();
    });
  });

  describe('when DaffCompositeProductApplyOption is triggered', () => {
    
		let result;

    beforeEach(() => {
			const specInitialState = {
				ids: [compositeProduct.id],
				entities: {
					[compositeProduct.id]: {
						id: compositeProduct.id,
						items: compositeProduct.items.reduce((acc, item) => {
							return {
								...acc,
								[item.id]: item.options.find(option => option.is_default).id
							}
						}, {})
					}
				}
			}

      const compositeProductApplyAttribute = new DaffCompositeProductApplyOption(
				compositeProduct.id,
				<string>compositeProduct.items[0].id,
				compositeProduct.items[0].options[1].id
			);
      
			result = daffCompositeProductEntitiesReducer(specInitialState, compositeProductApplyAttribute);
    });

    it('changes the option id of the given product item', () => {
      expect(result.entities[compositeProduct.id].items[compositeProduct.items[0].id]).toEqual(compositeProduct.items[0].options[1].id);
    });
  });
});
