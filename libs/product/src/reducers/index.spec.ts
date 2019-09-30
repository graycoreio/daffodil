import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';

import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffProductLoad } from '../actions/product.actions';
import { DaffProductGridLoadSuccess, DaffProductGridReset } from '../actions/product-grid.actions';
import * as fromProduct from './index';
import { DaffBestSellersLoadSuccess, DaffBestSellersReset } from '../actions/best-sellers.actions';
import { DaffProduct } from '../models/product';

describe('selectProductState', () => {

  let store: Store<fromProduct.State>;
  const productFactory: DaffProductFactory = new DaffProductFactory();
  let mockProduct: DaffProduct;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          product: combineReducers(fromProduct.reducers),
        })
      ]
    });

    mockProduct = productFactory.create();
    store = TestBed.get(Store);

    store.dispatch(new DaffBestSellersReset());
    store.dispatch(new DaffProductGridReset());
    store.dispatch(new DaffBestSellersLoadSuccess(new Array(mockProduct)));
    store.dispatch(new DaffProductGridLoadSuccess(new Array(mockProduct)));
    store.dispatch(new DaffProductLoad(mockProduct.id));
  });

  describe('ProductEntitiesState', () => {
    
    describe('selectIds', () => {
    
      it('selects product ids', () => {
        store.pipe(select(fromProduct.selectProductIds)).subscribe((ids) => {
          expect(ids).toEqual(new Array(mockProduct.id));
        });
      });
    });
  
    describe('selectEntities', () => {
      
      it('selects product entities as a dictionary object', () => {
        store.pipe(select(fromProduct.selectProductEntities)).subscribe((products) => {
          expect(products[mockProduct.id]).toEqual(mockProduct);
        });
      });
    });
  
    describe('selectAll', () => {
      
      it('selects all products as an array', () => {
        store.pipe(select(fromProduct.selectAllProducts)).subscribe((products) => {
          expect(products[0]).toEqual(mockProduct);
        });
      });
    });
  
    describe('selectTotal', () => {
      
      it('selects the total number of products', () => {
        store.pipe(select(fromProduct.selectProductTotal)).subscribe((numberOfProducts) => {
          expect(numberOfProducts).toEqual(1);
        });
      });
    });  
  });

  describe('selectProduct', () => {
    
    it('should select the product of the given id', () => {
      store.pipe(select(fromProduct.selectProduct, {id: mockProduct.id})).subscribe((product) => {
        expect(product).toEqual(mockProduct);
      });
    });
  });

  describe('selectProducts', () => {
    
    it('should select the products of the given ids', () => {
      store.pipe(select(fromProduct.selectProducts, {ids: [mockProduct.id]})).subscribe((products) => {
        expect(products).toEqual([mockProduct]);
      });
    });
  });
  
  describe('ProductGridState', () => {
    
    describe('selectProductGridState', () => {
    
      it('selects product grid state', () => {
        const expectedGridState = {
          products: [],
          loading: false,
          errors: []
        }
  
        store.pipe(select(fromProduct.selectProductGridState)).subscribe((productGrid) => {
          expect(productGrid).toEqual(expectedGridState);
        });
      });
    });
  
    describe('selectProductGridLoadingState', () => {
      
      it('selects product grid loading state', () => {
        store.pipe(select(fromProduct.selectProductGridLoadingState)).subscribe((productGridLoading) => {
          expect(productGridLoading).toEqual(false);
        });
      });
    });
  });
  
  describe('SelectedProductState', () => {

    describe('selectSelectedProductState', () => {

      let expectedProductState;

      beforeEach(() => {
        expectedProductState = {
          selectedProductId: mockProduct.id,
          qty: 1,
          loading: true,
          errors: []
        }
      });
      
      it('returns the selected product state', () => {
        store.pipe(select(fromProduct.selectSelectedProductState)).subscribe((selectedProductState) => {
          expect(selectedProductState).toEqual(expectedProductState);
        });
      });
    });

    describe('selectSelectedProductId', () => {
      
      it('returns the selected product id', () => {
        store.pipe(select(fromProduct.selectSelectedProductId)).subscribe((selectedProductId) => {
          expect(selectedProductId).toEqual(mockProduct.id);
        });
      });
    });

    describe('selectSelectedProductQty', () => {
      
      it('returns the selected product id', () => {
        store.pipe(select(fromProduct.selectSelectedProductQty)).subscribe((selectedProductQty) => {
          expect(selectedProductQty).toEqual(1);
        });
      });
    });

    describe('selectSelectedProductLoadingState', () => {
      
      it('selects the loading state of the selected product', () => {
        store.pipe(select(fromProduct.selectSelectedProductLoadingState)).subscribe((selectedProductLoadingState) => {
          expect(selectedProductLoadingState).toEqual(true);
        });
      });
    });
  });

  describe('selectSelectedProduct', () => {
    
    it('selects the selected product', () => {
      store.pipe(select(fromProduct.selectSelectedProduct)).subscribe((selectedProduct) => {
        expect(selectedProduct).toEqual(mockProduct);
      });
    });
  });
  
  describe('BestSellersState', () => {
    
    describe('selectBestSellersState', () => {
    
      it('selects best seller grid state', () => {
        const expectedsState = {
          productIds: [mockProduct.id],
          loading: false,
          errors: []
        }
  
        store.pipe(select(fromProduct.selectBestSellersState)).subscribe((bestSellers) => {
          expect(bestSellers).toEqual(expectedsState);
        });
      });
    });
  
    describe('selectBestSellersLoadingState', () => {
      
      it('selects product grid loading state', () => {
        store.pipe(select(fromProduct.selectBestSellersLoadingState)).subscribe((bestSellersLoading) => {
          expect(bestSellersLoading).toEqual(false);
        });
      });
    });

    describe('selectBestSellersIdsState', () => {
      
      it('selects product grid loading state', () => {
        store.pipe(select(fromProduct.selectBestSellersIdsState)).subscribe((bestSellersIds) => {
          expect(bestSellersIds).toEqual([mockProduct.id]);
        });
      });
    });

    describe('selectBestSellersProducts', () =>{
      it('should return the list of best sellers off the product entity state', () => {
        store.pipe(select(fromProduct.selectBestSellersProducts)).subscribe((bestSellers) => {
          expect(bestSellers).toEqual([mockProduct]);
        });
      });
    });
  });
});
