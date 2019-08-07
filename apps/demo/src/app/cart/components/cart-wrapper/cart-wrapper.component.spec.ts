import { Component, Input, Directive } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StoreModule, combineReducers, MemoizedSelector, Store } from '@ngrx/store';

import { DaffCartFactory } from '@daffodil/cart/testing';
import { fromCart, DaffCart } from '@daffodil/cart';

import { CartWrapperComponent } from './cart-wrapper.component';
import * as cartSelector from '../../selectors/cart-selector';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';

@Component({ template: '<demo-cart-wrapper [cart]="cartValue"></demo-cart-wrapper>' })
class WrapperComponent {
  cartValue: DaffCart;
}

@Component({
  selector: 'demo-cart',
  template: ''
})
class MockCartComponent {
  @Input() cart: DaffCart;
  @Input() title: string;
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

describe('CartWrapper', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let cartWrapperComponent: CartWrapperComponent;
  let cartComponent;
  let cartTotalsComponent;
  let helpBoxComponent;
  let proceedToCheckoutDirective;
  let store: MockStore<any>;
  const cartFactory = new DaffCartFactory();
  const cart = cartFactory.create();
  let stubIsCartEmpty = true;
  let stubSelectCartItemCount: number = 0;
  let cartItemCountSelector: MemoizedSelector<object, number>;
  let cartEmptySelector: MemoizedSelector<object, boolean>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        MockCartComponent,
        MockCartTotalsComponent,
        MockHelpBoxComponent,
        MockProceedToCheckoutDirective,
        CartWrapperComponent
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
    cartWrapperComponent = fixture.debugElement.query(By.css('demo-cart-wrapper')).componentInstance;

    cartItemCountSelector = store.overrideSelector(cartSelector.selectCartItemCount, stubSelectCartItemCount);
    cartEmptySelector = store.overrideSelector(cartSelector.isCartEmpty, stubIsCartEmpty);

    cartComponent = fixture.debugElement.query(By.css('demo-cart'));
    helpBoxComponent = fixture.debugElement.query(By.css('demo-help-box'));

    fixture.detectChanges();
  });

  afterAll(() => {
    store.resetSelectors();
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

  describe('the item count message', () => {
    let itemCountElement;

    beforeEach(() => {
      itemCountElement = fixture.debugElement.query(By.css('.cart-wrapper__item-count'));
    })

    describe('when cartItem count is 1', () => {
      it('should set item count text to "Item"', () => {
        stubSelectCartItemCount = 1;
        cartItemCountSelector.setResult(stubSelectCartItemCount);
        store.setState({});
        fixture.detectChanges();
        expect(itemCountElement.nativeElement.innerText).toEqual('1 Item');
      });
    });

    describe('when cartItem count is not 1', () => {
      it('should set item count text to "Items"', () => {
        stubSelectCartItemCount = 24;
        cartItemCountSelector.setResult(stubSelectCartItemCount);
        store.setState({});

        fixture.detectChanges();

        expect(itemCountElement.nativeElement.innerText).toEqual(stubSelectCartItemCount + ' Items');
      });
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
        cartEmptySelector.setResult(true);
        store.setState({});
        fixture.detectChanges();
      });

      it('should not render .cart-wrapper__summary-title', () => {
        const summaryTitleElement = fixture.debugElement.query(By.css('.cart-wrapper__summary-title'));

        expect(summaryTitleElement).toBeNull();
      });

      it('should not render <demo-cart-totals>', () => {
        cartTotalsComponent = fixture.debugElement.query(By.css('demo-cart-totals'));
        expect(cartTotalsComponent).toBeNull();
      });

      it('should not render [demoProceedToCheckout]', () => {
        proceedToCheckoutDirective = fixture.debugElement.query(By.css('[demoProceedToCheckout]'));
        expect(proceedToCheckoutDirective).toBeNull();
      });
    });

    describe('and cart is not empty', () => {

      beforeEach(() => {
        cartEmptySelector.setResult(false);
        store.setState({});
        fixture.detectChanges();
        cartTotalsComponent = fixture.debugElement.query(By.css('demo-cart-totals'));
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
        proceedToCheckoutDirective = fixture.debugElement.query(By.css('[demoProceedToCheckout]'));
        expect(proceedToCheckoutDirective).not.toBeNull();
      });
    });
  });

  describe('isCartEmpty$', () => {
    it('returns cartSelector.isCartEmpty', () => {
      const expected = cold('(a)', { a: stubIsCartEmpty });
      expect(cartWrapperComponent.isCartEmpty$).toBeObservable(expected);
    });
  });

  describe('itemCount$', () => {
    it('returns cartSelector.itemCount', () => {
      const expected = cold('(a)', { a: stubSelectCartItemCount });
      expect(cartWrapperComponent.itemCount$).toBeObservable(expected);
    });
  });
});
