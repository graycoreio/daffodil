import { DebugElement } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { DAFF_AUTHORIZENET_PAYMENT_KIND } from '@daffodil/authorizenet';
import { DaffAuthorizeNetCreditCardFactory } from '@daffodil/authorizenet/testing';
import {
  DaffCart,
  DaffCartPaymentMethod,
  DaffCartShippingRate,
} from '@daffodil/cart';
import {
  DaffCartStateTestingModule,
  MockDaffCartFacade,
} from '@daffodil/cart/state/testing';
import {
  DaffCartAddressFactory,
  DaffCartFactory,
  DaffCartItemFactory,
  DaffCartPaymentFactory,
  DaffCartShippingRateFactory,
} from '@daffodil/cart/testing';
import { DaffAccordionItemComponent } from '@daffodil/design/accordion';
import { DaffPersonalAddress } from '@daffodil/geography';
import { DaffGeographyTestingDriverModule } from '@daffodil/geography/driver/testing';

import { DemoCheckoutViewComponent } from './checkout-view.component';
import { CartSummaryWrapperComponent } from '../../../cart/components/cart-summary-wrapper/cart-summary-wrapper.component';
import {
  DemoCompleteAddressStep,
  DemoCompleteBillingStep,
  DemoCompleteShippingStep,
} from '../../actions/checkout-step.actions';
import { DemoCheckoutAddressForm } from '../../components/forms/address/models/address-form.type';
import { DemoCheckoutBillingAddressSummaryComponent } from '../../components/payment/billing-summary/billing-summary.component';
import { DemoCheckoutBillingFormGroup } from '../../components/payment/models/payment-form.type';
import { DemoCheckoutPaymentFormComponent } from '../../components/payment/payment-form/payment-form.component';
import { demoCheckoutPaymentInfoRequestDataTransform } from '../../components/payment/payment-info-form/transforms/request-data';
import { DemoCheckoutPaymentSummaryComponent } from '../../components/payment/payment-summary/payment-summary.component';
import { DemoCheckoutShippingFormComponent } from '../../components/shipping/shipping-form/shipping-form.component';
import { DemoCheckoutShippingSummaryComponent } from '../../components/shipping/shipping-summary/shipping-summary.component';
import { DemoCheckoutShippingAddressFormComponent } from '../../components/shipping-address/form/shipping-address-form.component';
import { DemoCheckoutShippingAddressSummaryComponent } from '../../components/shipping-address/summary/shipping-address-summary.component';
import {
  DemoCheckoutStep,
  DemoCheckoutStepService,
} from '../../step/public_api';

describe('DemoCheckoutViewComponent', () => {
  let component: DemoCheckoutViewComponent;
  let fixture: ComponentFixture<DemoCheckoutViewComponent>;
  let accordionItem: DaffAccordionItemComponent;
  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;
  let addressFactory: DaffCartAddressFactory;
  let creditCardFactory: DaffAuthorizeNetCreditCardFactory;
  let shippingMethodFactory: DaffCartShippingRateFactory;
  let paymentFactory: DaffCartPaymentFactory;

  let stubCart: DaffCart;
  let cartFacade: MockDaffCartFacade;
  let currentStep$: BehaviorSubject<DemoCheckoutStep>;
  let stepCompletion$: BehaviorSubject<Record<DemoCheckoutStep, boolean>>;

  beforeEach(waitForAsync(() => {
    currentStep$ = new BehaviorSubject<DemoCheckoutStep>(DemoCheckoutStep.ADDRESS);
    stepCompletion$ = new BehaviorSubject<Record<DemoCheckoutStep, boolean>>({
      [DemoCheckoutStep.ADDRESS]: false,
      [DemoCheckoutStep.SHIPPING]: false,
      [DemoCheckoutStep.BILLING]: false,
      [DemoCheckoutStep.REVIEW]: false,
    });

    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        DaffCartStateTestingModule,
        DaffGeographyTestingDriverModule.forRoot(),
        DemoCheckoutViewComponent,
        StoreModule.forRoot(),
        EffectsModule.forRoot(),
      ],
      providers: [
        {
          provide: DemoCheckoutStepService,
          useValue: jasmine.createSpyObj(
            'DemoCheckoutStepService',
            [],
            {
              currentStep$,
              stepCompletion$,
            },
          ),
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    cartFacade = TestBed.inject(MockDaffCartFacade);
    addressFactory = TestBed.inject(DaffCartAddressFactory);
    creditCardFactory = TestBed.inject(DaffAuthorizeNetCreditCardFactory);
    cartFactory = TestBed.inject(DaffCartFactory);
    cartItemFactory = TestBed.inject(DaffCartItemFactory);
    shippingMethodFactory = TestBed.inject(DaffCartShippingRateFactory);
    paymentFactory = TestBed.inject(DaffCartPaymentFactory);

    spyOn(cartFacade, 'dispatch');
    stubCart = cartFactory.create({
      shipping_address: addressFactory.create(),
      billing_address: addressFactory.create(),
      payment: paymentFactory.create({
        payment_info: creditCardFactory.create(),
      }),
    });
    cartFacade.cart$.next(stubCart);
    cartFacade.loading$.next(false);

    fixture = TestBed.createComponent(DemoCheckoutViewComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when the current step is address', () => {
    let form: DebugElement;

    beforeEach(() => {
      currentStep$.next(DemoCheckoutStep.ADDRESS);
      fixture.detectChanges();

      form = fixture.debugElement.query(By.directive(DemoCheckoutShippingAddressFormComponent));
    });

    it('should render the shipping address form', () => {
      expect(form).toBeTruthy();
    });

    describe('and when the form is submitted', () => {
      let formComp: DemoCheckoutShippingAddressFormComponent;
      let formValue: DemoCheckoutAddressForm;

      beforeEach(() => {
        formValue = {
          firstname: 'firstname',
          lastname: 'lastname',
          street: 'street',
          city: 'city',
          country: 'country',
          region: 'region',
          postcode: 'postcode',
          telephone: 'telephone',
        };
        formComp = form.componentInstance;
        formComp.submitted.emit(formValue);
        fixture.detectChanges();
      });

      it('should trigger address step complete', () => {
        expect(cartFacade.dispatch).toHaveBeenCalledWith(new DemoCompleteAddressStep({
          ...formValue,
          address_type: 'shipping',
          id: null,
        }));
      });
    });
  });

  describe('when the address step has been completed', () => {
    beforeEach(() => {
      stepCompletion$.next({
        [DemoCheckoutStep.ADDRESS]: true,
        [DemoCheckoutStep.SHIPPING]: false,
        [DemoCheckoutStep.BILLING]: false,
        [DemoCheckoutStep.REVIEW]: false,
      });
      fixture.detectChanges();
    });

    it('should render the shipping address summary', () => {
      expect(fixture.debugElement.query(By.directive(DemoCheckoutShippingAddressSummaryComponent))).toBeTruthy();
    });
  });

  describe('when the current step is shipping', () => {
    let form: DebugElement;

    beforeEach(() => {
      currentStep$.next(DemoCheckoutStep.SHIPPING);
      fixture.detectChanges();

      form = fixture.debugElement.query(By.directive(DemoCheckoutShippingFormComponent));
    });

    it('should render the shipping form', () => {
      expect(form).toBeTruthy();
    });

    describe('and when the form is submitted', () => {
      let formComp: DemoCheckoutShippingFormComponent;
      let formValue: DaffCartShippingRate;

      beforeEach(() => {
        formValue = shippingMethodFactory.create();
        formComp = form.componentInstance;
        formComp.submitted.emit(formValue);
        fixture.detectChanges();
      });

      it('should trigger shipping step complete', () => {
        expect(cartFacade.dispatch).toHaveBeenCalledWith(new DemoCompleteShippingStep(formValue));
      });
    });
  });

  describe('when the shipping step has been completed', () => {
    beforeEach(() => {
      stepCompletion$.next({
        [DemoCheckoutStep.ADDRESS]: true,
        [DemoCheckoutStep.SHIPPING]: true,
        [DemoCheckoutStep.BILLING]: false,
        [DemoCheckoutStep.REVIEW]: false,
      });
      fixture.detectChanges();
    });

    it('should render the shipping summary', () => {
      expect(fixture.debugElement.query(By.directive(DemoCheckoutShippingSummaryComponent))).toBeTruthy();
    });
  });

  describe('when the current step is billing', () => {
    let form: DebugElement;

    beforeEach(() => {
      currentStep$.next(DemoCheckoutStep.BILLING);
      fixture.detectChanges();

      form = fixture.debugElement.query(By.directive(DemoCheckoutPaymentFormComponent));
    });

    it('should render the payment form', () => {
      expect(form).toBeTruthy();
    });

    describe('and when the form is submitted', () => {
      let formComp: DemoCheckoutPaymentFormComponent;
      let formValue: DemoCheckoutBillingFormGroup['value'];

      beforeEach(() => {
        formValue = {
          paymentInfo: {
            cardnumber: 'cardnumber',
            month: 'month',
            year: 'year',
            securitycode: 'securitycode',
          },
          address: {
            firstname: 'firstname',
            lastname: 'lastname',
            street: 'street',
            city: 'city',
            country: 'country',
            region: 'region',
            postcode: 'postcode',
            telephone: 'telephone',
          },
          bsas: false,
        };
        formComp = form.componentInstance;
        formComp.submitted.emit(formValue);
        fixture.detectChanges();
      });

      it('should trigger billing step complete', () => {
        expect(cartFacade.dispatch).toHaveBeenCalledWith(new DemoCompleteBillingStep({
          kind: DAFF_AUTHORIZENET_PAYMENT_KIND,
          data: demoCheckoutPaymentInfoRequestDataTransform(formValue.paymentInfo),
        }, <DaffPersonalAddress>formValue.address));
      });
    });
  });

  describe('when the billing step has been completed', () => {
    beforeEach(() => {
      stepCompletion$.next({
        [DemoCheckoutStep.ADDRESS]: true,
        [DemoCheckoutStep.SHIPPING]: true,
        [DemoCheckoutStep.BILLING]: true,
        [DemoCheckoutStep.REVIEW]: false,
      });
      fixture.detectChanges();
    });

    it('should render the billing address summary', () => {
      expect(fixture.debugElement.query(By.directive(DemoCheckoutBillingAddressSummaryComponent))).toBeTruthy();
    });

    it('should render the payment summary', () => {
      expect(fixture.debugElement.query(By.directive(DemoCheckoutPaymentSummaryComponent))).toBeTruthy();
    });
  });

  describe('on mobile <demo-cart-summary-wrapper>', () => {
    let cartSummaryWrapper: CartSummaryWrapperComponent;

    beforeEach(() => {
      cartSummaryWrapper = fixture.debugElement.query(By.css('.demo-checkout__mobile-cart demo-cart-summary-wrapper')).componentInstance;
    });

    it('should set cart', () => {
      expect(cartSummaryWrapper.cart).toEqual(stubCart);
    });

    it('should set loading', () => {
      expect(cartSummaryWrapper.loading).toEqual(false);
    });

    it('should not set cartTitle', () => {
      expect(cartSummaryWrapper.cartTitle).toBeUndefined();
    });
  });

  describe('on desktop <demo-cart-summary-wrapper>', () => {
    let cartSummaryWrapper: CartSummaryWrapperComponent;

    beforeEach(() => {
      cartSummaryWrapper = fixture.debugElement.query(By.css('.demo-checkout__desktop-cart demo-cart-summary-wrapper')).componentInstance;
    });

    it('should set cart', () => {
      expect(cartSummaryWrapper.cart).toEqual(stubCart);
    });

    it('should set loading', () => {
      expect(cartSummaryWrapper.loading).toEqual(false);
    });

    it('should set cartTitle to CART SUMMARY', () => {
      expect(cartSummaryWrapper.cartTitle).toEqual('CART SUMMARY');
    });
  });

  describe('on <daff-accordion-item>', () => {
    beforeEach(() => {
      accordionItem = fixture.debugElement.query(By.directive(DaffAccordionItemComponent)).componentInstance;
    });

    it('should set initiallyAction to false', () => {
      expect(accordionItem.initiallyExpanded).toBeFalsy();
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
