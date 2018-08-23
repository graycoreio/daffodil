import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

import { DaffodilAddress, DaffodilAddressFactory, PaymentInfo, Cart } from '@daffodil/core';

import { ShippingFactory, BillingFactory, CartFactory } from '@daffodil/core/testing';

import { ShippingContainer } from '@daffodil/state';

import { ShowPaymentView } from '../../actions/payment.actions';
import * as fromFoundationCheckout from '../../reducers/index';
import { CheckoutViewComponent } from './checkout-view.component';

let daffodilAddressFactory = new DaffodilAddressFactory();
let billingFactory = new BillingFactory();
let cartFactory = new CartFactory();

let stubShippingInfo = daffodilAddressFactory.create();
let stubPaymentInfo: PaymentInfo = billingFactory.create();
let stubBillingAddress: DaffodilAddress = daffodilAddressFactory.create();
let stubCart: Cart = cartFactory.create();

let stubIsShippingInfoValid = true;
let stubSelectedShippingOptionIndex = 0;
let stubShowPaymentView: boolean = true;
let stubShowReviewView: boolean = true;
let stubBillingAddressIsShippingAddress: boolean = false;

@Component({selector: 'shipping', template: ''})
class MockShippingComponent {
  @Input() isShippingInfoValid: boolean;
  @Input() shippingInfo: DaffodilAddress;
  @Input() selectedShippingOptionIndex: number;
  @Input() showPaymentView: boolean;
  @Output() updateShippingInfo: EventEmitter<any> = new EventEmitter();
  @Output() selectShippingOption: EventEmitter<any> = new EventEmitter();
  @Output() continueToPayment: EventEmitter<any> = new EventEmitter();
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
  isShippingInfoValid$: Observable<boolean> = of(stubIsShippingInfoValid);
  shippingInfo$: Observable<DaffodilAddress> = of(stubShippingInfo);
  selectedShippingOptionIndex$: Observable<number> = of(stubSelectedShippingOptionIndex);
  updateShippingInfo = () => {};
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
  cart$: Observable<Cart> = of(stubCart);
  loading$: Observable<boolean> = of(false);
}

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render two place-order buttons', () => {
    expect(placeOrders.length).toEqual(2);
  });
  
  describe('on <shipping>', () => {
  
    it('should set isShippingInfoValid', () => {
      expect(shipping.isShippingInfoValid).toEqual(stubIsShippingInfoValid);
    });

    it('should set shippingInfo', () => {
      expect(shipping.shippingInfo).toEqual(stubShippingInfo);
    });

    it('should set selectedShippingOptionIndex', () => {
      expect(shipping.selectedShippingOptionIndex).toEqual(stubSelectedShippingOptionIndex);
    });

    it('should set showPaymentView', () => {
      expect(shipping.showPaymentView).toEqual(stubShowPaymentView);
    });
  });

  describe('when <shipping> emits', () => {
    
    describe('updateShippingInfo', () => {
      
      it('should call function passed by ShippingContainer', () => {
        spyOn(shippingContainer, 'updateShippingInfo');

        shipping.updateShippingInfo.emit(stubShippingInfo);

        expect(shippingContainer.updateShippingInfo).toHaveBeenCalledWith(stubShippingInfo);
      });
    });

    describe('selectShippingOption', () => {
      
      it('should call function passed by ShippingContainer', () => {
        spyOn(shippingContainer, 'selectShippingOption');

        shipping.selectShippingOption.emit(stubSelectedShippingOptionIndex);

        expect(shippingContainer.selectShippingOption).toHaveBeenCalledWith(stubSelectedShippingOptionIndex);
      });
    });

    describe('continueToPayment', () => {
      
      it('should call onContinueToPayment', () => {
        spyOn(component, 'onContinueToPayment');
  
        shipping.continueToPayment.emit();
  
        expect(component.onContinueToPayment).toHaveBeenCalled();
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
      expect(checkoutCartAsyncWrappers[0].componentInstance.cartTitle).toEqual('CART SUMMARY');
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
      expect(checkoutCartAsyncWrappers[1].componentInstance.cartTitle).toBeUndefined();;
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
      expect(checkoutCartAsyncWrappers[2].componentInstance.cartTitle).toEqual('Review Order');;
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
        stubCart.items.push(cartFactory.createCartItem());
        cartContainer.cart$ = of(stubCart);
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
  });

  describe('onContinueToPayment', () => {
    
    it('should dispatch a ShowPaymentView action', () => {
      component.onContinueToPayment();

      expect(store.dispatch).toHaveBeenCalledWith(new ShowPaymentView());
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

  describe('when CartContainer.loading$ is true', () => {

    let shippingElement;
    let cartElement;
    let loadingIcon;

    beforeEach(() => {
      cartContainer.loading$ = of(true);
      fixture.detectChanges();
      shippingElement = fixture.debugElement.query(By.css('.checkout__shipping'));
      cartElement = fixture.debugElement.query(By.css('.checkout__cart'));
      loadingIcon = fixture.debugElement.query(By.css('.checkout__loading-icon'));
    });
    
    it('should not render shippingElement', () => {
      expect(shippingElement).toBeNull();
    });
    
    it('should not render cartElement', () => {
      expect(cartElement).toBeNull();
    });

    it('should render loadingIcon', () => {
      expect(loadingIcon).not.toBeNull();
    });
  });

  describe('when CartContainer.loading$ is false', () => {

    let shippingElement;
    let cartElement;
    let loadingIcon;

    beforeEach(() => {
      cartContainer.loading$ = of(false);
      fixture.detectChanges();
      shippingElement = fixture.debugElement.query(By.css('.checkout__shipping'));
      cartElement = fixture.debugElement.query(By.css('.checkout__cart'));
      loadingIcon = fixture.debugElement.query(By.css('.checkout__loading-icon'));
    });
    
    it('should render shippingElement', () => {
      expect(shippingElement).not.toBeNull();
    });
    
    it('should render cartElement', () => {
      expect(cartElement).not.toBeNull();
    });

    it('should not render loadingIcon', () => {
      expect(loadingIcon).toBeNull();
    });
  });
});
