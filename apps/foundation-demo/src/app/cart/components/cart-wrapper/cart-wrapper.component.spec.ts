import { Component, Input, Directive } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Cart } from '@daffodil/core';
import { DaffCartFactory } from '@daffodil/core/testing';
import { fromCart } from '@daffodil/state';

import { CartWrapperComponent } from './cart-wrapper.component';
import { StoreModule, combineReducers } from '@ngrx/store';
import * as cartSelector from '../../selectors/cart-selector';
import { of } from 'rxjs';

@Component({template: '<cart-wrapper [cart]="cartValue"></cart-wrapper>'})
class TestCartComponent {
  cartValue: Cart;
}

@Component({
  selector: 'cart',
  template: ''
})
class MockCartComponent { 
  @Input() cart: Cart;
  @Input() title: string;
}

@Component({
  selector: 'promotion',
  template: ''
})
class MockPromotionComponent {}

@Component({
  selector: 'cart-totals',
  template: ''
})
class MockCartTotalsComponent {
  @Input() cart: Cart;
}

@Component({
  selector: 'help-box',
  template: ''
})
class MockHelpBoxComponent {}

@Directive({
  selector: '[proceed-to-checkout]'
})
class MockProceedToCheckoutComponent {}

@Directive({
  selector: '[continue-shopping]'
})
class MockContinueShoppingComponent {}

describe('CartWrapper', () => {
  let component: TestCartComponent;
  let fixture: ComponentFixture<TestCartComponent>;
  let cartWrapperComponent: CartWrapperComponent;
  let cartComponent;
  let promotionComponent;
  let cartTotalsComponent;
  let helpBoxComponent;
  let proceedToCheckoutComponent;
  let continueShoppingComponent;
  const cartFactory = new DaffCartFactory();
  const cart = cartFactory.create();
  let stubIsCartEmpty = true;
  let stubSelectCartItemCount: number;
  let itemCountElement;
  let summaryTitleElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          carts: combineReducers(fromCart.reducers),
        })
      ],
      declarations: [ 
        TestCartComponent,
        MockCartComponent,
        MockCartTotalsComponent,
        MockHelpBoxComponent,
        MockProceedToCheckoutComponent,
        MockContinueShoppingComponent,
        MockPromotionComponent,
        CartWrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCartComponent);
    component = fixture.componentInstance;
    component.cartValue = cart;
    cartWrapperComponent = fixture.debugElement.query(By.css('cart-wrapper')).componentInstance;
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
      itemCountElement = fixture.debugElement.query(By.css('.cart-wrapper__item-count'));
      
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
      itemCountElement = fixture.debugElement.query(By.css('.cart-wrapper__item-count'));

      expect(itemCountElement.nativeElement.innerText).toEqual(stubSelectCartItemCount + ' Items');
    });
  });

  xdescribe('regardless of cartItem count', () => {
    
    beforeEach(() => {
        spyOn(cartSelector, 'selectCartItemCount').and.returnValue(stubSelectCartItemCount);
          fixture.detectChanges();

      cartComponent = fixture.debugElement.query(By.css('cart'));
      promotionComponent = fixture.debugElement.query(By.css('promotion'));
      cartTotalsComponent = fixture.debugElement.query(By.css('cart-totals'));
      helpBoxComponent = fixture.debugElement.query(By.css('help-box'));
      proceedToCheckoutComponent = fixture.debugElement.query(By.css('[proceed-to-checkout]'));
      continueShoppingComponent = fixture.debugElement.query(By.css('[continue-shopping]'));
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should be able to take cart as input', () => {
      expect(cartWrapperComponent.cart).toEqual(cart);
    });

    describe('on <cart>', () => {
      
      it('should set cart to value passed by cart-container directive', () => {
        expect(cartComponent.componentInstance.cart).toEqual(cart);
      });
    });

    describe('when CartContainer.$loading is false', () => {
      
      it('should render <cart>', () => {
        expect(cartComponent).not.toBeNull();
      });

      it('should render <help-box>', () => {
        expect(helpBoxComponent).not.toBeNull();
      });

      describe('and cart is empty', () => {

        beforeEach(() => {
          stubIsCartEmpty = true;
        });

        it('should not render .cart-wrapper__summary-title', () => {
          summaryTitleElement = fixture.debugElement.query(By.css('.cart-wrapper__summary-title'));

          expect(summaryTitleElement).toBeNull();
        });

        it('should not render <promotion>', () => {
          expect(promotionComponent).toBeNull();
        });

        it('should not render <cart-totals>', () => {
          expect(cartTotalsComponent).toBeNull();
        });
        
        it('should not render <proceed-to-checkout>', () => {
          expect(proceedToCheckoutComponent).toBeNull();
        });

        it('should render <continue-shopping>', () => {
          expect(continueShoppingComponent).not.toBeNull();
        });
      });

      describe('and cart is not empty', () => {
        
        beforeEach(() => {
          stubIsCartEmpty = false;
        });

        it('should render .cart-wrapper__summary-title', () => {
          summaryTitleElement = fixture.debugElement.query(By.css('.cart-wrapper__summary-title'));
          
          expect(summaryTitleElement).not.toBeNull();
        });

        it('should render <promotion>', () => {
          promotionComponent = fixture.debugElement.query(By.css('promotion'))

          expect(promotionComponent).not.toBeNull();
        });

        it('should render <cart-totals>', () => {
          cartTotalsComponent = fixture.debugElement.query(By.css('cart-totals'))
          expect(cartTotalsComponent).not.toBeNull();
        });
      
        it('should set cart to value passed by the cart-container directive', () => {
          expect(cartTotalsComponent.componentInstance.cart).toEqual(cart);
        });

        it('should render <proceed-to-checkout>', () => {
          expect(proceedToCheckoutComponent).not.toBeNull();
        });

        it('should render <continue-shopping>', () => {
          expect(continueShoppingComponent).not.toBeNull();
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
