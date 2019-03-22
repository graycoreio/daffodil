import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { DaffodilAddress } from '@daffodil/core';
import { DaffAddressFactory } from '@daffodil/core/testing';
import { Cart } from '@daffodil/cart';
import { DaffCartFactory, DaffCartItemFactory } from '@daffodil/cart/testing';
import { ShippingContainer, PaymentInfo } from '@daffodil/checkout';
import { DaffPaymentFactory } from '@daffodil/checkout/testing';
import { 
  DaffAccordionModule, 
  DaffAccordionItemComponent, 
  DaffContainerModule, 
  DaffLoadingIconModule 
} from '@daffodil/design';

import * as fromDemoCheckout from '../../reducers/index';
import { ShowPaymentView } from '../../actions/payment.actions';
import { CheckoutViewComponent } from './checkout-view.component';

const daffodilAddressFactory = new DaffAddressFactory();
const paymentFactory = new DaffPaymentFactory();
const cartFactory = new DaffCartFactory();
const cartItemFactory = new DaffCartItemFactory();

const stubShippingAddress = daffodilAddressFactory.create();
const stubPaymentInfo: PaymentInfo = paymentFactory.create();
const stubBillingAddress: DaffodilAddress = daffodilAddressFactory.create();
let stubCart: Cart;

const stubIsShippingAddressValid = true;
const stubSelectedShippingOptionIndex = 0;
const stubShowPaymentView = true;
const stubShowReviewView = true;
const stubBillingAddressIsShippingAddress = false;

@Component({selector: 'demo-shipping', template: ''})
class MockShippingComponent {
  @Input() isShippingAddressValid: boolean;
  @Input() shippingAddress: DaffodilAddress;
  @Input() selectedShippingOptionId: number;
  @Input() showPaymentView: boolean;
  @Output() updateShippingAddress: EventEmitter<any> = new EventEmitter();
  @Output() selectShippingOption: EventEmitter<any> = new EventEmitter();
}

@Component({selector: 'demo-payment', template: ''})
class MockPaymentComponent {
  @Input() paymentInfo: PaymentInfo;
  @Input() billingAddress: DaffodilAddress;
  @Input() billingAddressIsShippingAddress: boolean;
  @Output() updatePaymentInfo: EventEmitter<any> = new EventEmitter();
  @Output() updateBillingAddress: EventEmitter<any> = new EventEmitter();
  @Output() toggleBillingAddressIsShippingAddress: EventEmitter<any> = new EventEmitter();
}

@Component({selector: 'demo-cart-summary-wrapper', template: '<ng-content>', encapsulation: ViewEncapsulation.None})
class MockCartSummaryWrapperComponent {
  @Input() cart: Cart;
  @Input() loading: boolean;
  @Input() cartTitle: string;
}

@Component({selector: 'demo-place-order', template: ''})
class MockPlaceOrderComponent {
  @Input() cart: Cart;
}

// tslint:disable-next-line: component-selector
@Component({selector: '[shipping-container]', template: '<ng-content></ng-content>', exportAs: 'ShippingContainer'})
class MockShippingContainer {
  isShippingAddressValid$: Observable<boolean> = of(stubIsShippingAddressValid);
  shippingAddress$: Observable<DaffodilAddress> = of(stubShippingAddress);
  selectedShippingOptionId$: Observable<number> = of(stubSelectedShippingOptionIndex);
  updateShippingAddress = () => {};
  selectShippingOption = () => {};
}

// tslint:disable-next-line: component-selector
@Component({selector: '[billing-container]', template: '<ng-content></ng-content>', exportAs: 'BillingContainer'})
class MockBillingContainer {
  paymentInfo$: Observable<PaymentInfo> = of(stubPaymentInfo);
  billingAddress$: Observable<DaffodilAddress> = of(stubBillingAddress);
  billingAddressIsShippingAddress$: Observable<boolean> = of(stubBillingAddressIsShippingAddress);
  updatePaymentInfo = () => {};
  updateBillingAddress = () => {};
  toggleBillingAddressIsShippingAddress = () => {};
}

// tslint:disable-next-line: component-selector
@Component({selector: '[cart-container]', template: '<ng-content></ng-content>', exportAs: 'CartContainer'})
class MockCartContainer {
  cart$: Observable<Cart>;
  loading$: Observable<boolean> = of(false);
}

describe('CheckoutViewComponent', () => {
  let component: CheckoutViewComponent;
  let fixture: ComponentFixture<CheckoutViewComponent>;
  let shipping: MockShippingComponent;
  let payment: MockPaymentComponent
  let cartSummaryWrappers;
  let shippingContainer: ShippingContainer;
  let billingContainer: MockBillingContainer;
  let cartContainer: MockCartContainer;
  let accordionItem: DaffAccordionItemComponent;
  let placeOrders;
  let store;
  stubCart = cartFactory.create();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          demoCheckout: combineReducers(fromDemoCheckout.reducers),
        }),
        DaffAccordionModule,
        NoopAnimationsModule,
        DaffContainerModule,
        DaffLoadingIconModule
      ],
      declarations: [
        CheckoutViewComponent,
        MockShippingComponent,
        MockShippingContainer,
        MockCartSummaryWrapperComponent,
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
    spyOn(fromDemoCheckout, 'selectShowPaymentView').and.returnValue(stubShowPaymentView);
    spyOn(fromDemoCheckout, 'selectShowReviewView').and.returnValue(stubShowReviewView);
    spyOn(store, 'dispatch');
    fixture.detectChanges();

    shipping = fixture.debugElement.query(By.css('demo-shipping')).componentInstance;
    payment = fixture.debugElement.query(By.css('demo-payment')).componentInstance;
    cartSummaryWrappers = fixture.debugElement.queryAll(By.css('demo-cart-summary-wrapper'));
    shippingContainer = fixture.debugElement.query(By.css('[shipping-container]')).componentInstance;
    billingContainer = fixture.debugElement.query(By.css('[billing-container]')).componentInstance;
    cartContainer = fixture.debugElement.query(By.css('[cart-container]')).componentInstance;
    accordionItem = fixture.debugElement.query(By.css('daff-accordion-item')).componentInstance;
    placeOrders = fixture.debugElement.queryAll(By.css('demo-place-order'));

    cartContainer.cart$ = of(stubCart);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render two place-order buttons', () => {
    expect(placeOrders.length).toEqual(2);
  });
  
  describe('on <demo-shipping>', () => {
  
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

  describe('when <demo-shipping> emits', () => {
    
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

  describe('on <demo-payment>', () => {
    
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

  describe('on first <demo-cart-summary-wrapper>', () => {
    it('should set cart', () => {
      expect(cartSummaryWrappers[0].componentInstance.cart).toEqual(stubCart);
    });

    it('should set loading', () => {
      expect(cartSummaryWrappers[0].componentInstance.loading).toEqual(false);
    });

    it('should not set cartTitle', () => {
      expect(cartSummaryWrappers[0].componentInstance.cartTitle).toBeUndefined();
    });
  });

  describe('on second <demo-cart-summary-wrapper>', () => {
    
    it('should set cart', () => {
      expect(cartSummaryWrappers[1].componentInstance.cart).toEqual(stubCart);
    });

    it('should set loading', () => {
      expect(cartSummaryWrappers[1].componentInstance.loading).toEqual(false);
    });

    it('should set cartTitle to REVIEW ORDER', () => {
      expect(cartSummaryWrappers[1].componentInstance.cartTitle).toEqual('REVIEW ORDER');
    });
  });

  describe('on third <demo-cart-summary-wrapper>', () => {
    
    it('should set cart', () => {
      expect(cartSummaryWrappers[2].componentInstance.cart).toEqual(stubCart);
    });

    it('should set loading', () => {
      expect(cartSummaryWrappers[2].componentInstance.loading).toEqual(false);
    });

    it('should set cartTitle to CART SUMMARY', () => {
      expect(cartSummaryWrappers[2].componentInstance.cartTitle).toEqual('CART SUMMARY');
    });
  });

  describe('on <daff-accordion-item>', () => {
    
    it('should set initiallyAction to false', () => {
      expect(accordionItem.initiallyActive).toBeFalsy();
    });

    describe('when cart is null', () => {
      beforeEach(() => {
        cartContainer.cart$ = of(null);
 
        fixture.detectChanges();
      });
      
      it('should show zero cart items in the accordion title', () => {
        expect(fixture.debugElement.query(By.css('[daffAccordionItemTitle]')).nativeElement.innerHTML).toEqual('Cart Summary (0)');
      });
    });

    describe('when cart is not null', () => {
      beforeEach(() => {
        cartContainer.cart$ = of({
          ...stubCart,
          items: [
            ...stubCart.items,
            cartItemFactory.create()
          ]
        });
        fixture.detectChanges();
      });
      
      it('should show the number of cart items in the accordion title', () => {
        expect(fixture.debugElement.query(By.css('[daffAccordionItemTitle]')).nativeElement.innerHTML).toEqual('Cart Summary (1)');
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
