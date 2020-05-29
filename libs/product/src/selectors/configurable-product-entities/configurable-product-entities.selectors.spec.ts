import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffConfigurableProductFactory } from '@daffodil/product/testing';
import { 
	DaffProductGridLoadSuccess,
	DaffProductReducersState,
	daffProductReducers,
	DaffConfigurableProduct,
	DaffConfigurableProductApplyAttribute
} from '@daffodil/product';

import { getDaffConfigurableProductEntitiesSelectors } from './configurable-product-entities.selectors';

describe('selectConfigurableProductEntitiesState', () => {

  let store: Store<DaffProductReducersState>;
  const configurableProductFactory: DaffConfigurableProductFactory = new DaffConfigurableProductFactory();
	let stubConfigurableProduct: DaffConfigurableProduct;
	const {
		selectConfigurableProductIds,
		selectConfigurableProductAppliedAttributesEntities,
		selectConfigurableProductTotal,
		selectConfigurableProductAppliedAttributes,
		selectConfigurableProductAppliedAttributesAsDictionary
	} = getDaffConfigurableProductEntitiesSelectors();
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          product: combineReducers(daffProductReducers),
        })
      ]
    });

    stubConfigurableProduct = configurableProductFactory.create();
    store = TestBed.get(Store);

    store.dispatch(new DaffProductGridLoadSuccess(new Array(stubConfigurableProduct)));
    store.dispatch(new DaffConfigurableProductApplyAttribute(
			stubConfigurableProduct.id, 
			stubConfigurableProduct.configurableAttributes[0].code, 
			stubConfigurableProduct.configurableAttributes[0].values[0].value
		));
  });
    
	describe('selectConfigurableProductIds', () => {
	
		it('selects product ids', () => {
			const selector = store.pipe(select(selectConfigurableProductIds));
			const expected = cold('a', { a: [stubConfigurableProduct.id] });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectConfigurableProductAppliedAttributesEntities', () => {
		
		it('selects configurable product attributes as a dictionary object', () => {
			const expectedDictionary = {
				[stubConfigurableProduct.id]: {
					id: stubConfigurableProduct.id,
					attributes: [
						{
							code: stubConfigurableProduct.configurableAttributes[0].code, 
							value: stubConfigurableProduct.configurableAttributes[0].values[0].value
						}
					]
				}
			}

			const selector = store.pipe(select(selectConfigurableProductAppliedAttributesEntities));
			const expected = cold('a', { a: expectedDictionary });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectConfigurableProductTotal', () => {
		
		it('selects the total number of configurable products', () => {
			const selector = store.pipe(select(selectConfigurableProductTotal));
			const expected = cold('a', { a: 1 });

			expect(selector).toBeObservable(expected);
		});
	});

  describe('selectConfigurableProductAppliedAttributes', () => {
    
    it('selects the configurable product attributes of the given id', () => {
			const selector = store.pipe(select(selectConfigurableProductAppliedAttributes, { id: stubConfigurableProduct.id }));
			const expected = cold('a', { 
				a: [{
					code: stubConfigurableProduct.configurableAttributes[0].code, 
					value: stubConfigurableProduct.configurableAttributes[0].values[0].value
				}] 
			});

			expect(selector).toBeObservable(expected);
    });
  });

  describe('selectConfigurableProductAppliedAttributesAsDictionary', () => {
    
    it('selects the configurable product attributes of the given id as a dictionary', () => {
			const selector = store.pipe(select(selectConfigurableProductAppliedAttributesAsDictionary, { id: stubConfigurableProduct.id }));
			const expected = cold('a', { 
				a: {
					[stubConfigurableProduct.configurableAttributes[0].code]: stubConfigurableProduct.configurableAttributes[0].values[0].value
				}
			});

			expect(selector).toBeObservable(expected);
    });
  });
});
