import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Observable ,  of } from 'rxjs';

import { Product } from '@daffodil/product';
import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffLoadingIconModule } from '@daffodil/design';

import { ProductViewComponent } from './product-view.component';
import { ActivatedRouteStub } from '../../../testing/ActivatedRouteStub';
import { AddToCartComponent } from '../../components/add-to-cart/add-to-cart.component';

const productFactory: DaffProductFactory = new DaffProductFactory();
const mockProduct = productFactory.create();
const product$ = of(mockProduct);
const stubQty = 1;

@Component({
  // tslint:disable-next-line: component-selector
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
  // tslint:disable-next-line: component-selector
  selector: '[cart-container]', 
  template: '<ng-content></ng-content>', 
  exportAs: 'CartContainer'
})
class MockCartContainer {
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

@Component({ selector: 'demo-add-to-cart-notification', template: ''})
class MockAddToCartNotificationComponent {}

describe('ProductViewComponent', () => {
  let component: ProductViewComponent;
  let fixture: ComponentFixture<ProductViewComponent>;
  const idParam = '1001';
  const activatedRoute = new ActivatedRouteStub();
  let productContainer: MockProductContainer;
  let cartContainer: MockCartContainer;
  let productComponent: MockProductComponent;
  let addToCartComponent: AddToCartComponent;
  let addToCartNotification: MockAddToCartNotificationComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DaffLoadingIconModule
      ],
      declarations: [ 
        ProductViewComponent,
        MockProductContainer,
        MockCartContainer,
        MockProductComponent,
        MockAddToCartComponent,
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
    
    fixture.detectChanges();
    productContainer = fixture.debugElement.query(By.css('[product-container]')).componentInstance;
    productContainer.loading$ = of(false);
    productContainer.updateQty = (payload: number) => {};
    cartContainer = fixture.debugElement.query(By.css('[cart-container]')).componentInstance;
    cartContainer.addToCart = (payload) => {};

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
      const payload = 4;

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

    it('should set addToCart to call function passed by cart-container directive', () => {
      spyOn(cartContainer, 'addToCart');
      const payload = 'test';

      addToCartComponent.addToCart.emit(payload);

      expect(cartContainer.addToCart).toHaveBeenCalledWith(payload);
    });
  });

  describe('when loading$ is false', () => {
    
    it('should render <demo-product>', () => {
      expect(productComponent).not.toBeNull();
    });

    it('should not render daff-loading-icon', () => {
      expect(fixture.debugElement.query(By.css('daff-loading-icon'))).toBeNull();
    });
  });

  describe('when loading$ is true', () => {
    let productElement;
    
    beforeEach(() => {
      productContainer.loading$ = of(true);
      fixture.detectChanges();

      productElement = fixture.debugElement.query(By.css('demo-product'));
    });

    it('should  not render <demo-product>', () => {
      expect(productElement).toBeNull();
    });
    
    it('should render daff-loading-icon', () => {
      expect(fixture.debugElement.query(By.css('daff-loading-icon'))).not.toBeNull();
    });
  });
});
