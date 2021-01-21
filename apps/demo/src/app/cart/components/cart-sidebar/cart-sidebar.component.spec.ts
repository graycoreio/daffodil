import { Component, Input, Directive, DebugElement } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffCart } from '@daffodil/cart';

import { CartSidebarComponent } from './cart-sidebar.component'

@Component({ template: '<demo-cart-sidebar [cart]="cartValue" [isCartEmpty]="isCartEmptyValue"></demo-cart-sidebar>' })
class WrapperComponent {
  cartValue: DaffCart;
  isCartEmptyValue: boolean;
}

@Component({
  selector: 'demo-cart-totals',
  template: ''
})
class MockCartTotalsComponent {
  @Input() cart: DaffCart;
}

@Component({
  selector: 'demo-help-box',
  template: ''
})
class MockHelpBoxComponent { }

@Directive({
  selector: '[demoProceedToCheckout]'
})
class MockProceedToCheckoutDirective { }

describe('CartSidebar', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: CartSidebarComponent;

  let cartTotalsElement: DebugElement;
  let cartTotalsComponent: MockCartTotalsComponent;

  let summaryElement: DebugElement;

  const cartFactory = new DaffCartFactory();
  const cart = cartFactory.create();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        MockCartTotalsComponent,
        MockHelpBoxComponent,
        MockProceedToCheckoutDirective,
        CartSidebarComponent
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.cartValue = cart;

    component = fixture.debugElement.query(By.css('demo-cart-sidebar')).componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take cart as input', () => {
    expect(component.cart).toEqual(cart);
  });

  describe('when cart is empty', () => {
      beforeEach(() => {
        wrapper.isCartEmptyValue = true
        fixture.detectChanges();

        summaryElement = fixture.debugElement.query(By.css('.demo-cart-sidebar__summary'));
      });

      it('should not render .cart-sidebar__summary', () => {
        expect(summaryElement).toBeNull();
      });
    });

    describe('when cart is not empty', () => {
      beforeEach(() => {
        wrapper.isCartEmptyValue = false
        fixture.detectChanges();

        summaryElement = fixture.debugElement.query(By.css('.demo-cart-sidebar__summary'));

        cartTotalsElement = fixture.debugElement.query(By.css('demo-cart-totals'));
        cartTotalsComponent = cartTotalsElement.componentInstance;
      });

      describe('on <demo-cart-totals>', () => {
        it('should pass down the cart', () => {
          expect(cartTotalsComponent.cart).toEqual(cart);
        });
      });

      it('should render .cart-sidebar__summary', () => {
        expect(summaryElement).not.toBeNull();
      });
    });
});
