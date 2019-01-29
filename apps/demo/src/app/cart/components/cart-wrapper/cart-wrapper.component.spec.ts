import { Component, Input, Directive } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Cart } from '@daffodil/core';
import { DaffCartFactory } from '@daffodil/core/testing';
import { fromCart } from '@daffodil/state';

import { CartWrapperComponent } from './cart-wrapper.component';
import { StoreModule, combineReducers } from '@ngrx/store';
import * as cartSelector from '../../selectors/cart-selector';

@Component({template: '<demo-cart-wrapper [cart]="cartValue"></demo-cart-wrapper>'})
class WrapperComponent {
  cartValue: Cart;
}

@Component({
  selector: 'demo-cart',
  template: ''
})
class MockCartComponent { 
  @Input() cart: Cart;
  @Input() title: string;
}

@Component({
  selector: 'demo-cart-totals',
  template: ''
})
class MockCartTotalsComponent {
  @Input() cart: Cart;
}

@Component({
  selector: 'demo-help-box',
  template: ''
})
class MockHelpBoxComponent {}

@Directive({
  selector: '[demoProceedToCheckout]'
})
class MockProceedToCheckoutDirective {}

@Directive({
  selector: '[demoContinueShopping]'
})
class MockContinueShoppingDirective {}

describe('CartWrapper', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let cartWrapperComponent: CartWrapperComponent;
  let cartComponent;
  let cartTotalsComponent;
  let helpBoxComponent;
  let proceedToCheckoutDirective;
  let continueShoppingDirective;
  const cartFactory = new DaffCartFactory();
  const cart = cartFactory.create();
  let stubIsCartEmpty = true;
  let stubSelectCartItemCount: number;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          carts: combineReducers(fromCart.reducers),
        })
      ],
      declarations: [ 
        WrapperComponent,
        MockCartComponent,
        MockCartTotalsComponent,
        MockHelpBoxComponent,
        MockProceedToCheckoutDirective,
        MockContinueShoppingDirective,
        CartWrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.cartValue = cart;
    cartWrapperComponent = fixture.debugElement.query(By.css('demo-cart-wrapper')).componentInstance;
    stubSelectCartItemCount = 1;

    spyOn(cartSelector, 'isCartEmpty').and.returnValue(stubIsCartEmpty);
  });

  describe('when cartItem count is 1', () => {

    beforeEach(() => {
      stubSelectCartItemCount = 1;
      spyOn(cartSelector, 'selectCartItemCount').and.returnValue(stubSelectCartItemCount);

      fixture.detectChanges();
    });
    
    it('should set item count text to "Item"', () => {
      const itemCountElement = fixture.debugElement.query(By.css('.cart-wrapper__item-count'));
      
      expect(itemCountElement.nativeElement.innerText).toEqual('1 Item');
    });
  });

  describe('when cartItem count is not 1', () => {

    beforeEach(() => {
      stubSelectCartItemCount = 24;
      spyOn(cartSelector, 'selectCartItemCount').and.returnValue(stubSelectCartItemCount);

      fixture.detectChanges();
    });
    
    it('should set item count text to "Items"', () => {
      const itemCountElement = fixture.debugElement.query(By.css('.cart-wrapper__item-count'));

      expect(itemCountElement.nativeElement.innerText).toEqual(stubSelectCartItemCount + ' Items');
    });
  });

  xdescribe('regardless of cartItem count', () => {
    
    beforeEach(() => {
        spyOn(cartSelector, 'selectCartItemCount').and.returnValue(stubSelectCartItemCount);
          fixture.detectChanges();

      cartComponent = fixture.debugElement.query(By.css('demo-cart'));
      cartTotalsComponent = fixture.debugElement.query(By.css('demo-cart-totals'));
      helpBoxComponent = fixture.debugElement.query(By.css('demo-help-box'));
      proceedToCheckoutDirective = fixture.debugElement.query(By.css('[demoProceedToCheckout]'));
      continueShoppingDirective = fixture.debugElement.query(By.css('[demoContinueShopping]'));
    });

    it('should create', () => {
      expect(cartWrapperComponent).toBeTruthy();
    });

    it('should be able to take cart as input', () => {
      expect(cartWrapperComponent.cart).toEqual(cart);
    });

    describe('on <demo-cart>', () => {
      
      it('should set cart to value passed by cart-container directive', () => {
        expect(cartComponent.componentInstance.cart).toEqual(cart);
      });
    });

    describe('when CartContainer.$loading is false', () => {
      
      it('should render <demo-cart>', () => {
        expect(cartComponent).not.toBeNull();
      });

      it('should render <demo-help-box>', () => {
        expect(helpBoxComponent).not.toBeNull();
      });

      describe('and cart is empty', () => {

        beforeEach(() => {
          stubIsCartEmpty = true;
        });

        it('should not render .cart-wrapper__summary-title', () => {
          const summaryTitleElement = fixture.debugElement.query(By.css('.cart-wrapper__summary-title'));

          expect(summaryTitleElement).toBeNull();
        });

        it('should not render <demo-cart-totals>', () => {
          expect(cartTotalsComponent).toBeNull();
        });
        
        it('should not render [demoProceedToCheckout]', () => {
          expect(proceedToCheckoutDirective).toBeNull();
        });

        it('should render [demoContinueShopping]', () => {
          expect(continueShoppingDirective).not.toBeNull();
        });
      });

      describe('and cart is not empty', () => {
        
        beforeEach(() => {
          stubIsCartEmpty = false;
        });

        it('should render .cart-wrapper__summary-title', () => {
          const summaryTitleElement = fixture.debugElement.query(By.css('.cart-wrapper__summary-title'));
          
          expect(summaryTitleElement).not.toBeNull();
        });

        it('should render <demo-cart-totals>', () => {
          const cartTotalsElement = fixture.debugElement.query(By.css('demo-cart-totals'))
          expect(cartTotalsElement).not.toBeNull();
        });
      
        it('should set cart to value passed by the cart-container directive', () => {
          expect(cartTotalsComponent.componentInstance.cart).toEqual(cart);
        });

        it('should render [demoProceedToCheckout]', () => {
          expect(proceedToCheckoutDirective).not.toBeNull();
        });

        it('should render [demoContinueShopping]',() => {
          expect(continueShoppingDirective).not.toBeNull();
        });
      });
    });

    describe('isCartEmpty$', () => {

      it('returns cartSelector.isCartEmpty', () => {
        cartWrapperComponent.isCartEmpty$.subscribe(isCartEmpty => {
          expect(isCartEmpty).toEqual(stubIsCartEmpty);
        })
      });
    });

    describe('itemCount$', () => {

      it('returns cartSelector.itemCount', () => {
        cartWrapperComponent.itemCount$.subscribe(itemCount => {
          expect(itemCount).toEqual(stubSelectCartItemCount);
        })
      });
    });
  });
});
