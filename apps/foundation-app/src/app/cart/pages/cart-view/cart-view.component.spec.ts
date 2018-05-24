import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { CartViewComponent } from './cart-view.component';

import { Cart, CartItem, CartFactory } from '@daffodil/core';

let cartFactory = new CartFactory();
let cart$ = of(cartFactory.create());

@Component({
  selector: '[cart-container]', 
  template: '<ng-content></ng-content>', 
  exportAs: 'CartContainer'
})
class CartContainerLoadingFalseMock {
  cart$: Observable<Cart> = cart$;
  loading$: Observable<boolean> = of(false);
}

@Component({
  selector: '[cart-container]', 
  template: '<ng-content></ng-content>', 
  exportAs: 'CartContainer'
})
class CartContainerLoadingTrueMock {
  cart$: Observable<Cart> = cart$;
  loading$: Observable<boolean> = of(true);
}

@Component({
  selector: 'cart',
  template: ''
})
class CartMock { 
  @Input() cart: Cart;
}

@Component({
  selector: 'cart-summary',
  template: ''
})
class CartSummaryMock {
  @Input() cart: Cart;
}

@Component({
  selector: 'proceed-to-checkout',
  template: ''
})
class ProceedToCheckoutMock {}

describe('CartViewComponent - loading$ is false', () => {
  let component: CartViewComponent;
  let fixture: ComponentFixture<CartViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CartViewComponent,
        CartContainerLoadingFalseMock,
        CartMock,
        CartSummaryMock,
        ProceedToCheckoutMock
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <cart>', () => {
    
    it('should set cart to value passed by cart-container directive', () => {
      let cartElement = fixture.debugElement.query(By.css('cart'));
      
      cart$.subscribe((cart) => {
        expect(cartElement.componentInstance.cart).toEqual(cart);
      });
    });
  });

  describe('on <cart-summary>', () => {
    
    it('should set cart to value passed by the cart-container directive', () => {
      let cartSummaryElement = fixture.debugElement.query(By.css('cart-summary'));

      cart$.subscribe((cart) => {
        expect(cartSummaryElement.componentInstance.cart).toEqual(cart);
      });
    });
  });

  describe('when CartContainer.$loading is false', () => {
    
    it('should render <cart>', () => {
      let cartComponent = fixture.debugElement.query(By.css('cart'));

      expect(cartComponent).not.toBeNull();
    });

    it('should render <cart-summary>', () => {
      let cartSummary = fixture.debugElement.query(By.css('cart-summary'));
    
      expect(cartSummary).not.toBeNull();
    });

    it('should render <proceed-to-checkout>', () => {
      let proceedToCheckoutComponent = fixture.debugElement.query(By.css('proceed-to-checkout'));
      
      expect(proceedToCheckoutComponent).not.toBeNull();
    });

    it('should not render loading-icon', () => {
      let loadingIcon = fixture.debugElement.query(By.css('.cart-container__loading-icon'));
      
      expect(loadingIcon).toBeNull();
    });
  });
});

describe('CartViewComponent - loading$ is true', () => {
  let component: CartViewComponent;
  let fixture: ComponentFixture<CartViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CartViewComponent,
        CartContainerLoadingTrueMock,
        CartMock,
        CartSummaryMock,
        ProceedToCheckoutMock
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('when CartContainer.$loading is true', () => {
    
    it('should not render <cart>', () => {
      let cartComponent = fixture.debugElement.query(By.css('cart'));

      expect(cartComponent).toBeNull();
    });

    it('should not render <cart-summary>', () => {
      let cartSummary = fixture.debugElement.query(By.css('cart-summary'));
    
      expect(cartSummary).toBeNull();
    });

    it('should not render <proceed-to-checkout>', () => {
      let proceedToCheckoutComponent = fixture.debugElement.query(By.css('proceed-to-checkout'));
      
      expect(proceedToCheckoutComponent).toBeNull();
    });

    it('should render loading-icon', () => {
      let loadingIcon = fixture.debugElement.query(By.css('.cart-container__loading-icon'));
      
      expect(loadingIcon).not.toBeNull();
    });
  });
});