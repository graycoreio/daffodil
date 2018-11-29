import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { DaffodilAddress, DaffodilAddressFactory, PaymentInfo, Cart } from '@daffodil/core';
import { BillingFactory, CartFactory } from '@daffodil/core/testing';
import { ShippingContainer } from '@daffodil/state';

import * as fromFoundationCheckout from '../../reducers/index';
import { ShowPaymentView } from '../../actions/payment.actions';
import { CheckoutViewComponent } from './checkout-view.component';

let daffodilAddressFactory = new DaffodilAddressFactory();
let billingFactory = new BillingFactory();
let cartFactory = new CartFactory();

let stubShippingAddress = daffodilAddressFactory.create();
let stubPaymentInfo: PaymentInfo = billingFactory.create();
let stubBillingAddress: DaffodilAddress = daffodilAddressFactory.create();
let stubCart: Cart;

let stubIsShippingAddressValid = true;
let stubSelectedShippingOptionIndex = 0;
let stubShowPaymentView: boolean = true;
let stubShowReviewView: boolean = true;
let stubIsOrderPlaced: boolean = false;
let stubBillingAddressIsShippingAddress: boolean = false;

@Component({selector: 'shipping', template: ''})
class MockShippingComponent {
  @Input() isShippingAddressValid: boolean;
  @Input() shippingAddress: DaffodilAddress;
  @Input() selectedShippingOptionId: number;
  @Input() showPaymentView: boolean;
  @Output() updateShippingAddress: EventEmitter<any> = new EventEmitter();
  @Output() selectShippingOption: EventEmitter<any> = new EventEmitter();
}

@Component({selector: 'payment', template: ''})
class MockPaymentComponent {
  @Input() paymentInfo: PaymentInfo;
  @Input() billingAddress: DaffodilAddress;
  @Input() billingAddressIsShippingAddress: boolean;
  @Output() updatePaymentInfo: EventEmitter<any> = new EventEmitter();
  @Output() updateBillingAddress: EventEmitter<any> = new EventEmitter();
  @Output() toggleBillingAddressIsShippingAddress: EventEmitter<any> = new EventEmitter();
}

@Component({selector: 'checkout-cart-async-wrapper', template: '<ng-content>', encapsulation: ViewEncapsulation.None})
class MockCheckoutCartAsyncWrapperComponent {
  @Input() cart: Cart;
  @Input() loading: boolean;
  @Input() cartTitle: string;
}

@Component({selector: 'accordion', template: '<ng-content></ng-content>', encapsulation: ViewEncapsulation.None})
class MockAccordionComponent { 
  @Input() title: string;
  @Input() id: string;
}

@Component({selector: 'accordion-item', template: '<ng-content></ng-content>', encapsulation: ViewEncapsulation.None})
class MockAccordionItemComponent {
  @Input() initiallyActive: boolean;
}

@Component({selector: 'place-order', template: ''})
class MockPlaceOrderComponent {}

@Component({selector: '[shipping-container]', template: '<ng-content></ng-content>', exportAs: 'ShippingContainer'})
class MockShippingContainer {
  isShippingAddressValid$: Observable<boolean> = of(stubIsShippingAddressValid);
  shippingAddress$: Observable<DaffodilAddress> = of(stubShippingAddress);
  selectedShippingOptionId$: Observable<number> = of(stubSelectedShippingOptionIndex);
  updateShippingAddress = () => {};
  selectShippingOption = () => {};
}

@Component({selector: '[billing-container]', template: '<ng-content></ng-content>', exportAs: 'BillingContainer'})
class MockBillingContainer {
  paymentInfo$: Observable<PaymentInfo> = of(stubPaymentInfo);
  billingAddress$: Observable<DaffodilAddress> = of(stubBillingAddress);
  billingAddressIsShippingAddress$: Observable<boolean> = of(stubBillingAddressIsShippingAddress);
  updatePaymentInfo = () => {};
  updateBillingAddress = () => {};
  toggleBillingAddressIsShippingAddress = () => {};
}

@Component({selector: '[cart-container]', template: '<ng-content></ng-content>', exportAs: 'CartContainer'})
class MockCartContainer {
  cart$: Observable<Cart>;
  loading$: Observable<boolean> = of(false);
}

@Component({selector: 'thank-you', template: ''})
class MockThankYouComponent {}

@Component({ selector: 'loading-icon', template: ''})
class MockLoadingIconComponent {}

describe('CheckoutViewComponent', () => {
  let component: CheckoutViewComponent;
  let fixture: ComponentFixture<CheckoutViewComponent>;
  let shipping: MockShippingComponent;
  let payment: MockPaymentComponent
  let checkoutCartAsyncWrappers;
  let shippingContainer: ShippingContainer;
  let billingContainer: MockBillingContainer;
  let cartContainer: MockCartContainer;
  let accordionItem: MockAccordionItemComponent;
  let placeOrders;
  let store;
  let stubCart = cartFactory.create();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          foundationCheckout: combineReducers(fromFoundationCheckout.reducers),
        })
      ],
      declarations: [
        CheckoutViewComponent,
        MockAccordionComponent,
        MockAccordionItemComponent,
        MockShippingComponent,
        MockShippingContainer,
        MockCheckoutCartAsyncWrapperComponent,
        MockPaymentComponent,
        MockPlaceOrderComponent,
        MockBillingContainer,
        MockThankYouComponent,
        MockLoadingIconComponent,
        MockCartContainer
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutViewComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(fromFoundationCheckout, 'selectShowPaymentView').and.returnValue(stubShowPaymentView);
    spyOn(fromFoundationCheckout, 'selectShowReviewView').and.returnValue(stubShowReviewView);
    spyOn(fromFoundationCheckout, 'selectIsOrderPlaced').and.returnValue(stubIsOrderPlaced);
    spyOn(store, 'dispatch');
    fixture.detectChanges();

    shipping = fixture.debugElement.query(By.css('shipping')).componentInstance;
    payment = fixture.debugElement.query(By.css('payment')).componentInstance;
    checkoutCartAsyncWrappers = fixture.debugElement.queryAll(By.css('checkout-cart-async-wrapper'));
    shippingContainer = fixture.debugElement.query(By.css('[shipping-container]')).componentInstance;
    billingContainer = fixture.debugElement.query(By.css('[billing-container]')).componentInstance;
    cartContainer = fixture.debugElement.query(By.css('[cart-container]')).componentInstance;
    accordionItem = fixture.debugElement.query(By.css('accordion-item')).componentInstance;
    placeOrders = fixture.debugElement.queryAll(By.css('place-order'));

    cartContainer.cart$ = of(stubCart);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render two place-order buttons', () => {
    expect(placeOrders.length).toEqual(2);
  });
  
  describe('on <shipping>', () => {
  
    it('should set isShippingAddressValid', () => {
      expect(shipping.isShippingAddressValid).toEqual(stubIsShippingAddressValid);
    });

    it('should set shippingAddress', () => {
      expect(shipping.shippingAddress).toEqual(stubShippingAddress);
    });

    it('should set selectedShippingOptionId', () => {
      expect(shipping.selectedShippingOptionId).toEqual(stubSelectedShippingOptionIndex);
    });

    it('should set showPaymentView', () => {
      expect(shipping.showPaymentView).toEqual(stubShowPaymentView);
    });
  });

  describe('when <shipping> emits', () => {
    
    describe('updateShippingAddress', () => {
      
      it('should call function passed by ShippingContainer', () => {
        spyOn(shippingContainer, 'updateShippingAddress');

        shipping.updateShippingAddress.emit(stubShippingAddress);

        expect(shippingContainer.updateShippingAddress).toHaveBeenCalledWith(stubShippingAddress);
      });
      
      it('should dispatch a ShowPaymentView action', () => {
        shipping.updateShippingAddress.emit(stubShippingAddress);
        
        expect(store.dispatch).toHaveBeenCalledWith(new ShowPaymentView());
      });
    });

    describe('selectShippingOption', () => {
      
      it('should call function passed by ShippingContainer', () => {
        spyOn(shippingContainer, 'selectShippingOption');

        shipping.selectShippingOption.emit(stubSelectedShippingOptionIndex);

        expect(shippingContainer.selectShippingOption).toHaveBeenCalledWith(stubSelectedShippingOptionIndex);
      });
    });
  });

  describe('on <payment>', () => {
    
    it('should set paymentInfo', () => {
      expect(payment.paymentInfo).toEqual(stubPaymentInfo);
    });

    it('should set billingAddress', () => {
      expect(payment.billingAddress).toEqual(stubBillingAddress);
    });

    it('should set billingAddressIsShippingAddress', () => {
      expect(payment.billingAddressIsShippingAddress).toEqual(stubBillingAddressIsShippingAddress);
    });
  });

  describe('when payment emits', () => {

    describe('updatePaymentInfo', () => {
      
      it('should call BillingContainer.updatePaymentInfo', () => {
        spyOn(billingContainer, 'updatePaymentInfo');

        payment.updatePaymentInfo.emit(stubPaymentInfo);

        expect(billingContainer.updatePaymentInfo).toHaveBeenCalledWith(stubPaymentInfo);
      });
    });

    describe('updateBillingAddress', () => {
      
      it('should call BillingContainer.updateBillingAddress', () => {
        spyOn(billingContainer, 'updateBillingAddress');

        payment.updateBillingAddress.emit(stubBillingAddress);

        expect(billingContainer.updateBillingAddress).toHaveBeenCalledWith(stubBillingAddress);
      });
    });

    describe('toggleBillingAddressIsShippingAddress', () => {
      
      it('should call BillingContainer.toggleBillingAddressIsShippingAddress', () => {
        spyOn(billingContainer, 'toggleBillingAddressIsShippingAddress');

        payment.toggleBillingAddressIsShippingAddress.emit();

        expect(billingContainer.toggleBillingAddressIsShippingAddress).toHaveBeenCalled();
      });
    });
  });

  describe('on first <checkout-cart-async-wrapper>', () => {
    
    it('should set cart', () => {
      expect(checkoutCartAsyncWrappers[0].componentInstance.cart).toEqual(stubCart);
    });

    it('should set loading', () => {
      expect(checkoutCartAsyncWrappers[0].componentInstance.loading).toEqual(false);
    });

    it('should set cartTitle to CART SUMMARY', () => {
      expect(checkoutCartAsyncWrappers[0].componentInstance.cartTitle).toBeUndefined();
    });
  });

  describe('on second <checkout-cart-async-wrapper>', () => {
    
    it('should set cart', () => {
      expect(checkoutCartAsyncWrappers[1].componentInstance.cart).toEqual(stubCart);
    });

    it('should set loading', () => {
      expect(checkoutCartAsyncWrappers[1].componentInstance.loading).toEqual(false);
    });

    it('should not set cartTitle', () => {
      expect(checkoutCartAsyncWrappers[1].componentInstance.cartTitle).toEqual('Review Order');
    });
  });

  describe('on third <checkout-cart-async-wrapper>', () => {
    
    it('should set cart', () => {
      expect(checkoutCartAsyncWrappers[2].componentInstance.cart).toEqual(stubCart);
    });

    it('should set loading', () => {
      expect(checkoutCartAsyncWrappers[2].componentInstance.loading).toEqual(false);
    });

    it('should set cartTitle to Review Order', () => {
      expect(checkoutCartAsyncWrappers[2].componentInstance.cartTitle).toEqual('CART SUMMARY');
    });
  });

  describe('on <accordion-item>', () => {
    
    it('should set initiallyAction to false', () => {
      expect(accordionItem.initiallyActive).toBeFalsy();
    });

    describe('when cart is empty', () => {
      
      it('should show zero cart items in the accordion title', () => {
        expect(fixture.debugElement.query(By.css('h2')).nativeElement.innerHTML).toEqual('Cart Summary (0)');
      });
    });

    describe('when cart is not empty', () => {
      beforeEach(() => {
        cartContainer.cart$ = of({
          ...stubCart,
          items: [
            ...stubCart.items,
            cartFactory.createCartItem()
          ]
        });
        fixture.detectChanges();
      });
      
      it('should show the number of cart items in the accordion title', () => {
        expect(fixture.debugElement.query(By.css('h2')).nativeElement.innerHTML).toEqual('Cart Summary (1)');
      });
    });
  });
  
  describe('ngOnInit', () => {
    
    it('should initialize showPaymentView$', () => {
      component.showPaymentView$.subscribe((showPaymentView) => {
        expect(showPaymentView).toEqual(stubShowPaymentView);
      });
    });
    
    it('should initialize showReviewView$', () => {
      component.showReviewView$.subscribe((showReviewView) => {
        expect(showReviewView).toEqual(stubShowReviewView);
      });
    });
    
    it('should initialize isOrderPlaced$', () => {
      component.isOrderPlaced$.subscribe((isOrderPlaced) => {
        expect(isOrderPlaced).toEqual(stubIsOrderPlaced);
      });
    });
  });

  describe('when showPaymentView$ is false', () => {
    
    it('should not render checkout__payment', () => {

      component.showPaymentView$ = of(false);
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.checkout__payment'))).toBeNull();
    });
  });

  describe('when showPaymentView$ is true', () => {
    
    it('should render checkout__payment', () => {
      component.showPaymentView$ = of(true);
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.checkout__payment'))).not.toBeNull();
    });
  });

  describe('when showReviewView$ is false', () => {
    
    it('should not render checkout__review', () => {

      component.showReviewView$ = of(false);
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.checkout__review'))).toBeNull();
    });
  });

  describe('when showReviewView$ is true', () => {
    
    it('should render checkout__review', () => {
      component.showReviewView$ = of(true);
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.checkout__review'))).not.toBeNull();
    });
  });

  describe('when isOrderPlaced$ is false', () => {
    
    it('should render checkout__shipping', () => {
      component.isOrderPlaced$ = of(false);
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.checkout__shipping'))).not.toBeNull();
    });

    it('should not render checkout__thank-you', () => {
      component.isOrderPlaced$ = of(false);
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.checkout__thank-you'))).toBeNull();
    });
  });

  describe('when isOrderPlaced$ is true', () => {
    
    it('should not render checkout__shipping', () => {
      component.isOrderPlaced$ = of(true);
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.checkout__shipping'))).toBeNull();
    });

    it('should render checkout__thank-you', () => {
      component.isOrderPlaced$ = of(true);
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.checkout__thank-you'))).not.toBeNull();
    });
  });

  describe('when CartContainer.loading$ is true', () => {

    let checkoutElement;
    let loadingIcon;

    beforeEach(() => {
      cartContainer.loading$ = of(true);
      fixture.detectChanges();

      checkoutElement = fixture.debugElement.query(By.css('.checkout'));
      loadingIcon = fixture.debugElement.query(By.css('.checkout__loading-icon'));
    });
    
    it('should not render checkoutElement', () => {
      expect(checkoutElement).toBeNull();
    });

    it('should render loadingIcon', () => {
      expect(loadingIcon).not.toBeNull();
    });
  });

  describe('when CartContainer.loading$ is false', () => {

    let checkoutElement;
    let loadingIcon;

    beforeEach(() => {
      cartContainer.loading$ = of(false);
      fixture.detectChanges();

      checkoutElement = fixture.debugElement.query(By.css('.checkout'));
      loadingIcon = fixture.debugElement.query(By.css('.checkout__loading-icon'));
    });
    
    it('should render checkout', () => {
      expect(checkoutElement).not.toBeNull();
    });

    it('should not render loadingIcon', () => {
      expect(loadingIcon).toBeNull();
    });
  });
});
