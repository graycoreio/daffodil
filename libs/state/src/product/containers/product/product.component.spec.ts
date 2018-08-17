import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { By } from '@angular/platform-browser';

import { ProductFactory } from '@daffodil/core';
import { Product } from '@daffodil/core';

import { ProductContainer } from './product.component';
import { AddToCart } from '../../../cart/actions/cart.actions';
import { ProductLoad, UpdateQty } from '../../actions/product.actions';
import * as fromProduct from '../../reducers/index';

@Component({template: '<div product-container #ProductContainer="ProductContainer" [selectedProductId]="selectedProductIdValue"></div>'})
class TestProductContainerWrapper {
  selectedProductIdValue: string;
}

describe('ProductContainer', () => {
  let component: TestProductContainerWrapper;
  let fixture: ComponentFixture<TestProductContainerWrapper>;
  let store;
  let initialLoading: boolean;
  let initialProduct: Product;
  let initialQty: number;
  let productFactory = new ProductFactory();
  let productContainer: ProductContainer;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          products: combineReducers(fromProduct.reducers),
        })
      ],
      declarations: [ 
        TestProductContainerWrapper,
        ProductContainer
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestProductContainerWrapper);
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
      let qty: number = 3;
      productContainer.updateQty(qty);

      expect(store.dispatch).toHaveBeenCalledWith(new UpdateQty(qty));
    });
  });

  describe('addToCart', () => {
    
    it('should call store.dispatch', () => {
      let qty: number = 3;
      let payload = {productId: '', qty: qty};
      productContainer.addToCart(payload);

      expect(store.dispatch).toHaveBeenCalledWith(new AddToCart(payload));
    });
  });
});
