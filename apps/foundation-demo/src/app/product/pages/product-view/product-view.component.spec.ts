import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Observable ,  of } from 'rxjs';

import { Product } from '@daffodil/core';
import { DaffProductFactory } from '@daffodil/core/testing';

import { ProductViewComponent } from './product-view.component';
import { ActivatedRouteStub } from '../../../testing/ActivatedRouteStub';
import { AddToCartComponent } from '../../components/add-to-cart/add-to-cart.component';

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
  addToCart: Function;
}

@Component({
  selector: 'demo-product',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None
})
class MockProductComponent { 
  @Input() product: Product;
  @Input() qty: number;
  @Output() updateQty: EventEmitter<any> = new EventEmitter();
}

@Component({selector: 'demo-add-to-cart', template: ''})
class MockAddToCartComponent { 
  @Input() additive: any;
  @Input() qty: number;
  @Output() addToCart: EventEmitter<any> = new EventEmitter();
}

@Component({ selector: 'demo-loading-icon', template: ''})
class MockLoadingIconComponent {}

@Component({ selector: 'demo-add-to-cart-notification', template: ''})
class MockAddToCartNotificationComponent {}

describe('ProductViewComponent', () => {
  let component: ProductViewComponent;
  let fixture: ComponentFixture<ProductViewComponent>;
  let idParam: string;
  let activatedRoute = new ActivatedRouteStub();
  let productContainer: MockProductContainer;
  let productComponent: MockProductComponent;
  let addToCartComponent: AddToCartComponent;
  let addToCartNotification: MockAddToCartNotificationComponent;

  beforeEach(async(() => {
    idParam = '1001';
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        ProductViewComponent,
        MockProductContainer,
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
    productContainer.addToCart = (payload) => {};
    productContainer.updateQty = (payload: number) => {};

    fixture.detectChanges();
    productComponent = fixture.debugElement.query(By.css('demo-product')).componentInstance;
    addToCartComponent = fixture.debugElement.query(By.css('demo-add-to-cart')).componentInstance;
    addToCartNotification = fixture.debugElement.query(By.css('demo-add-to-cart-notification')).componentInstance;
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

  describe('on <demo-product>', () => {
    
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

  describe('on <demo-add-to-cart>', () => {
    
    it('should set additive to product passed by product-container directive', () => {
      expect(addToCartComponent.additive).toEqual(mockProduct);
    });
    
    it('should set qty to qty passed by product-container directive', () => {
      expect(addToCartComponent.qty).toEqual(stubQty);
    });

    it('should set addToCart to call function passed by product-container directive', () => {
      spyOn(productContainer, 'addToCart');
      let payload = 'test';

      addToCartComponent.addToCart.emit(payload);

      expect(productContainer.addToCart).toHaveBeenCalledWith(payload);
    });
  });

  describe('when loading$ is false', () => {
    
    it('should render <demo-product>', () => {
      expect(productComponent).not.toBeNull();
    });

    it('should not render demo-loading-icon', () => {
      expect(fixture.debugElement.query(By.css('demo-loading-icon'))).toBeNull();
    });
  });

  describe('when loading$ is true', () => {
    let productComponent;
    
    beforeEach(() => {
      productContainer.loading$ = of(true);
      fixture.detectChanges();

      productComponent = fixture.debugElement.query(By.css('demo-product'));
    });

    it('should  not render <demo-product>', () => {
      expect(productComponent).toBeNull();
    });
    
    it('should render demo-loading-icon', () => {
      expect(fixture.debugElement.query(By.css('demo-loading-icon'))).not.toBeNull();
    });
  });
});
