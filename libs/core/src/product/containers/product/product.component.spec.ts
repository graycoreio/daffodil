import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { of } from 'rxjs/observable/of';

import { ProductContainer } from './product.component';
import { ProductFactory } from '../../testing/factories/product.factory';
import { Product } from '../../model/product';

import { ProductLoad } from '../../actions/product.actions';
import * as fromProduct from '../../reducers';
import { AddToCart } from '../../../cart/actions/cart.actions';

describe('ProductContainer', () => {
  let component: ProductContainer;
  let fixture: ComponentFixture<ProductContainer>;
  let store;
  let initialLoading: boolean;
  let initialProduct: Product;
  let productFactory = new ProductFactory();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          products: combineReducers(fromProduct.reducers),
        })
      ],
      declarations: [ ProductContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductContainer);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    initialLoading = false;
    initialProduct = productFactory.create();

    component.selectedProductId = initialProduct.id;

    spyOn(fromProduct, 'selectSelectedProductLoadingState').and.returnValue(initialLoading);
    spyOn(fromProduct, 'selectSelectedProduct').and.returnValue(initialProduct);
    spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngInit', () => {
    
    it('dispatches a ProductLoad action', () => {
      expect(store.dispatch).toHaveBeenCalledWith(new ProductLoad(component.selectedProductId));
    });

    it('initializes loading$', () => {
      component.loading$.subscribe((loading) => {
        expect(loading).toEqual(initialLoading);
      });
    });

    it('initializes product$', () => {
      component.product$.subscribe((product) => {
        expect(product).toEqual(initialProduct);
      });
    });
  });

  describe('addToCart', () => {
    
    it('should call store.dispatch', () => {
      let productId: string;
      let qty: number;
      component.addToCart({productId, qty});

      expect(store.dispatch).toHaveBeenCalledWith(new AddToCart({productId, qty}));
    });
  });
});
