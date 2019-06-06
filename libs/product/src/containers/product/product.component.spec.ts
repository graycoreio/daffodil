import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { By } from '@angular/platform-browser';

import { DaffProductFactory } from 'product//testing/src';

import { ProductContainer } from 'product/src/containers/product/product.component';
import { ProductLoad, UpdateQty } from 'product/src/actions/product.actions';
import * as fromProduct from 'product/src/reducers';
import { Product } from 'product/src/models/product';

@Component({template: '<div product-container #ProductContainer="ProductContainer" [selectedProductId]="selectedProductIdValue"></div>'})
class WrapperComponent {
  selectedProductIdValue: string;
}

describe('ProductContainer', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let store;
  let initialLoading: boolean;
  let initialProduct: Product;
  let initialQty: number;
  const productFactory = new DaffProductFactory();
  let productContainer: ProductContainer;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          products: combineReducers(fromProduct.reducers),
        })
      ],
      declarations: [ 
        WrapperComponent,
        ProductContainer
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    initialLoading = false;
    initialProduct = productFactory.create();
    initialQty = 1;

    component.selectedProductIdValue = initialProduct.id;

    spyOn(fromProduct, 'selectSelectedProductLoadingState').and.returnValue(initialLoading);
    spyOn(fromProduct, 'selectSelectedProduct').and.returnValue(initialProduct);
    spyOn(fromProduct, 'selectSelectedProductQty').and.returnValue(initialQty);
    spyOn(store, 'dispatch');

    fixture.detectChanges();

    productContainer = fixture.debugElement.query(By.css('[product-container]')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take a selectedProductId as input', () => {
    expect(productContainer.selectedProductId).toEqual(component.selectedProductIdValue);
  });

  describe('ngInit', () => {
    
    it('dispatches a ProductLoad action', () => {
      expect(store.dispatch).toHaveBeenCalledWith(new ProductLoad(productContainer.selectedProductId));
    });

    it('initializes loading$', () => {
      productContainer.loading$.subscribe((loading) => {
        expect(loading).toEqual(initialLoading);
      });
    });

    it('initializes product$', () => {
      productContainer.product$.subscribe((product) => {
        expect(product).toEqual(initialProduct);
      });
    });

    it('initializes qty$', () => {
      productContainer.qty$.subscribe((qty) => {
        expect(qty).toEqual(initialQty);
      })
    });
  });

  describe('updateQty', () => {
    
    it('should call store.dispatch', () => {
      const qty = 3;
      productContainer.updateQty(qty);

      expect(store.dispatch).toHaveBeenCalledWith(new UpdateQty(qty));
    });
  });
});
