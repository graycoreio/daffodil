import { DaffProductFactory, DaffConfigurableProductFactory } from '@daffodil/product/testing';

import { DaffProductLoadSuccess } from '../../actions/product.actions';
import { DaffProductGridLoadSuccess } from '../../actions/product-grid.actions';
import { daffConfigurableProductEntitiesReducer } from './configurable-product-entities.reducer';
import { DaffBestSellersLoadSuccess } from '../../actions/best-sellers.actions';
import { DaffProduct } from '../../models/product';
import { daffConfigurableProductAppliedAttributesEntitiesAdapter } from './configurable-product-entities-reducer-adapter';
import { DaffConfigurableProduct } from '../../models/configurable-product';
import { DaffConfigurableProductApplyAttribute, DaffConfigurableProductRemoveAttribute, DaffConfigurableProductToggleAttribute } from '../../actions/configurable-product.actions';

describe('Product | Product Entities Reducer', () => {

	let productFactory: DaffProductFactory;
	let configurableProductFactory: DaffConfigurableProductFactory;
	const initialState = daffConfigurableProductAppliedAttributesEntitiesAdapter().getInitialState();
	let configurableProduct: DaffConfigurableProduct;

  beforeEach(() => {
		productFactory = new DaffProductFactory();
		configurableProductFactory = new DaffConfigurableProductFactory();
		configurableProduct = configurableProductFactory.create()
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = daffConfigurableProductEntitiesReducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('when ProductGridLoadSuccessAction is triggered', () => {

    let products: DaffProduct[];
    let configurableProducts: DaffConfigurableProduct[];
    let result;

    beforeEach(() => {
			products = productFactory.createMany(2);
			configurableProducts = configurableProductFactory.createMany(2);

			products = [
				...products,
				...configurableProducts
			];
      const productGridLoadSuccess = new DaffProductGridLoadSuccess(products);
      
      result = daffConfigurableProductEntitiesReducer(initialState, productGridLoadSuccess);
    });

    it('sets a configurable product entity for each configurable product', () => {
      expect(result.ids.length).toEqual(configurableProducts.length);
    });
  });

  describe('when BestSellersLoadSuccessAction is triggered', () => {

    let products: DaffProduct[];
    let configurableProducts: DaffConfigurableProduct[];
    let result;

    beforeEach(() => {
			products = productFactory.createMany(2);
			configurableProducts = configurableProductFactory.createMany(2);

			products = [
				...products,
				...configurableProducts
			];
      
      const bestSellersLoadSuccess = new DaffBestSellersLoadSuccess(products);
      
      result = daffConfigurableProductEntitiesReducer(initialState, bestSellersLoadSuccess);
    });

    it('sets a configurable product entity for each configurable product', () => {
      expect(result.ids.length).toEqual(configurableProducts.length);
    });
  });

  describe('when ProductLoadSuccessAction is triggered', () => {
    
    let product: DaffProduct;
		let result;

    beforeEach(() => {
      product = productFactory.create();
    });
		
    it('sets a configurable product entity when the given product is configurable', () => {
			const productLoadSuccess = new DaffProductLoadSuccess(configurableProduct);
			result = daffConfigurableProductEntitiesReducer(initialState, productLoadSuccess);
			expect(result.entities[configurableProduct.id]).toEqual({ id: configurableProduct.id, attributes: [] });
    });
		
    it('does not set a configurable product entity when the given product is not configurable', () => {
			const productLoadSuccess = new DaffProductLoadSuccess(product);
			result = daffConfigurableProductEntitiesReducer(initialState, productLoadSuccess);
      expect(result.entities[product.id]).toBeUndefined();
    });
  });

  describe('when ConfigurableProductApplyAttributeAction is triggered', () => {
    
		let result;

    beforeEach(() => {
			const specInitialState = {
				ids: [configurableProduct.id],
				entities: {
					[configurableProduct.id]: {
						id: configurableProduct.id,
						attributes: []
					}
				}
			}

      const configurableProductApplyAttribute = new DaffConfigurableProductApplyAttribute(
				configurableProduct.id,
				configurableProduct.configurableAttributes[0].code,
				configurableProduct.configurableAttributes[0].values[0].value
			);
      
			result = daffConfigurableProductEntitiesReducer(specInitialState, configurableProductApplyAttribute);
    });

    it('adds a configurable product attribute to its corresponding entity', () => {
      expect(result.entities[configurableProduct.id]).toEqual({
				id: configurableProduct.id,
				attributes: [{
					code: configurableProduct.configurableAttributes[0].code,
					value: configurableProduct.configurableAttributes[0].values[0].value
				}]
			});
    });
  });

  describe('when ConfigurableProductRemoveAttributeAction is triggered', () => {
    
		let result;

    beforeEach(() => {
			const specInitialState = {
				ids: [configurableProduct.id],
				entities: {
					[configurableProduct.id]: {
						id: configurableProduct.id,
						attributes: [{
							code: configurableProduct.configurableAttributes[0].code,
							value: configurableProduct.configurableAttributes[0].values[0].value
						}]
					}
				}
			}
      
      const configurableProductRemoveAttribute = new DaffConfigurableProductRemoveAttribute(
				configurableProduct.id,
				configurableProduct.configurableAttributes[0].code
			);
      
      result = daffConfigurableProductEntitiesReducer(specInitialState, configurableProductRemoveAttribute);
    });

    it('removes a configurable product attribute from its corresponding entity', () => {
      expect(result.entities[configurableProduct.id]).toEqual({
				id: configurableProduct.id,
				attributes: []
			});
    });
  });

  describe('when ConfigurableProductToggleAttributeAction is triggered', () => {
		let result;
		
		describe('and the attribute type of the same value is already selected', () => {
	
			beforeEach(() => {
				const specInitialState = {
					ids: [configurableProduct.id],
					entities: {
						[configurableProduct.id]: {
							id: configurableProduct.id,
							attributes: [{
								code: configurableProduct.configurableAttributes[0].code,
								value: configurableProduct.configurableAttributes[0].values[0].value
							}]
						}
					}
				}

				const configurableProductToggleAttribute = new DaffConfigurableProductToggleAttribute(
					configurableProduct.id,
					configurableProduct.configurableAttributes[0].code,
					configurableProduct.configurableAttributes[0].values[0].value
				);
				
				result = daffConfigurableProductEntitiesReducer(specInitialState, configurableProductToggleAttribute);
			});
	
			it('removes a configurable product attribute from its corresponding entity', () => {
				expect(result.entities[configurableProduct.id]).toEqual({
					id: configurableProduct.id,
					attributes: []
				});
			});
		});

		describe('and the attribute type does not have a value selected', () => {
			
			beforeEach(() => {
				const specInitialState = {
					ids: [configurableProduct.id],
					entities: {
						[configurableProduct.id]: {
							id: configurableProduct.id,
							attributes: []
						}
					}
				}
				
				const configurableProductToggleAttribute = new DaffConfigurableProductToggleAttribute(
					configurableProduct.id,
					configurableProduct.configurableAttributes[0].code,
					configurableProduct.configurableAttributes[0].values[0].value
				);
				
				result = daffConfigurableProductEntitiesReducer(specInitialState, configurableProductToggleAttribute);
			});

			it('adds a configurable product attribute to its corresponding entity', () => {
				expect(result.entities[configurableProduct.id]).toEqual({ 
					id: configurableProduct.id, 
					attributes: [{
						code: configurableProduct.configurableAttributes[0].code,
						value: configurableProduct.configurableAttributes[0].values[0].value
					}]
				});
			});
		});

		describe('and the attribute type is selected with a different value', () => {
			
			beforeEach(() => {
				const specInitialState = {
					ids: [configurableProduct.id],
					entities: {
						[configurableProduct.id]: {
							id: configurableProduct.id,
							attributes: [{
								code: configurableProduct.configurableAttributes[0].code,
								value: configurableProduct.configurableAttributes[0].values[0].value
							}]
						}
					}
				}
				
				const configurableProductToggleAttribute = new DaffConfigurableProductToggleAttribute(
					configurableProduct.id,
					configurableProduct.configurableAttributes[0].code,
					configurableProduct.configurableAttributes[0].values[1].value
				);
				
				result = daffConfigurableProductEntitiesReducer(specInitialState, configurableProductToggleAttribute);
			});

			it('adds a configurable product attribute to its corresponding entity', () => {
				expect(result.entities[configurableProduct.id]).toEqual({ 
					id: configurableProduct.id, 
					attributes: [{
						code: configurableProduct.configurableAttributes[0].code,
						value: configurableProduct.configurableAttributes[0].values[1].value
					}]
				});
			});
		});
  });
});
