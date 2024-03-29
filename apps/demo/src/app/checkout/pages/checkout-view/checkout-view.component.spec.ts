import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  provideMockStore,
  MockStore,
} from '@ngrx/store/testing';
import {
  Observable,
  of,
  BehaviorSubject,
} from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import {
  DaffCartStateTestingModule,
  MockDaffCartFacade,
} from '@daffodil/cart/state/testing';
import {
  DaffCartFactory,
  DaffCartItemFactory,
} from '@daffodil/cart/testing';
import {
  ShippingContainer,
  PaymentInfo,
} from '@daffodil/checkout';
import { DaffPaymentFactory } from '@daffodil/checkout/testing';
import { DaffAddress } from '@daffodil/core';
import { DaffAddressFactory } from '@daffodil/core/testing';
import {
  DaffAccordionModule,
  DaffAccordionItemComponent,
} from '@daffodil/design/accordion';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffLoadingIconModule } from '@daffodil/design/loading-icon';

import { CheckoutViewComponent } from './checkout-view.component';
import { ShowPaymentView } from '../../actions/payment.actions';
import * as fromDemoCheckout from '../../reducers/index';

let stubShippingAddress;
let stubPaymentInfo: PaymentInfo;
let stubBillingAddress: DaffAddress;
const stubIsShippingAddressValid = true;
const stubSelectedShippingOptionIndex = 0;
const stubShowPaymentView = true;
const stubShowReviewView = true;
const stubBillingAddressIsShippingAddress = false;

@Component({ selector: 'demo-shipping', template: '' })
class MockShippingComponent {
  @Input() isShippingAddressValid: boolean;
  @Input() shippingAddress: DaffAddress;
  @Input() selectedShippingOptionId: number;
  @Input() showPaymentView: boolean;
  @Output() updateShippingAddress: EventEmitter<any> = new EventEmitter();
  @Output() selectShippingOption: EventEmitter<any> = new EventEmitter();
}

@Component({ selector: 'demo-payment', template: '' })
class MockPaymentComponent {
  @Input() paymentInfo: PaymentInfo;
  @Input() billingAddress: DaffAddress;
  @Input() billingAddressIsShippingAddress: boolean;
  @Output() updatePaymentInfo: EventEmitter<any> = new EventEmitter();
  @Output() updateBillingAddress: EventEmitter<any> = new EventEmitter();
  @Output() toggleBillingAddressIsShippingAddress: EventEmitter<any> = new EventEmitter();
}

@Component({ selector: 'demo-cart-summary-wrapper', template: '<ng-content>', encapsulation: ViewEncapsulation.None })
class MockCartSummaryWrapperComponent {
  @Input() cart: DaffCart;
  @Input() loading: boolean;
  @Input() cartTitle: string;
}

@Component({ selector: 'demo-place-order', template: '' })
class MockPlaceOrderComponent {
  @Input() cart: DaffCart;
}

// eslint-disable-next-line @angular-eslint/component-selector
@Component({ selector: '[shipping-container]', template: '<ng-content></ng-content>', exportAs: 'ShippingContainer' })
class MockShippingContainer {
  isShippingAddressValid$: Observable<boolean> = of(stubIsShippingAddressValid);
  shippingAddress$: Observable<DaffAddress> = of(stubShippingAddress);
  selectedShippingOptionId$: Observable<number> = of(stubSelectedShippingOptionIndex);
  updateShippingAddress = () => {};
  selectShippingOption = () => {};
}

// eslint-disable-next-line @angular-eslint/component-selector
@Component({ selector: '[billing-container]', template: '<ng-content></ng-content>', exportAs: 'BillingContainer' })
class MockBillingContainer {
  paymentInfo$: Observable<PaymentInfo> = of(stubPaymentInfo);
  billingAddress$: Observable<DaffAddress> = of(stubBillingAddress);
  billingAddressIsShippingAddress$: Observable<boolean> = of(stubBillingAddressIsShippingAddress);
  updatePaymentInfo = (e) => {};
  updateBillingAddress = (e) => {};
  toggleBillingAddressIsShippingAddress = () => {};
}

describe('CheckoutViewComponent', () => {
  let component: CheckoutViewComponent;
  let fixture: ComponentFixture<CheckoutViewComponent>;
  let shipping: MockShippingComponent;
  let payment: MockPaymentComponent;
  let cartSummaryWrappers;
  let shippingContainer: ShippingContainer;
  let billingContainer: MockBillingContainer;
  let accordionItem: DaffAccordionItemComponent;
  let placeOrders;
  let store: MockStore<any>;
  let addressFactory: DaffAddressFactory;
  let paymentFactory: DaffPaymentFactory;
  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;

  let stubCart: DaffCart;
  let cartFacade: MockDaffCartFacade;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffAccordionModule,
        NoopAnimationsModule,
        DaffContainerModule,
        DaffLoadingIconModule,
        DaffCartStateTestingModule,
      ],
      declarations: [
        CheckoutViewComponent,
        MockShippingComponent,
        MockShippingContainer,
        MockCartSummaryWrapperComponent,
        MockPaymentComponent,
        MockPlaceOrderComponent,
        MockBillingContainer,
      ],
      providers: [
        provideMockStore({}),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    cartFacade = TestBed.inject(MockDaffCartFacade);
    addressFactory = TestBed.inject(DaffAddressFactory);
    paymentFactory = TestBed.inject(DaffPaymentFactory);
    cartFactory = TestBed.inject(DaffCartFactory);
    cartItemFactory = TestBed.inject(DaffCartItemFactory);

    stubShippingAddress = addressFactory.create();
    stubBillingAddress = addressFactory.create();
    stubPaymentInfo = paymentFactory.create();
    stubCart = cartFactory.create();
    cartFacade.cart$ = new BehaviorSubject(stubCart);
    cartFacade.loading$ = new BehaviorSubject(false);

    store.overrideSelector(fromDemoCheckout.selectShowPaymentView, stubShowPaymentView);
    store.overrideSelector(fromDemoCheckout.selectShowReviewView, stubShowReviewView);
    spyOn(store, 'dispatch');

    fixture = TestBed.createComponent(CheckoutViewComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    shipping = fixture.debugElement.query(By.css('demo-shipping')).componentInstance;
    payment = fixture.debugElement.query(By.css('demo-payment')).componentInstance;
    cartSummaryWrappers = fixture.debugElement.queryAll(By.css('demo-cart-summary-wrapper'));
    shippingContainer = fixture.debugElement.query(By.css('[shipping-container]')).componentInstance;
    billingContainer = fixture.debugElement.query(By.css('[billing-container]')).componentInstance;
    accordionItem = fixture.debugElement.query(By.css('daff-accordion-item')).componentInstance;
    placeOrders = fixture.debugElement.queryAll(By.css('demo-place-order'));

    fixture.detectChanges();
  });

  afterAll(() => {
    store.resetSelectors();
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

        shipping.selectShippingOption.emit(String(stubSelectedShippingOptionIndex));

        expect(shippingContainer.selectShippingOption).toHaveBeenCalledWith(String(stubSelectedShippingOptionIndex));
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
        cartFacade.cart$.next(null);

        fixture.detectChanges();
      });

      it('should show zero cart items in the accordion title', () => {
        expect(fixture.debugElement.query(By.css('[daffAccordionItemTitle]')).nativeElement.innerHTML).toEqual('Cart Summary (0)');
      });
    });

    describe('when cart is not null', () => {
      beforeEach(() => {
        cartFacade.cart$.next({
          ...stubCart,
          items: [
            ...stubCart.items,
            cartItemFactory.create(),
          ],
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

    it('should not render .demo-checkout__payment', () => {

      component.showPaymentView$ = of(false);
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.demo-checkout__payment'))).toBeNull();
    });
  });

  describe('when showPaymentView$ is true', () => {

    it('should render .demo-checkout__payment', () => {
      component.showPaymentView$ = of(true);
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.demo-checkout__payment'))).not.toBeNull();
    });
  });

  describe('when showReviewView$ is false', () => {

    it('should not render .demo-checkout__review', () => {

      component.showReviewView$ = of(false);
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.demo-checkout__review'))).toBeNull();
    });
  });

  describe('when showReviewView$ is true', () => {

    it('should render .demo-checkout__review', () => {
      component.showReviewView$ = of(true);
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.demo-checkout__review'))).not.toBeNull();
    });
  });

  describe('when the cart is loading', () => {

    let checkoutElement;
    let loadingIcon;

    beforeEach(() => {
      cartFacade.loading$.next(true);
      fixture.detectChanges();

      checkoutElement = fixture.debugElement.query(By.css('.demo-checkout'));
      loadingIcon = fixture.debugElement.query(By.css('.demo-checkout__loading-icon'));
    });

    it('should not render checkoutElement', () => {
      expect(checkoutElement).toBeNull();
    });

    it('should render loadingIcon', () => {
      expect(loadingIcon).not.toBeNull();
    });
  });

  describe('when the cart is not loading', () => {

    let checkoutElement;
    let loadingIcon;

    beforeEach(() => {
      cartFacade.loading$.next(false);
      fixture.detectChanges();

      checkoutElement = fixture.debugElement.query(By.css('.demo-checkout'));
      loadingIcon = fixture.debugElement.query(By.css('.demo-checkout__loading-icon'));
    });

    it('should render checkout', () => {
      expect(checkoutElement).not.toBeNull();
    });

    it('should not render loadingIcon', () => {
      expect(loadingIcon).toBeNull();
    });
  });
});
