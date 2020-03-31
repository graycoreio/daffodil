import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffProductContainer } from './product.component';
import { DaffProductLoad, DaffProductUpdateQty } from '../../actions/product.actions';
import { DaffProduct } from '../../models/product';
import { selectSelectedProductLoadingState, selectSelectedProduct, selectSelectedProductQty } from '../../selectors/product.selectors';

@Component({template: '<div product-container #ProductContainer="ProductContainer" [selectedProductId]="selectedProductIdValue"></div>'})
class WrapperComponent {
  selectedProductIdValue: string;
}

describe('DaffProductContainer', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let store: MockStore<any>;
  let initialLoading: boolean;
  let initialProduct: DaffProduct;
  let initialQty: number;
  const productFactory = new DaffProductFactory();
  let productContainer: DaffProductContainer;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ 
        WrapperComponent,
        DaffProductContainer
      ],
      providers: [
        provideMockStore()
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

    store.overrideSelector(selectSelectedProductLoadingState, initialLoading);
    store.overrideSelector(selectSelectedProduct, initialProduct);
    store.overrideSelector(selectSelectedProductQty, initialQty);

    spyOn(store, 'dispatch');

    fixture.detectChanges();

    productContainer = fixture.debugElement.query(By.css('[product-container]')).componentInstance;
  });

  afterAll(() => {
    store.resetSelectors();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take a selectedProductId as input', () => {
    expect(productContainer.selectedProductId).toEqual(component.selectedProductIdValue);
  });

  describe('ngInit', () => {
    
    it('dispatches a ProductLoad action', () => {
      expect(store.dispatch).toHaveBeenCalledWith(new DaffProductLoad(productContainer.selectedProductId));
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

      expect(store.dispatch).toHaveBeenCalledWith(new DaffProductUpdateQty(qty));
    });
  });
});
