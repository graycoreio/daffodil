import { Component, Input, Directive, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StoreModule, combineReducers, MemoizedSelector, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffCart } from '@daffodil/cart';

import { CartSidebarComponent } from './cart-sidebar.component'
import * as cartSelector from '../../selectors/cart-selector';

@Component({ template: '<demo-cart-sidebar [cart]="cartValue"></demo-cart-sidebar>' })
class WrapperComponent {
  cartValue: DaffCart;
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

  let store: MockStore<any>;
  let cartEmptySelector: MemoizedSelector<object, boolean>;

  const cartFactory = new DaffCartFactory();
  const cart = cartFactory.create();
  const stubIsCartEmpty = true;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        MockCartTotalsComponent,
        MockHelpBoxComponent,
        MockProceedToCheckoutDirective,
        CartSidebarComponent
      ],
      providers: [
        provideMockStore({})
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    store = TestBed.get(Store);
    wrapper.cartValue = cart;

    component = fixture.debugElement.query(By.css('demo-cart-sidebar')).componentInstance;

    cartEmptySelector = store.overrideSelector(cartSelector.isCartEmpty, stubIsCartEmpty);

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
        cartEmptySelector.setResult(true);
        store.setState({});
        fixture.detectChanges();

        summaryElement = fixture.debugElement.query(By.css('.demo-cart-sidebar__summary'));
      });

      it('should not render <cart-sidebar__summary>', () => {
        expect(summaryElement).toBeNull();
      });
    });

    describe('when cart is not empty', () => {
      beforeEach(() => {
        cartEmptySelector.setResult(false);
        store.setState({});
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

      it('should render <cart-sidebar__summary>', () => {
        expect(summaryElement).not.toBeNull();
      });
    });
});
