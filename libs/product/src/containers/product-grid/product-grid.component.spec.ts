import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { ProductGridContainer } from 'product/src/containers/product-grid/product-grid.component';
import { DaffProductFactory } from 'product/testing/src';
import { ProductGridLoad } from 'product/src/actions/product-grid.actions';
import * as fromProduct from 'product/src/reducers';
import { Product } from 'product/src/models/product';

describe('ProductGridContainer', () => {
  let component: ProductGridContainer;
  let fixture: ComponentFixture<ProductGridContainer>;
  let store;
  let initialLoading: boolean;
  let initialProducts: Product[];
  const productFactory = new DaffProductFactory();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          products: combineReducers(fromProduct.reducers),
        })
      ],
      declarations: [ ProductGridContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGridContainer);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    initialLoading = false;
    initialProducts = new Array(productFactory.create());

    spyOn(fromProduct, 'selectProductGridLoadingState').and.returnValue(initialLoading);
    spyOn(fromProduct, 'selectAllProducts').and.returnValue(initialProducts);
    spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngInit', () => {
    
    it('dispatches a ProductGridLoad action', () => {
      expect(store.dispatch).toHaveBeenCalledWith(new ProductGridLoad());
    });

    it('initializes loading$', () => {
      component.loading$.subscribe((loading) => {
        expect(loading).toEqual(initialLoading);
      });
    });

    it('initializes products$', () => {
      component.products$.subscribe((products) => {
        expect(products).toEqual(initialProducts);
      });
    });
  });
});
