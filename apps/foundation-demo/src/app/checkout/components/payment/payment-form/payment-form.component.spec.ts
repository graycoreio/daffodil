import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { StoreModule, combineReducers, Store } from '@ngrx/store';

import { DaffodilAddress, PaymentInfo } from '@daffodil/core';

import { PaymentFormComponent } from './payment-form.component';
import * as fromFoundationCheckout from '../../../reducers';
import { EnablePlaceOrderButton } from '../../../actions/checkout.actions';
import { AddressFormFactory } from '../../forms/address-form/factories/address-form.factory';
import { PaymentInfoFormFactory } from '../payment-info-form/factories/payment-info-form.factory';

@Component({
  'template': '<demo-payment-form ' + 
                '[paymentInfo]="paymentInfoValue" ' + 
                '[billingAddress]="billingAddressValue" ' +
                '[billingAddressIsShippingAddress]="billingAddressIsShippingAddressValue" ' + 
                '(updatePaymentInfo)="updatePaymentInfoFunction($event)" ' + 
                '(updateBillingAddress)="updatePaymentInfoFunction($event)" ' + 
                '(toggleBillingAddressIsShippingAddress)="toggleBillingAddressIsShippingAddressFunction($event)"></demo-payment-form>'
})
class TestingPaymentFormComponentWrapper {
  paymentInfoValue: PaymentInfo;
  billingAddressValue: DaffodilAddress;
  billingAddressIsShippingAddressValue: boolean;
  updatePaymentInfoFunction = () => {};
  updateBillingAddressFunction = () => {};
  toggleBillingAddressIsShippingAddressFunction = () => {};
}

@Component({selector: 'demo-address-form', template: ''})
class MockAddressFormComponent {
  @Input() formGroup: FormGroup;
  @Input() submitted: boolean;
}

@Component({selector: 'demo-payment-info-form', template: ''})
class MockPaymentInfoFormComponent {
  @Input() formGroup: FormGroup;
  @Input() submitted: boolean;
}

@Component({
  selector: 'demo-promotion',
  template: ''
})
class MockPromotionComponent {}

describe('PaymentFormComponent', () => {
  let component: TestingPaymentFormComponentWrapper;
  let fixture: ComponentFixture<TestingPaymentFormComponentWrapper>;
  let stubPaymentInfo;
  let stubBillingAddress;
  let stubBillingAddressIsShippingAddress;
  let store;
  let paymentFormComponent: PaymentFormComponent;
  let addressFormComponent: MockAddressFormComponent;
  let paymentInfoFormComponent: MockPaymentInfoFormComponent;
  let addressFormFactorySpy = jasmine.createSpyObj('AddressFormFactory', ['create']);
  let stubAddressFormGroup: FormGroup;
  let paymentInfoFormFactorySpy = jasmine.createSpyObj('PaymentInfoFormFactory', ['create']);
  let stubPaymentInfoFormGroup: FormGroup;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({
          shippings: combineReducers(fromFoundationCheckout.reducers),
        })
      ],
      declarations: [ 
        TestingPaymentFormComponentWrapper,
        MockPromotionComponent,
        MockAddressFormComponent,
        MockPaymentInfoFormComponent,
        PaymentFormComponent
      ],
      providers: [
        {provide: AddressFormFactory, useValue: addressFormFactorySpy},
        {provide: PaymentInfoFormFactory, useValue: paymentInfoFormFactorySpy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    stubPaymentInfo = null;
    stubBillingAddress = null;
    stubBillingAddressIsShippingAddress = false;
    stubAddressFormGroup = new AddressFormFactory(new FormBuilder()).create(stubPaymentInfo);
    stubAddressFormGroup.markAsDirty();
    stubAddressFormGroup.markAsTouched();
    addressFormFactorySpy.create.and.returnValue(stubAddressFormGroup);
    stubPaymentInfoFormGroup = new PaymentInfoFormFactory(new FormBuilder()).create(stubBillingAddress);
    paymentInfoFormFactorySpy.create.and.returnValue(stubPaymentInfoFormGroup);

    fixture = TestBed.createComponent(TestingPaymentFormComponentWrapper);
    store = TestBed.get(Store);
    spyOn(store, 'dispatch');
    component = fixture.componentInstance;
    component.paymentInfoValue = stubPaymentInfo;
    component.billingAddressValue = stubBillingAddress;
    component.billingAddressIsShippingAddressValue = stubBillingAddressIsShippingAddress;

    fixture.detectChanges();

    paymentFormComponent = fixture.debugElement.query(By.css('demo-payment-form')).componentInstance;
    addressFormComponent = fixture.debugElement.query(By.css('demo-address-form')).componentInstance;
    paymentInfoFormComponent = fixture.debugElement.query(By.css('demo-payment-info-form')).componentInstance;
    spyOn(paymentFormComponent.updatePaymentInfo, 'emit').and.callThrough();
    spyOn(paymentFormComponent.updateBillingAddress, 'emit').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
      expect(<FormGroup> addressFormComponent.formGroup).toEqual(<FormGroup> paymentFormComponent.form.controls['address']);
    });

    it('should set formSubmitted', () => {
      expect(addressFormComponent.submitted).toEqual(paymentFormComponent.form.valid);
    });
  });

  describe('on <demo-payment-info-form>', () => {
    
    it('should set formGroup', () => {
      expect(<FormGroup> paymentInfoFormComponent.formGroup).toEqual(<FormGroup> paymentFormComponent.form.controls['paymentInfo']);
    });

    it('should set formSubmitted', () => {
      expect(paymentInfoFormComponent.submitted).toEqual(false);
    });
  });

  describe('ngOnInit', () => {

    it('should call PaymentInfoFormFactory with paymentInfo', () => {
      expect(paymentInfoFormFactorySpy.create).toHaveBeenCalledWith(stubPaymentInfo);
    });

    it('should call AddressFormFactory with billingAddress', () => {
      expect(addressFormFactorySpy.create).toHaveBeenCalledWith(stubBillingAddress);
    });

    it('sets form.value to returned factory values', () => {
      expect(paymentFormComponent.form.value.address).toEqual(stubAddressFormGroup.value);
      expect(paymentFormComponent.form.value.paymentInfo).toEqual(stubPaymentInfoFormGroup.value);
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
      let firstnameElement = fixture.debugElement.query(By.css('.payment-form__first-name'));

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
        let formBuilder = new FormBuilder();
        paymentFormComponent.form = formBuilder.group({
          address: stubAddressFormGroup,
          paymentInfo: stubPaymentInfoFormGroup
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

          let expectedPaymentInfo: PaymentInfo = {
            name: 'valid',
            cardnumber: 2,
            month: 2,
            year: 2,
            securitycode: 2
          }

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
        stubPaymentInfoFormGroup.setValue({
          name: 'valid',
          cardnumber: 'valid',
          month: '01',
          year: 'valid',
          securitycode: 'valid'
        });
        stubAddressFormGroup.setValue({
          firstname: 'valid',
          lastname: 'valid',
          street: 'valid',
          city: 'valid',
          state: 'California',
          postcode: 'valid',
          telephone: 'valid'
        });
        let formBuilder = new FormBuilder();
        paymentFormComponent.form = formBuilder.group({
          address: stubAddressFormGroup,
          paymentInfo: stubPaymentInfoFormGroup
        });
        fixture.detectChanges();
      });
    
      it('should emit updatePaymentInfo', () => {
        paymentFormComponent.onSubmit();
        expect(paymentFormComponent.updatePaymentInfo.emit).toHaveBeenCalledWith(stubPaymentInfoFormGroup.value);
      });

      it('should emit updateBillingAddress with expected object', () => {
        paymentFormComponent.onSubmit();
        expect(paymentFormComponent.updateBillingAddress.emit).toHaveBeenCalledWith(stubAddressFormGroup.value);
      });

      it('should call store.dispatch with an EnablePlaceOrderButton action', () => {
        paymentFormComponent.onSubmit();
        expect(store.dispatch).toHaveBeenCalledWith(new EnablePlaceOrderButton());
      });
    });
  });

  describe('when updatePaymentInfo is emitted', () => {
    
    it('should call the function passed by the host element', () => {
      let emittedValue = 'emittedValue';
      spyOn(component, 'updatePaymentInfoFunction');
      paymentFormComponent.updatePaymentInfo.emit(emittedValue);

      expect(component.updatePaymentInfoFunction).toHaveBeenCalledWith(emittedValue);
    });
  });
});
