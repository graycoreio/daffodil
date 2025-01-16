import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
} from '@angular/core';
import { LetDirective } from '@ngrx/component';
import {
  Observable,
  map,
} from 'rxjs';

import { DAFF_AUTHORIZENET_PAYMENT_KIND } from '@daffodil/authorizenet';
import {
  DaffCart,
  DaffCartAddress,
  DaffCartPaymentMethod,
  DaffCartShippingRate,
} from '@daffodil/cart';
import { DaffCartFacade } from '@daffodil/cart/state';
import { DAFF_ACCORDION_COMPONENTS } from '@daffodil/design/accordion';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import { DAFF_LOADING_ICON_COMPONENTS } from '@daffodil/design/loading-icon';
import { DaffPersonalAddress } from '@daffodil/geography';

import { CartSummaryWrapperModule } from '../../../cart/components/cart-summary-wrapper/cart-summary-wrapper.module';
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
import { PlaceOrderModule } from '../../components/place-order/place-order.module';
import { DemoCheckoutShippingFormComponent } from '../../components/shipping/shipping-form/shipping-form.component';
import { DemoCheckoutShippingSummaryComponent } from '../../components/shipping/shipping-summary/shipping-summary.component';
import { DemoCheckoutShippingAddressFormComponent } from '../../components/shipping-address/form/shipping-address-form.component';
import { DemoCheckoutShippingAddressSummaryComponent } from '../../components/shipping-address/summary/shipping-address-summary.component';
import {
  DemoCheckoutStep,
  DemoCheckoutStepService,
} from '../../step/public_api';

@Component({
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.scss'],
  imports: [
    CommonModule,
    LetDirective,
    DAFF_CONTAINER_COMPONENTS,
    DAFF_LOADING_ICON_COMPONENTS,
    DAFF_ACCORDION_COMPONENTS,
    DemoCheckoutShippingAddressFormComponent,
    DemoCheckoutShippingAddressSummaryComponent,
    DemoCheckoutShippingFormComponent,
    DemoCheckoutShippingSummaryComponent,
    DemoCheckoutPaymentFormComponent,
    DemoCheckoutBillingAddressSummaryComponent,
    DemoCheckoutPaymentSummaryComponent,
    PlaceOrderModule,
    CartSummaryWrapperModule,
  ],
})
export class DemoCheckoutViewComponent implements OnInit {
  readonly DemoCheckoutStep = DemoCheckoutStep;

  cart$: Observable<DaffCart>;
  shippingAddress$: Observable<DaffCartAddress>;
  selectedShippingOption$: Observable<DaffCartShippingRate>;
  shippingOptions$: Observable<Array<DaffCartShippingRate>>;
  billingAddress$: Observable<DaffCartAddress>;
  isBillingSameAsShipping$: Observable<boolean>;
  paymentInfo$: Observable<DaffCartPaymentMethod>;
  loading$: Observable<boolean>;
  currentStep$: Observable<DemoCheckoutStep>;
  stepCompletion$: Observable<Record<DemoCheckoutStep, boolean>>;

  constructor(
    private cartFacade: DaffCartFacade,
    private stepService: DemoCheckoutStepService,
  ) { }

  ngOnInit() {
    this.cart$ = this.cartFacade.cart$;

    this.shippingAddress$ = this.cartFacade.cart$.pipe(
      map((cart) => cart.shipping_address),
    );
    this.selectedShippingOption$ = this.cartFacade.cart$.pipe(
      map((cart) => cart.shipping_information),
    );
    this.shippingOptions$ = this.cartFacade.cart$.pipe(
      map((cart) => cart.available_shipping_methods),
    );
    this.billingAddress$ = this.cartFacade.cart$.pipe(
      map((cart) => cart.billing_address),
    );
    this.isBillingSameAsShipping$ = this.cartFacade.isBillingSameAsShipping$;
    this.paymentInfo$ = this.cartFacade.cart$.pipe(
      map((cart) => cart.payment),
    );

    this.loading$ = this.cartFacade.loading$;
    this.currentStep$ = this.stepService.currentStep$;
    this.stepCompletion$ = this.stepService.stepCompletion$;
  }

  onUpdateShippingAddress(address: DemoCheckoutAddressForm) {
    this.cartFacade.dispatch(
      new DemoCompleteAddressStep({
        ...address,
        address_type: 'shipping',
        id: null,
      }),
    );
  }

  onUpdateShipping(shipping: DaffCart['shipping_information']) {
    this.cartFacade.dispatch(
      new DemoCompleteShippingStep(shipping),
    );
  }

  onUpdatePayment(payment: DemoCheckoutBillingFormGroup['value']) {
    this.cartFacade.dispatch(
      new DemoCompleteBillingStep({
        kind: DAFF_AUTHORIZENET_PAYMENT_KIND,
        data: demoCheckoutPaymentInfoRequestDataTransform(payment.paymentInfo),
      }, <DaffPersonalAddress>payment.address),
    );
  }
}
