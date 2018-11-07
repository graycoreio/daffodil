import { TestBed, async } from "@angular/core/testing";
import { StoreModule, combineReducers, Store } from "@ngrx/store";

import { Product } from "@daffodil/core";
import { ProductFactory } from "@daffodil/core/testing";

import { ProductLoad } from "../actions/product.actions";
import { ProductGridLoadSuccess, ProductGridReset } from "../actions/product-grid.actions";
import * as fromProduct from './index';
import { BestSellersLoadSuccess, BestSellersReset } from "../actions/best-sellers.actions";

describe('selectProductState', () => {

  let store: Store<fromProduct.State>;
  let productFactory: ProductFactory = new ProductFactory();
  let mockProduct: Product;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          product: combineReducers(fromProduct.reducers),
        })
      ]
    });

    mockProduct = productFactory.create();
    store = TestBed.get(Store);
    store.dispatch(new BestSellersReset());
    store.dispatch(new ProductGridReset());
    store.dispatch(new BestSellersLoadSuccess(new Array(mockProduct)));
    store.dispatch(new ProductGridLoadSuccess(new Array(mockProduct)));
    store.dispatch(new ProductLoad(mockProduct.id));
  }));

  describe('ProductEntitiesState', () => {
    
    describe('selectIds', () => {
    
      it('selects product ids', () => {
        store.select(fromProduct.selectProductIds).subscribe((ids) => {
          expect(ids).toEqual(new Array(mockProduct.id));
        });
      });
    });
  
    describe('selectEntities', () => {
      
      it('selects product entities as a dictionary object', () => {
        store.select(fromProduct.selectProductEntities).subscribe((products) => {
          expect(products[mockProduct.id]).toEqual(mockProduct);
        });
      });
    });
  
    describe('selectAll', () => {
      
      it('selects all products as an array', () => {
        store.select(fromProduct.selectAllProducts).subscribe((products) => {
          expect(products[0]).toEqual(mockProduct);
        });
      });
    });
  
    describe('selectTotal', () => {
      
      it('selects the total number of products', () => {
        store.select(fromProduct.selectProductTotal).subscribe((numberOfProducts) => {
          expect(numberOfProducts).toEqual(1);
        });
      });
    });  
  });
  
  describe('ProductGridState', () => {
    
    describe('selectProductGridState', () => {
    
      it('selects product grid state', () => {
        let expectedGridState = {
          products: [],
          loading: false,
          errors: []
        }
  
        store.select(fromProduct.selectProductGridState).subscribe((productGrid) => {
          expect(productGrid).toEqual(expectedGridState);
        });
      });
    });
  
    describe('selectProductGridLoadingState', () => {
      
      it('selects product grid loading state', () => {
        store.select(fromProduct.selectProductGridLoadingState).subscribe((productGridLoading) => {
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
        store.select(fromProduct.selectSelectedProductState).subscribe((selectedProductState) => {
          expect(selectedProductState).toEqual(expectedProductState);
        });
      });
    });

    describe('selectSelectedProductId', () => {
      
      it('returns the selected product id', () => {
        store.select(fromProduct.selectSelectedProductId).subscribe((selectedProductId) => {
          expect(selectedProductId).toEqual(mockProduct.id);
        });
      });
    });

    describe('selectSelectedProductQty', () => {
      
      it('returns the selected product id', () => {
        store.select(fromProduct.selectSelectedProductQty).subscribe((selectedProductQty) => {
          expect(selectedProductQty).toEqual(1);
        });
      });
    });

    describe('selectSelectedProductLoadingState', () => {
      
      it('selects the loading state of the selected product', () => {
        store.select(fromProduct.selectSelectedProductLoadingState).subscribe((selectedProductLoadingState) => {
          expect(selectedProductLoadingState).toEqual(true);
        });
      });
    });
  });

  describe('selectSelectedProduct', () => {
    
    it('selects the selected product', () => {
      store.select(fromProduct.selectSelectedProduct).subscribe((selectedProduct) => {
        expect(selectedProduct).toEqual(mockProduct);
      });
    });
  });
  
  describe('BestSellersState', () => {
    
    describe('selectBestSellersState', () => {
    
      it('selects best seller grid state', () => {
        let expectedsState = {
          productIds: [mockProduct.id],
          loading: false,
          errors: []
        }
  
        store.select(fromProduct.selectBestSellersState).subscribe((bestSellers) => {
          expect(bestSellers).toEqual(expectedsState);
        });
      });
    });
  
    describe('selectBestSellersLoadingState', () => {
      
      it('selects product grid loading state', () => {
        store.select(fromProduct.selectBestSellersLoadingState).subscribe((bestSellersLoading) => {
          expect(bestSellersLoading).toEqual(false);
        });
      });
    });

    describe('selectBestSellersIdsState', () => {
      
      it('selects product grid loading state', () => {
        store.select(fromProduct.selectBestSellersIdsState).subscribe((bestSellersIds) => {
          expect(bestSellersIds).toEqual([mockProduct.id]);
        });
      });
    });
  });
});
