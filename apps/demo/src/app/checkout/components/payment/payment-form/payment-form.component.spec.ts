import {
  Component,
  Input,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';

import { PaymentInfo } from '@daffodil/checkout';
import { DaffAddress } from '@daffodil/core';

import { PaymentFormComponent } from './payment-form.component';
import { EnablePlaceOrderButton } from '../../../actions/checkout.actions';
import * as fromDemoCheckout from '../../../reducers';
import { AddressFormFactory } from '../../forms/address-form/factories/address-form.factory';
import { PaymentInfoFormFactory } from '../payment-info-form/factories/payment-info-form.factory';

@Component({
  template: `
    <demo-payment-form
      [paymentInfo]="paymentInfoValue"
      [billingAddress]="billingAddressValue"
      [billingAddressIsShippingAddress]="billingAddressIsShippingAddressValue"
      (updatePaymentInfo)="updatePaymentInfoFunction($event)"
      (updateBillingAddress)="updatePaymentInfoFunction($event)"
      (toggleBillingAddressIsShippingAddress)="toggleBillingAddressIsShippingAddressFunction($event)"></demo-payment-form>
  `,
})
class WrapperComponent {
  paymentInfoValue: PaymentInfo;
  billingAddressValue: DaffAddress;
  billingAddressIsShippingAddressValue: boolean;
  updatePaymentInfoFunction = e => {};
  updateBillingAddressFunction = () => {};
  toggleBillingAddressIsShippingAddressFunction = () => {};
}

@Component({ selector: 'demo-address-form', template: '' })
class MockAddressFormComponent {
  @Input() formGroup: UntypedFormGroup;
  @Input() submitted: boolean;
}

@Component({ selector: 'demo-payment-info-form', template: '' })
class MockPaymentInfoFormComponent {
  @Input() formGroup: UntypedFormGroup;
  @Input() submitted: boolean;
}

describe('PaymentFormComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let stubPaymentInfo;
  let stubBillingAddress;
  let stubBillingAddressIsShippingAddress;
  let store;
  let paymentFormComponent: PaymentFormComponent;
  let addressFormComponent: MockAddressFormComponent;
  let paymentInfoFormComponent: MockPaymentInfoFormComponent;
  let addressFormFactory: AddressFormFactory;
  let paymentInfoFormFactory: PaymentInfoFormFactory;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({
          shippings: combineReducers(fromDemoCheckout.reducers),
        }),
      ],
      declarations: [
        WrapperComponent,
        MockAddressFormComponent,
        MockPaymentInfoFormComponent,
        PaymentFormComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.inject(Store);
    addressFormFactory = TestBed.inject(AddressFormFactory);
    paymentInfoFormFactory = TestBed.inject(PaymentInfoFormFactory);

    stubPaymentInfo = null;
    stubBillingAddress = null;
    stubBillingAddressIsShippingAddress = false;

    spyOn(store, 'dispatch');

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.paymentInfoValue = stubPaymentInfo;
    wrapper.billingAddressValue = stubBillingAddress;
    wrapper.billingAddressIsShippingAddressValue = stubBillingAddressIsShippingAddress;

    fixture.detectChanges();

    paymentFormComponent = fixture.debugElement.query(By.css('demo-payment-form')).componentInstance;
    addressFormComponent = fixture.debugElement.query(By.css('demo-address-form')).componentInstance;
    paymentInfoFormComponent = fixture.debugElement.query(By.css('demo-payment-info-form')).componentInstance;
    spyOn(paymentFormComponent.updatePaymentInfo, 'emit').and.callThrough();
    spyOn(paymentFormComponent.updateBillingAddress, 'emit').and.callThrough();
  });

  it('should create', () => {
    expect(paymentFormComponent).toBeTruthy();
  });

  it('should be able to take paymentInfo as input', () => {
    expect(paymentFormComponent.paymentInfo).toEqual(stubPaymentInfo);
  });

  it('should be able to take billingAddress as input', () => {
    expect(paymentFormComponent.billingAddress).toEqual(stubBillingAddress);
  });

  it('should be able to take billingAddressIsShippingAddress', () => {
    expect(paymentFormComponent.billingAddressIsShippingAddress).toEqual(stubBillingAddressIsShippingAddress);
  });

  describe('on <demo-address-form>', () => {

    it('should set formGroup', () => {
      expect(addressFormComponent.formGroup).toEqual(paymentFormComponent.form.controls.address);
    });

    it('should set formSubmitted', () => {
      expect(addressFormComponent.submitted).toEqual(paymentFormComponent.form.valid);
    });
  });

  describe('on <demo-payment-info-form>', () => {

    it('should set formGroup', () => {
      expect(paymentInfoFormComponent.formGroup).toEqual(paymentFormComponent.form.controls.paymentInfo);
    });

    it('should set formSubmitted', () => {
      expect(paymentInfoFormComponent.submitted).toEqual(false);
    });
  });

  describe('when checkbox is clicked', () => {

    it('should emit toggleBillingAddressIsShippingAddress', () => {
      spyOn(paymentFormComponent.toggleBillingAddressIsShippingAddress, 'emit');
      fixture.debugElement.query(By.css('#sameAsShipping')).nativeElement.click();

      expect(paymentFormComponent.toggleBillingAddressIsShippingAddress.emit).toHaveBeenCalled();
    });
  });

  describe('when billingAddressIsShippingAddress is true', () => {

    beforeEach(() => {
      paymentFormComponent.billingAddressIsShippingAddress = true;
      fixture.detectChanges();
    });

    it('should not render firstname input', () => {
      const firstnameElement = fixture.debugElement.query(By.css('.demo-payment-form__first-name'));

      expect(firstnameElement).toBeNull();
    });
  });

  describe('when submit button is clicked', () => {

    it('should call onSubmit', () => {
      spyOn(paymentFormComponent, 'onSubmit');
      fixture.debugElement.query(By.css('button')).nativeElement.click();

      expect(paymentFormComponent.onSubmit).toHaveBeenCalled();
    });
  });

  describe('onSubmit', () => {

    describe('when form is invalid', () => {

      beforeEach(() => {
        const formBuilder = new UntypedFormBuilder();
        paymentFormComponent.form.patchValue({
          address: null,
          paymentInfo: null,
        });
      });

      describe('and billingAddressIsShippingAddress is false', () => {

        beforeEach(() => {
          paymentFormComponent.billingAddressIsShippingAddress = false;
          fixture.detectChanges();

          paymentFormComponent.onSubmit();
        });

        it('should not emit updatePaymentInfo', () => {
          expect(paymentFormComponent.updatePaymentInfo.emit).not.toHaveBeenCalled();
        });

        it('should not emit updateBillingAddress', () => {
          expect(paymentFormComponent.updateBillingAddress.emit).not.toHaveBeenCalled();
        });

        it('should not call store.dispatch', () => {
          expect(store.dispatch).not.toHaveBeenCalled();
        });
      });

      describe('and billingAddressIsShippingAddress is true', () => {

        beforeEach(() => {
          paymentFormComponent.billingAddressIsShippingAddress = true;
        });

        describe('and paymentInfoForm is invalid', () => {

          beforeEach(() => {
            paymentFormComponent.form.controls.paymentInfo.value.name = null;
            fixture.detectChanges();
          });

          it('should not emit updatePaymentInfo', () => {
            expect(paymentFormComponent.updatePaymentInfo.emit).not.toHaveBeenCalled();
          });

          it('should not emit updateBillingAddress', () => {
            expect(paymentFormComponent.updateBillingAddress.emit).not.toHaveBeenCalled();
          });

          it('should not call store.dispatch', () => {
            expect(store.dispatch).not.toHaveBeenCalled();
          });
        });

        describe('and paymentInfoForm is valid', () => {

          const expectedPaymentInfo = {
            name: 'valid',
            cardnumber: '2',
            month: '2',
            year: '2',
            securitycode: '2',
          };

          beforeEach(() => {
            paymentFormComponent.form.controls.paymentInfo.setValue(expectedPaymentInfo);
            fixture.detectChanges();

            paymentFormComponent.onSubmit();
          });

          it('should emit updatePaymentInfo', () => {
            expect(paymentFormComponent.updatePaymentInfo.emit).toHaveBeenCalledWith(expectedPaymentInfo);
          });

          it('should not emit updateBillingAddress', () => {
            expect(paymentFormComponent.updateBillingAddress.emit).not.toHaveBeenCalled();
          });

          it('should call store.dispatch with an EnablePlaceOrderButton action', () => {
            expect(store.dispatch).toHaveBeenCalledWith(new EnablePlaceOrderButton());
          });
        });
      });
    });

    describe('when form is valid', () => {

      beforeEach(() => {
        paymentFormComponent.form.patchValue({
          address: {
            firstname: 'valid',
            lastname: 'valid',
            street: 'valid',
            city: 'valid',
            state: 'California',
            country: 'US',
            postcode: 'valid',
            telephone: 'valid',
          },
          paymentInfo: {
            name: 'valid',
            cardnumber: 'valid',
            month: '01',
            year: 'valid',
            securitycode: 'valid',
          },
        });
        fixture.detectChanges();
      });

      it('should emit updatePaymentInfo', () => {
        paymentFormComponent.onSubmit();
        expect(paymentFormComponent.updatePaymentInfo.emit).toHaveBeenCalledWith(paymentFormComponent.form.value.paymentInfo);
      });

      it('should emit updateBillingAddress with expected object', () => {
        paymentFormComponent.onSubmit();
        expect(paymentFormComponent.updateBillingAddress.emit).toHaveBeenCalledWith(paymentFormComponent.form.value.address);
      });

      it('should call store.dispatch with an EnablePlaceOrderButton action', () => {
        paymentFormComponent.onSubmit();
        expect(store.dispatch).toHaveBeenCalledWith(new EnablePlaceOrderButton());
      });
    });
  });

  describe('when updatePaymentInfo is emitted', () => {

    it('should call the function passed by the host element', () => {
      const emittedValue = 'emittedValue';
      spyOn(wrapper, 'updatePaymentInfoFunction');
      paymentFormComponent.updatePaymentInfo.emit(emittedValue);

      expect(wrapper.updatePaymentInfoFunction).toHaveBeenCalledWith(emittedValue);
    });
  });
});
