import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Observable ,  of } from 'rxjs';

import { Product, DaffProductFactory } from '@daffodil/product';

import { ProductViewComponent } from './product-view.component';
import { ActivatedRouteStub } from '../../../testing/ActivatedRouteStub';
import { AddToCartComponent } from '../../../cart/components/add-to-cart/add-to-cart.component';

let productFactory: DaffProductFactory = new DaffProductFactory();
let mockProduct = productFactory.create();
let product$ = of(mockProduct);
let stubQty = 1;

@Component({
  selector: '[product-container]', 
  template: '<ng-content></ng-content>', 
  exportAs: 'ProductContainer'
})
class MockProductContainer {
  @Input() selectedProductId: string;

  product$: Observable<Product> = product$;
  loading$: Observable<boolean> = of(false);
  qty$: Observable<number> = of(stubQty);
  updateQty: Function;
}

@Component({
  selector: '[cart-container]', 
  template: '<ng-content></ng-content>', 
  exportAs: 'CartContainer'
})
class MockCartContainer {
  addToCart: Function;
}

@Component({
  selector: 'product',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None
})
class MockProductComponent { 
  @Input() product: Product;
  @Input() qty: number;
  @Output() updateQty: EventEmitter<any> = new EventEmitter();
}

@Component({selector: 'add-to-cart', template: ''})
class MockAddToCartComponent { 
  @Input() additive: any;
  @Input() qty: number;
  @Output() addToCart: EventEmitter<any> = new EventEmitter();
}

@Component({ selector: 'loading-icon', template: ''})
class MockLoadingIconComponent {}

@Component({ selector: 'add-to-cart-notification', template: ''})
class MockAddToCartNotificationComponent {}

describe('ProductViewComponent', () => {
  let component: ProductViewComponent;
  let fixture: ComponentFixture<ProductViewComponent>;
  let idParam: string;
  let activatedRoute = new ActivatedRouteStub();
  let productContainer: MockProductContainer;
  let cartContainer: MockCartContainer;
  let productComponent: MockProductComponent;
  let addToCartComponent: AddToCartComponent;

  beforeEach(async(() => {
    idParam = '1001';
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        ProductViewComponent,
        MockProductContainer,
        MockCartContainer,
        MockProductComponent,
        MockAddToCartComponent,
        MockLoadingIconComponent,
        MockAddToCartNotificationComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewComponent);
    component = fixture.componentInstance;
    activatedRoute.setParamMap({ id: idParam });

    productContainer = fixture.debugElement.query(By.css('[product-container]')).componentInstance;
    productContainer.loading$ = of(false);
    productContainer.updateQty = (payload: number) => {};
    
    fixture.detectChanges();
    cartContainer = fixture.debugElement.query(By.css('[cart-container]')).componentInstance;
    productComponent = fixture.debugElement.query(By.css('product')).componentInstance;
    addToCartComponent = fixture.debugElement.query(By.css('add-to-cart')).componentInstance;
    cartContainer.addToCart = (payload) => {};
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set productId from id param', () => {
    expect(component.productId).toEqual(idParam);
  });

  describe('on [product-container]', () => {
    
    it('should set selectedProductId', () => {
      expect(productContainer.selectedProductId).toEqual(idParam);
    });
  });

  describe('on <product>', () => {
    
    it('should set product to value passed by product-container directive', () => {
      expect(productComponent.product).toEqual(mockProduct);
    });

    it('should set qty to value passed by product-container directive', () => {
      expect(productComponent.qty).toEqual(stubQty);
    });

    it('should set updateQty to call function passed by product-container directive', () => {
      spyOn(productContainer, 'updateQty');
      let payload = 4;

      productComponent.updateQty.emit(payload);

      expect(productContainer.updateQty).toHaveBeenCalledWith(payload);
    });
  });

  describe('on <add-to-cart>', () => {
    
    it('should set additive to product passed by product-container directive', () => {
      expect(addToCartComponent.additive).toEqual(mockProduct);
    });
    
    it('should set qty to qty passed by product-container directive', () => {
      expect(addToCartComponent.qty).toEqual(stubQty);
    });

    it('should set addToCart to call function passed by cart-container directive', () => {
      spyOn(cartContainer, 'addToCart');
      let payload = 'test';

      addToCartComponent.addToCart.emit(payload);

      expect(cartContainer.addToCart).toHaveBeenCalledWith(payload);
    });
  });

  describe('when loading$ is false', () => {
    
    it('should render <product>', () => {
      expect(productComponent).not.toBeNull();
    });

    it('should not render loading-icon', () => {
      expect(fixture.debugElement.query(By.css('loading-icon'))).toBeNull();
    });
  });

  describe('when loading$ is true', () => {
    let productComponent;
    
    beforeEach(() => {
      productContainer.loading$ = of(true);
      fixture.detectChanges();

      productComponent = fixture.debugElement.query(By.css('product'));
    });

    it('should  not render <product>', () => {
      expect(productComponent).toBeNull();
    });
    
    it('should render loading-icon', () => {
      expect(fixture.debugElement.query(By.css('loading-icon'))).not.toBeNull();
    });
  });
});
