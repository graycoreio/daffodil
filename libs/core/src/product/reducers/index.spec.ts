import { NgModule } from "@angular/core";
import { TestBed, async } from "@angular/core/testing";

import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import * as fromProduct from './index';
import { selectProductGridState } from "../reducers";
import { ProductGridLoadSuccess } from "../actions/product-grid.actions";
import { ProductFactory } from "../testing/factories/product.factory";
import { Product } from "../model/product";
import { ProductLoad } from "../actions/product.actions";

describe('selectProductGridState', () => {

  let store: Store<fromProduct.ProductState>;
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
    store.dispatch(new ProductGridLoadSuccess(new Array(mockProduct)));
    store.dispatch(new ProductLoad(mockProduct.id));
  }));

  describe('ProductEntitiesState', () => {
    
    describe('selectProductIds', () => {
    
      it('selects product ids', () => {
        store.pipe(select(fromProduct.selectProductIds)).subscribe((ids) => {
          expect(ids).toEqual(new Array(mockProduct.id));
        });
      });
    });
  
    describe('selectProductEntities', () => {
      
      it('selects product entities as a dictionary object', () => {
        store.pipe(select(fromProduct.selectProductEntities)).subscribe((products) => {
          expect(products[mockProduct.id]).toEqual(mockProduct);
        });
      });
    });
  
    describe('selectAllProducts', () => {
      
      it('selects all products as an array', () => {
        store.pipe(select(fromProduct.selectAllProducts)).subscribe((products) => {
          expect(products[0]).toEqual(mockProduct);
        });
      });
    });
  
    describe('selectTotalProducts', () => {
      
      it('selects the total number of products', () => {
        store.pipe(select(fromProduct.selectTotalProducts)).subscribe((numberOfProducts) => {
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
});
