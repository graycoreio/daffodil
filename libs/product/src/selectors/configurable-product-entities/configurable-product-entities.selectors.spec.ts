import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffConfigurableProductFactory } from '@daffodil/product/testing';
import { 
	DaffProductGridLoadSuccess,
	DaffProductReducersState,
	daffProductReducers,
	DaffConfigurableProduct
} from '@daffodil/product';

import { getDaffConfigurableProductEntitiesSelectors } from './configurable-product-entities.selectors';

describe('selectConfigurableProductEntitiesState', () => {

  let store: Store<DaffProductReducersState>;
  const configurableProductFactory: DaffConfigurableProductFactory = new DaffConfigurableProductFactory();
	let stubConfigurableProduct: DaffConfigurableProduct;
	const {
		selectConfigurableProductIds,
		selectConfigurableProductAppliedAttributesEntities,
		selectAllConfigurableProductAppliedAttributeDictionaries,
		selectConfigurableProductTotal,
		selectConfigurableProductAppliedAttributes
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
			const expectedDictionary = new Object();
			expectedDictionary[stubConfigurableProduct.id] = {
				id: stubConfigurableProduct.id
			}

			const selector = store.pipe(select(selectConfigurableProductAppliedAttributesEntities));
			const expected = cold('a', { a: expectedDictionary });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectAllConfigurableProductAppliedAttributeDictionaries', () => {
		
		it('selects all configurable product attributes as an array', () => {
			const selector = store.pipe(select(selectAllConfigurableProductAppliedAttributeDictionaries));
			const expected = cold('a', { a: [{ id: stubConfigurableProduct.id }] });

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
			const expected = cold('a', { a: { id: stubConfigurableProduct.id} });

			expect(selector).toBeObservable(expected);
    });
  });
});
