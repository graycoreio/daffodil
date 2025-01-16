import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DemoGeographyAddressSummaryComponent } from 'apps/demo/src/app/geography/components/address-summary/address-summary.component';

import { DaffCartAddress } from '@daffodil/cart';
import { DaffCartAddressFactory } from '@daffodil/cart/testing';
import { DaffGeographyTestingDriverModule } from '@daffodil/geography/driver/testing';

import { DemoCheckoutPaymentFormComponent } from './payment-form.component';
import { EnablePlaceOrderButton } from '../../../actions/checkout.actions';
import { DemoCheckoutAddressFormComponent } from '../../forms/address/components/address-form/address-form.component';
import { DemoCheckoutAddressFormFactory } from '../../forms/address/factories/address-form.factory';
import { DemoCheckoutBillingFormGroup } from '../models/payment-form.type';
import { PaymentInfoFormFactory } from '../payment-info-form/factories/payment-info-form.factory';

@Component({
  template: `
    <demo-checkout-payment-form
      [paymentInfo]="paymentInfoValue"
      [billingAddress]="billingAddressValue"
      [shippingAddress]="shippingAddressValue"
      [billingAddressIsShippingAddress]="billingAddressIsShippingAddressValue"
      (submitted)="submittedFunction($event)"
    ></demo-checkout-payment-form>
  `,
  imports: [
    DemoCheckoutPaymentFormComponent,
  ],
})
class WrapperComponent {
  paymentInfoValue: any;
  billingAddressValue: DaffCartAddress;
  shippingAddressValue: DaffCartAddress;
  billingAddressIsShippingAddressValue: boolean;
  submittedFunction;
}

describe('DemoCheckoutPaymentFormComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let stubPaymentInfo;
  let stubBillingAddress;
  let stubBillingAddressIsShippingAddress;
  let component: DemoCheckoutPaymentFormComponent;
  let addressFormFactory: DemoCheckoutAddressFormFactory;
  let paymentInfoFormFactory: PaymentInfoFormFactory;
  let addressFactory: DaffCartAddressFactory;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(),
        EffectsModule.forRoot(),
        DaffGeographyTestingDriverModule.forRoot(),
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    addressFormFactory = TestBed.inject(DemoCheckoutAddressFormFactory);
    paymentInfoFormFactory = TestBed.inject(PaymentInfoFormFactory);
    addressFactory = TestBed.inject(DaffCartAddressFactory);

    stubPaymentInfo = null;
    stubBillingAddress = null;
    stubBillingAddressIsShippingAddress = false;

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.paymentInfoValue = stubPaymentInfo;
    wrapper.billingAddressValue = stubBillingAddress;
    wrapper.shippingAddressValue = addressFactory.create();
    wrapper.billingAddressIsShippingAddressValue = stubBillingAddressIsShippingAddress;
    wrapper.submittedFunction = jasmine.createSpy();

    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('demo-checkout-payment-form')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take paymentInfo as input', () => {
    expect(component.paymentInfo).toEqual(stubPaymentInfo);
  });

  it('should be able to take billingAddress as input', () => {
    expect(component.billingAddress).toEqual(stubBillingAddress);
  });

  it('should be able to take billingAddressIsShippingAddress', () => {
    expect(component.billingAddressIsShippingAddress).toEqual(stubBillingAddressIsShippingAddress);
  });

  it('should init bsas to the input', () => {
    expect(component.form.value.bsas).toEqual(wrapper.billingAddressIsShippingAddressValue);
  });

  describe('when bsas is false', () => {
    beforeEach(() => {
      component.form.patchValue({ bsas: false });
      fixture.detectChanges();
    });

    it('should render the address form', () => {
      expect(fixture.debugElement.query(By.directive(DemoCheckoutAddressFormComponent))).toBeTruthy();
    });

    it('should not render the address summary form', () => {
      expect(fixture.debugElement.query(By.directive(DemoGeographyAddressSummaryComponent))).toBeFalsy();
    });

    describe('on <demo-checkout-address-form>', () => {
      let addressFormComponent: DemoCheckoutAddressFormComponent;

      beforeEach(() => {
        addressFormComponent = fixture.debugElement.query(By.directive(DemoCheckoutAddressFormComponent)).componentInstance;
      });

      it('should set formGroup', () => {
        expect(addressFormComponent.formGroup).toEqual(component.form.controls.address);
      });
    });
  });

  describe('when bsas is true', () => {
    beforeEach(() => {
      component.form.patchValue({ bsas: true });
      fixture.detectChanges();
    });

    it('should not render the address form', () => {
      expect(fixture.debugElement.query(By.directive(DemoCheckoutAddressFormComponent))).toBeFalsy();
    });

    it('should render the address summary form', () => {
      expect(fixture.debugElement.query(By.directive(DemoGeographyAddressSummaryComponent))).toBeTruthy();
    });

    describe('on <demo-geography-address-summary>', () => {
      let addressSummaryComponent: DemoGeographyAddressSummaryComponent;

      beforeEach(() => {
        addressSummaryComponent = fixture.debugElement.query(By.directive(DemoGeographyAddressSummaryComponent)).componentInstance;
      });

      it('should set address', () => {
        expect(addressSummaryComponent.address).toEqual(component.shippingAddress);
      });
    });
  });

  describe('when submit button is clicked', () => {
    describe('and billingAddressIsShippingAddress is false', () => {

      beforeEach(() => {
        component.billingAddressIsShippingAddress = false;
        fixture.debugElement.query(By.css('button')).nativeElement.click();
        fixture.detectChanges();

        component.onSubmit();
      });

      it('should not emit submitted', () => {
        expect(wrapper.submittedFunction).not.toHaveBeenCalled();
      });
    });

    describe('and billingAddressIsShippingAddress is true', () => {

      beforeEach(() => {
        component.form.patchValue({ bsas: true });
      });

      describe('and paymentInfoForm is invalid', () => {

        beforeEach(() => {
          component.form.patchValue({ paymentInfo: null });
          fixture.debugElement.query(By.css('button')).nativeElement.click();
          fixture.detectChanges();
        });

        it('should not emit submitted', () => {
          expect(wrapper.submittedFunction).not.toHaveBeenCalled();
        });
      });

      describe('and paymentInfoForm is valid', () => {

        const expectedPaymentInfo = {
          cardnumber: '2',
          month: '2',
          year: '2',
          securitycode: '2',
        };

        beforeEach(() => {
          component.form.controls.paymentInfo.setValue(expectedPaymentInfo);
          fixture.debugElement.query(By.css('button')).nativeElement.click();
          fixture.detectChanges();

          component.onSubmit();
        });

        it('should emit submitted', () => {
          expect(wrapper.submittedFunction).toHaveBeenCalledWith(jasmine.objectContaining({
            address: wrapper.shippingAddressValue,
            paymentInfo: expectedPaymentInfo,
          }));
        });
      });
    });

    describe('and the form is valid', () => {
      let expectedPaymentInfo: DemoCheckoutBillingFormGroup['value'];

      beforeEach(() => {
        expectedPaymentInfo = {
          address: {
            firstname: 'valid',
            lastname: 'valid',
            street: 'valid',
            city: 'valid',
            region: 'California',
            country: 'US',
            postcode: 'valid',
            telephone: 'valid',
          },
          paymentInfo: {
            cardnumber: 'valid',
            month: '01',
            year: 'valid',
            securitycode: 'valid',
          },
        };
        component.form.patchValue(expectedPaymentInfo);
        fixture.debugElement.query(By.css('button')).nativeElement.click();
        fixture.detectChanges();
      });

      it('should emit submitted', () => {
        expect(wrapper.submittedFunction).toHaveBeenCalledWith(jasmine.objectContaining(expectedPaymentInfo));
      });
    });
  });
});
