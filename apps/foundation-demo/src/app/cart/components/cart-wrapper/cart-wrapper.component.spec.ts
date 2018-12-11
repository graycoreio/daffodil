import { Component, Input, Directive } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StoreModule, combineReducers, Store } from '@ngrx/store';

import { Cart, DaffCartFactory, fromCart } from '@daffodil/cart';

import { CartWrapperComponent } from './cart-wrapper.component';
import * as cartSelector from '../../selectors/cart-selector';

@Component({template: '<cart-wrapper [cart]="cartValue"></cart-wrapper>'})
class TestCartWrapper {
  cartValue: Cart;
}

@Component({
  selector: 'cart',
  template: ''
})
class CartMock { 
  @Input() cart: Cart;
  @Input() title: string;
}

@Component({
  selector: 'promotion',
  template: ''
})
class PromotionMock {}

@Component({
  selector: 'cart-totals',
  template: ''
})
class CartTotalsMock {
  @Input() cart: Cart;
}

@Component({
  selector: 'help-box',
  template: ''
})
class HelpBoxMock {}

@Directive({
  selector: '[proceed-to-checkout]'
})
class ProceedToCheckoutMock {}

@Directive({
  selector: '[continue-shopping]'
})
class ContinueShoppingMock {}

xdescribe('CartWrapper', () => {
  let component: TestCartWrapper;
  let fixture: ComponentFixture<TestCartWrapper>;
  let cartWrapperComponent: CartWrapperComponent;
  let cartComponent;
  let promotionComponent;
  let cartTotalsComponent;
  let helpBoxComponent;
  let proceedToCheckoutComponent;
  let continueShoppingComponent;
  let cartFactory = new DaffCartFactory();
  let cart = cartFactory.create();
  let store;
  let stubIsCartEmpty: boolean = true;
  let stubCartHasOneItem: boolean = false;
  let stubSelectCartItemCount: number = 0;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          carts: combineReducers(fromCart.reducers),
        })
      ],
      declarations: [ 
        TestCartWrapper,
        CartMock,
        CartTotalsMock,
        HelpBoxMock,
        ProceedToCheckoutMock,
        ContinueShoppingMock,
        PromotionMock,
        CartWrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCartWrapper);
    component = fixture.componentInstance;
    component.cartValue = cart;
    cartWrapperComponent = fixture.debugElement.query(By.css('cart-wrapper')).componentInstance;
    store = TestBed.get(Store);

    spyOn(cartSelector, 'isCartEmpty').and.returnValue(stubIsCartEmpty);
    spyOn(cartSelector, 'cartHasOneItem').and.returnValue(stubCartHasOneItem);
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
        let summaryTitleElement = fixture.debugElement.query(By.css('.cart-wrapper__summary-title'));

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
        let summaryTitleElement = fixture.debugElement.query(By.css('.cart-wrapper__summary-title'));
        
        expect(summaryTitleElement).not.toBeNull();
      });

      it('should render <promotion>', () => {
        let promotionComponent = fixture.debugElement.query(By.css('promotion'))

        expect(promotionComponent).not.toBeNull();
      });

      it('should render <cart-totals>', () => {
        let cartTotalsComponent = fixture.debugElement.query(By.css('cart-totals'))
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

  describe('cartHasOneItem$', () => {

    it('returns cartSelector.cartHasOneItem', () => {
      cartWrapperComponent.cartHasOneItem$.subscribe(cartHasOneItem => {
        expect(cartHasOneItem).toEqual(stubCartHasOneItem);
      })
    });
  });

  describe('itemText$', () => {

    describe('when cartSelector.cartHasOneItem is true', () => {

      beforeEach(() => {
        stubCartHasOneItem = true;
      });
      
      it('returns "Item"', () => {
        cartWrapperComponent.itemText$.subscribe(itemText => {
          expect(itemText).toEqual('Item');
        });
      });
    });

    describe('when cartSelector.cartHasOneItem$ is of(false)', () => {

      beforeEach(() => {
        stubCartHasOneItem = false;
      });
      
      it('returns "Items"', () => {
        cartWrapperComponent.itemText$.subscribe(itemText => {
          expect(itemText).toEqual('Items');
        });
      });
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
