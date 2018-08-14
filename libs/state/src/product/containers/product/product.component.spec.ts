import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { ProductContainer } from './product.component';
import { ProductFactory } from '@daffodil/core';
import { Product } from '@daffodil/core';

import { ProductLoad, UpdateQty } from '../../actions/product.actions';
import * as fromProduct from '../../reducers/index';
import { AddToCart } from '../../../cart/actions/cart.actions';

describe('ProductContainer', () => {
  let component: ProductContainer;
  let fixture: ComponentFixture<ProductContainer>;
  let store;
  let initialLoading: boolean;
  let initialProduct: Product;
  let initialQty: number;
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
    initialQty = 1;

    component.selectedProductId = initialProduct.id;

    spyOn(fromProduct, 'selectSelectedProductLoadingState').and.returnValue(initialLoading);
    spyOn(fromProduct, 'selectSelectedProduct').and.returnValue(initialProduct);
    spyOn(fromProduct, 'selectSelectedProductQty').and.returnValue(initialQty);
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

    it('initializes qty$', () => {
      component.qty$.subscribe((qty) => {
        expect(qty).toEqual(initialQty);
      })
    });
  });

  describe('updateQty', () => {
    
    it('should call store.dispatch', () => {
      let qty: number = 3;
      component.updateQty(qty);

      expect(store.dispatch).toHaveBeenCalledWith(new UpdateQty(qty));
    });
  });
});
