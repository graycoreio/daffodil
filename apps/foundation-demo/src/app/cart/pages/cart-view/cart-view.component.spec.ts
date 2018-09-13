import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Cart } from '@daffodil/core';
import { CartFactory } from '@daffodil/core/testing';


import { CartViewComponent } from './cart-view.component';

let cartFactory = new CartFactory();
let cart = cartFactory.create();

@Component({
  selector: '[cart-container]', 
  template: '<ng-content></ng-content>', 
  exportAs: 'CartContainer'
})
class MockCartContainerComponent {
  cart$: Observable<Cart> = of(cart);
  loading$: Observable<boolean> = of(false);
}

@Component({
  selector: 'cart-async-wrapper',
  template: ''
})
class MockCartAsyncWrapperComponent { 
  @Input() cart: Cart;
  @Input() loading: boolean;
}

@Component({
  selector: 'footer',
  template: ''
})
class MockFooterComponent { }

describe('CartViewComponent', () => {
  let component: CartViewComponent;
  let fixture: ComponentFixture<CartViewComponent>;
  let cartContainer: MockCartContainerComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CartViewComponent,
        MockCartContainerComponent,
        MockCartAsyncWrapperComponent,
        MockFooterComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartViewComponent);
    component = fixture.componentInstance;
    
    cartContainer = fixture.debugElement.query(By.css('[cart-container]')).componentInstance;
    cartContainer.loading$ = of(false);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <cart-async-wrapper>', () => {

    let cartAsyncWrapperComponent;

    beforeEach(() => {
      cartAsyncWrapperComponent = fixture.debugElement.query(By.css('cart-async-wrapper'));
    });
    
    it('should set cart to value passed by cart-container directive', () => {
      expect(cartAsyncWrapperComponent.componentInstance.cart).toEqual(cart);
    });

    it('should set loading to value passed by cart-container directive', () => {
      expect(cartAsyncWrapperComponent.componentInstance.loading).toEqual(false);      
    });
  });

  describe('when CartContainer.loading$ is true', () => {

    let loadingIcon;
    let footer;

    beforeEach(() => {
      cartContainer.loading$ = of(true);
      fixture.detectChanges();

      footer = fixture.debugElement.query(By.css('footer'));
      loadingIcon = fixture.debugElement.query(By.css('.cart-view__loading-icon'));
    });

    it('should not render footer', () => {
      expect(footer).toBeNull();
    });

    it('should render loadingIcon', () => {
      expect(loadingIcon).not.toBeNull();
    });
  });

  describe('when CartContainer.loading$ is false', () => {

    let loadingIcon;
    let footer;

    beforeEach(() => {
      cartContainer.loading$ = of(false);
      fixture.detectChanges();

      footer = fixture.debugElement.query(By.css('footer'));
      loadingIcon = fixture.debugElement.query(By.css('.cart-view__loading-icon'));
    });

    it('should render footer', () => {
      expect(footer).not.toBeNull();
    });

    it('should not render loadingIcon', () => {
      expect(loadingIcon).toBeNull();
    });
  });
});
