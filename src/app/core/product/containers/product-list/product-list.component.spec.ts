import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as fromProduct from '../../reducers';

import { ProductListContainer } from './product-list.component';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { Component, Input } from '@angular/core';
import { ProductFactory } from '@core/product/testing/factories/product.factory';
import { Product } from '@core/product/model/product';
import { ProductListLoad } from '@core/product/actions/product-list.actions';
import { of } from 'rxjs/observable/of';
import { By } from '@angular/platform-browser';

describe('ProductListContainer', () => {
  let component: ProductListContainer;
  let fixture: ComponentFixture<ProductListContainer>;
  let store;
  let initialLoading: boolean;
  let initialProducts: Product[];
  let productFactory = new ProductFactory();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          products: combineReducers(fromProduct.reducers),
        })
      ],
      declarations: [ ProductListContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListContainer);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    initialLoading = false;
    initialProducts = new Array(productFactory.create());

    spyOn(fromProduct, 'selectProductListLoadingState').and.returnValue(initialLoading);
    spyOn(fromProduct, 'selectAllProducts').and.returnValue(initialProducts);
    spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngInit', () => {
    
    it('dispatches a ProductListLoad action', () => {
      expect(store.dispatch).toHaveBeenCalledWith(new ProductListLoad());
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

  describe('when products$ is null', () => {

    beforeEach(() => {
      component.products$ = of(null);

      fixture.detectChanges();
    });
    
    it('should not render product-list', () => {
      expect(fixture.debugElement.query(By.css('product-list'))).toBeNull();
    });
  });

  describe('when products$ is defined', () => {
    
    beforeEach(() => {
      component.products$ = of(initialProducts);
    });
    
    describe('and loading$ is true', () => {
      
      beforeEach(() => {
        component.loading$ = of(true);

        fixture.detectChanges();
      });

      it('should not render product-list', () => {
        expect(fixture.debugElement.query(By.css('product-list'))).toBeNull();
      });
    });

    describe('and loading$ is false', () => {
      
      beforeEach(() => {
        component.loading$ = of(false);

        fixture.detectChanges();
      });

      it('should render product-list', () => {
        expect(fixture.debugElement.query(By.css('product-list'))).toBeDefined();
      });
    });
  });
});
