import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFormComponent } from './payment-form.component';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, AbstractControl } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ErrorStateMatcher } from '../../../../design/molecules/error-state-matcher/error-state-matcher.component';
import { DaffodilAddress, PaymentInfo } from '@daffodil/core';

@Component({'template': '<payment-form [paymentInfo]="paymentInfoValue" [billingAddress]="billingAddressValue" [billingAddressIsShippingAddress]="billingAddressIsShippingAddressValue" (updatePaymentInfo)="updatePaymentInfoFunction($event)" (updateBillingAddress)="updatePaymentInfoFunction($event)" (toggleBillingAddressIsShippingAddress)="toggleBillingAddressIsShippingAddressFunction($event)"></payment-form>'})
class TestingPaymentFormComponentWrapper {
  paymentInfoValue: PaymentInfo;
  billingAddressValue: DaffodilAddress;
  billingAddressIsShippingAddressValue: boolean;
  updatePaymentInfoFunction: Function = () => {};
  updateBillingAddressFunction: Function = () => {};
  toggleBillingAddressIsShippingAddressFunction: Function = () => {};
}

@Component({'selector': '[input-validator]', 'template': ''})
class MockInputValidatorComponent {
  @Input() formControl: FormControl;
  @Input() formSubmitted: boolean;
}

@Component({'selector': '[select-validator]', 'template': ''})
class MockSelectValidatorComponent {
  @Input() formControl: FormControl;
  @Input() formSubmitted: boolean;
  @Input() errorStateMatcher: ErrorStateMatcher;
}

@Component({
  selector: 'promotion',
  template: ''
})
class PromotionComponentMock {}

describe('PaymentFormComponent', () => {
  let component: TestingPaymentFormComponentWrapper;
  let fixture: ComponentFixture<TestingPaymentFormComponentWrapper>;
  let paymentFormComponent: PaymentFormComponent;
  let stubPaymentInfo;
  let stubBillingAddress;
  let stubBillingAddressIsShippingAddress;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ 
        TestingPaymentFormComponentWrapper,
        PromotionComponentMock,
        MockInputValidatorComponent,
        MockSelectValidatorComponent,
        PaymentFormComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    stubPaymentInfo = null;
    stubBillingAddress = null;
    stubBillingAddressIsShippingAddress = false;

    fixture = TestBed.createComponent(TestingPaymentFormComponentWrapper);
    component = fixture.componentInstance;
    component.paymentInfoValue = stubPaymentInfo;
    component.billingAddressValue = stubBillingAddress;
    component.billingAddressIsShippingAddressValue = stubBillingAddressIsShippingAddress;
    fixture.detectChanges();

    paymentFormComponent = fixture.debugElement.query(By.css('payment-form')).componentInstance;
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

  describe('ngOnInit', () => {

    describe('when paymentInfo is defined', () => {

      beforeEach(() => {
        fixture = TestBed.createComponent(TestingPaymentFormComponentWrapper);
        component = fixture.componentInstance;
        component.paymentInfoValue = {
          name: 'test',
          cardnumber: 3,
          month: 3,
          year: 3,
          securitycode: 3
        };
        fixture.detectChanges();

        paymentFormComponent = fixture.debugElement.query(By.css('payment-form')).componentInstance;
      });
      
      it('sets form.value.name to paymentInfo.name', () => {
        expect(paymentFormComponent.form.value.name).toEqual(component.paymentInfoValue.name);
      });
      
      it('sets form.value.cardnumber to paymentInfo.cardnumber', () => {
        expect(paymentFormComponent.form.value.cardnumber).toEqual(component.paymentInfoValue.cardnumber);
      });
      
      it('sets form.value.month to paymentInfo.month', () => {
        expect(paymentFormComponent.form.value.month).toEqual(component.paymentInfoValue.month);
      });
      
      it('sets form.value.year to paymentInfo.year', () => {
        expect(paymentFormComponent.form.value.year).toEqual(component.paymentInfoValue.year);
      });
      
      it('sets form.value.securitycode to paymentInfo.securitycode', () => {
        expect(paymentFormComponent.form.value.securitycode).toEqual(component.paymentInfoValue.securitycode);
      });
    });

    describe('when billingAddress is defined', () => {
      
      beforeEach(() => {
        fixture = TestBed.createComponent(TestingPaymentFormComponentWrapper);
        component = fixture.componentInstance;
        component.billingAddressValue = {
          firstname: 'firstname',
          lastname: 'lastname',
          street: 'street',
          city: 'city',
          state: 'state',
          postcode: 'postcode',
          telephone: 'telephone'
        };
        fixture.detectChanges();

        paymentFormComponent = fixture.debugElement.query(By.css('payment-form')).componentInstance;
      });
      
      it('sets form.value.firstname to billingAddress.firstname', () => {
        expect(paymentFormComponent.form.value.firstname).toEqual(component.billingAddressValue.firstname);
      });
      
      it('sets form.value.lastname to billingAddress.lastname', () => {
        expect(paymentFormComponent.form.value.lastname).toEqual(component.billingAddressValue.lastname);
      });
      
      it('sets form.value.street to billingAddress.street', () => {
        expect(paymentFormComponent.form.value.street).toEqual(component.billingAddressValue.street);
      });
      
      it('sets form.value.city to billingAddress.city', () => {
        expect(paymentFormComponent.form.value.city).toEqual(component.billingAddressValue.city);
      });
      
      it('sets form.value.state to billingAddress.state', () => {
        expect(paymentFormComponent.form.value.state).toEqual(component.billingAddressValue.state);
      });
      
      it('sets form.value.postcode to billingAddress.postcode', () => {
        expect(paymentFormComponent.form.value.postcode).toEqual(component.billingAddressValue.postcode);
      });
      
      it('sets form.value.telephone to billingAddress.telephone', () => {
        expect(paymentFormComponent.form.value.telephone).toEqual(component.billingAddressValue.telephone);
      });
    });

    describe('when paymentInfo and billingAddress are null', () => {
      
      it('sets form.value to default', () => {
        let defaultValues = {
          name: '',
          cardnumber: '',
          month: 'Month',
          year: 'Year',
          securitycode: '',
          firstname: '',
          lastname: '',
          street: '',
          city: '',
          state: 'State',
          postcode: '',
          telephone: ''
        }

        expect(paymentFormComponent.form.value).toEqual(defaultValues);
      });
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
    
    it('should not render lastname input', () => {
      let lastnameElement = fixture.debugElement.query(By.css('.payment-form__last-name'));
      
      expect(lastnameElement).toBeNull();
    });
    
    it('should not render street input', () => {
      let streetElement = fixture.debugElement.query(By.css('.payment-form__street'));
      
      expect(streetElement).toBeNull();
    });
    
    it('should not render city input', () => {
      let cityElement = fixture.debugElement.query(By.css('.payment-form__city'));
      
      expect(cityElement).toBeNull();
    });
    
    it('should not render state input', () => {
      let stateElement = fixture.debugElement.query(By.css('.payment-form__state'));
      
      expect(stateElement).toBeNull();
    });
    
    it('should not render postcode input', () => {
      let postcodeElement = fixture.debugElement.query(By.css('.payment-form__postcode'));
      
      expect(postcodeElement).toBeNull();
    });
    
    it('should not render telephone input', () => {
      let telephoneElement = fixture.debugElement.query(By.css('.payment-form__telephone'));
      
      expect(telephoneElement).toBeNull();
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

    beforeEach(() => {
      spyOn(paymentFormComponent.updatePaymentInfo, 'emit');
      spyOn(paymentFormComponent.updateBillingAddress, 'emit');
    });

    describe('when form is valid', () => {

      beforeEach(() => {
        paymentFormComponent.form.setValue({
          name: 'valid',
          cardnumber: 2,
          month: 2,
          year: 2,
          securitycode: 2,
          firstname: 'valid',
          lastname: 'valid',
          street: 'valid',
          city: 'valid',
          state: 'valid',
          postcode: 'valid',
          telephone: 'valid'
        });
        fixture.detectChanges();
        paymentFormComponent.onSubmit();
      });
    
      it('should emit updatePaymentInfo', () => {
        let expectedPaymentInfo: PaymentInfo = {
          name: 'valid',
          cardnumber: 2,
          month: 2,
          year: 2,
          securitycode: 2
        }

        expect(paymentFormComponent.updatePaymentInfo.emit).toHaveBeenCalledWith(expectedPaymentInfo);
      });

      it('should emit updateBillingAddress with expected object', () => {
        let expectedBillingAddress: DaffodilAddress = {
          firstname: 'valid',
          lastname: 'valid',
          street: 'valid',
          city: 'valid',
          state: 'valid',
          postcode: 'valid',
          telephone: 'valid'
        }

        expect(paymentFormComponent.updateBillingAddress.emit).toHaveBeenCalledWith(expectedBillingAddress);
      });
    });

    describe('when form is invalid', () => {

      describe('and billingAddressIsShippingAddress is false', () => {

        beforeEach(() => {
          fixture.detectChanges();
          paymentFormComponent.onSubmit();
        });
        
        it('should not emit updatePaymentInfo', () => {
          expect(paymentFormComponent.updatePaymentInfo.emit).not.toHaveBeenCalled();
        });

        it('should not emit updateBillingAddress', () => {
          expect(paymentFormComponent.updateBillingAddress.emit).not.toHaveBeenCalled();
        });
      });

      describe('and billingAddressIsShippingAddress is true', () => {
        
        beforeEach(() => {
          paymentFormComponent.billingAddressIsShippingAddress = true;
        });

        describe('and paymentInfoForm is invalid', () => {
          
          beforeEach(() => {
            paymentFormComponent.form.value.name = null;
            fixture.detectChanges();
          });

          it('should not emit updatePaymentInfo', () => {
            expect(paymentFormComponent.updatePaymentInfo.emit).not.toHaveBeenCalled();
          });

          it('should not emit updateBillingAddress', () => {
            expect(paymentFormComponent.updateBillingAddress.emit).not.toHaveBeenCalled();
          });
        });

        describe('and paymentInfoForm is valid', () => {
          
          beforeEach(() => {
            paymentFormComponent.form.setValue({
              name: 'valid',
              cardnumber: 2,
              month: 2,
              year: 2,
              securitycode: 2,
              firstname: null,
              lastname: null,
              street: null,
              city: null,
              state: null,
              postcode: null,
              telephone: null
            });
            fixture.detectChanges();

            paymentFormComponent.onSubmit();
          });
    
          it('should emit updatePaymentInfo', () => {
            let expectedPaymentInfo: PaymentInfo = {
              name: 'valid',
              cardnumber: 2,
              month: 2,
              year: 2,
              securitycode: 2
            }
    
            expect(paymentFormComponent.updatePaymentInfo.emit).toHaveBeenCalledWith(expectedPaymentInfo);
          });

          it('should not emit updateBillingAddress', () => {
            expect(paymentFormComponent.updateBillingAddress.emit).not.toHaveBeenCalled();
          });
        });
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

  describe('monthErrorStateMatcher.isErrorState', () => {

    let formControl;

    beforeEach(() => {
      formControl = new FormControl();
    });
    
    describe('when control.touched is true', () => {
      
      beforeEach(() => {
        formControl.touched = true;
      });

      describe('and control.value is Month', () => {
        
        beforeEach(() => {
          formControl.value = 'Month';            
        });

        it('should return true', () => {
          expect(paymentFormComponent.monthErrorStateMatcher.isErrorState(formControl, false)).toBeTruthy();
        });
      });

      describe('and value is not Month', () => {
        
        describe('and control has errors', () => {
          
          beforeEach(() => {
            formControl.errors = true;
          });

          it('should return true', () => {
            expect(paymentFormComponent.monthErrorStateMatcher.isErrorState(formControl, false)).toBeTruthy();              
          });
        });
        
        describe('and control has no errors', () => {
          
          beforeEach(() => {
            formControl.errors = false;
          });

          it('should return false', () => {
            expect(paymentFormComponent.monthErrorStateMatcher.isErrorState(formControl, false)).toBeFalsy();              
          });
        });
      });
    });

    describe('when control.touched is false', () => {

      let formSubmitted;
      
      beforeEach(() => {
        formControl.touched = false;
      });

      describe('and formSubmitted is true', () => {
        
        beforeEach(() => {
          formSubmitted = true;
        });

        describe('and control.value is Month', () => {
          
          beforeEach(() => {
            formControl.value = 'Month';
          });

          it('should return true', () => {
            expect(paymentFormComponent.monthErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeTruthy();              
          });
        });

        describe('and control.value is not Month', () => {
          
          describe('and control has errors', () => {
            
            beforeEach(() => {
              formControl.errors = true;
            });

            it('should return true', () => {
              expect(paymentFormComponent.monthErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeTruthy();              
            });
          });

          describe('and control has no errors', () => {
            
            beforeEach(() => {
              formControl.errors = false;
            });

            it('should return false', () => {
              expect(paymentFormComponent.monthErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeFalsy();              
            });
          });
        });
      });

      describe('and formSubmitted is false', () => {
        
        beforeEach(() => {
          formSubmitted = false;
        });

        it('should return false', () => {
          expect(paymentFormComponent.monthErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeFalsy();              
        });
      });
    });
  });

  describe('yearErrorStateMatcher.isErrorState', () => {

    let formControl;

    beforeEach(() => {
      formControl = new FormControl();
    });
    
    describe('when control.touched is true', () => {
      
      beforeEach(() => {
        formControl.touched = true;
      });

      describe('and control.value is Year', () => {
        
        beforeEach(() => {
          formControl.value = 'Year';            
        });

        it('should return true', () => {
          expect(paymentFormComponent.yearErrorStateMatcher.isErrorState(formControl, false)).toBeTruthy();
        });
      });

      describe('and value is not Year', () => {
        
        describe('and control has errors', () => {
          
          beforeEach(() => {
            formControl.errors = true;
          });

          it('should return true', () => {
            expect(paymentFormComponent.yearErrorStateMatcher.isErrorState(formControl, false)).toBeTruthy();              
          });
        });
        
        describe('and control has no errors', () => {
          
          beforeEach(() => {
            formControl.errors = false;
          });

          it('should return false', () => {
            expect(paymentFormComponent.yearErrorStateMatcher.isErrorState(formControl, false)).toBeFalsy();              
          });
        });
      });
    });

    describe('when control.touched is false', () => {

      let formSubmitted;
      
      beforeEach(() => {
        formControl.touched = false;
      });

      describe('and formSubmitted is true', () => {
        
        beforeEach(() => {
          formSubmitted = true;
        });

        describe('and control.value is Year', () => {
          
          beforeEach(() => {
            formControl.value = 'Year';
          });

          it('should return true', () => {
            expect(paymentFormComponent.yearErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeTruthy();              
          });
        });

        describe('and control.value is not Year', () => {
          
          describe('and control has errors', () => {
            
            beforeEach(() => {
              formControl.errors = true;
            });

            it('should return true', () => {
              expect(paymentFormComponent.yearErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeTruthy();              
            });
          });

          describe('and control has no errors', () => {
            
            beforeEach(() => {
              formControl.errors = false;
            });

            it('should return false', () => {
              expect(paymentFormComponent.yearErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeFalsy();              
            });
          });
        });
      });

      describe('and formSubmitted is false', () => {
        
        beforeEach(() => {
          formSubmitted = false;
        });

        it('should return false', () => {
          expect(paymentFormComponent.yearErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeFalsy();              
        });
      });
    });
  });

  describe('stateErrorStateMatcher.isErrorState', () => {

    let formControl;

    beforeEach(() => {
      formControl = new FormControl();
    });
    
    describe('when control.touched is true', () => {
      
      beforeEach(() => {
        formControl.touched = true;
      });

      describe('and control.value is State', () => {
        
        beforeEach(() => {
          formControl.value = 'State';            
        });

        it('should return true', () => {
          expect(paymentFormComponent.stateErrorStateMatcher.isErrorState(formControl, false)).toBeTruthy();
        });
      });

      describe('and value is not State', () => {
        
        describe('and control has errors', () => {
          
          beforeEach(() => {
            formControl.errors = true;
          });

          it('should return true', () => {
            expect(paymentFormComponent.stateErrorStateMatcher.isErrorState(formControl, false)).toBeTruthy();              
          });
        });
        
        describe('and control has no errors', () => {
          
          beforeEach(() => {
            formControl.errors = false;
          });

          it('should return false', () => {
            expect(paymentFormComponent.stateErrorStateMatcher.isErrorState(formControl, false)).toBeFalsy();              
          });
        });
      });
    });

    describe('when control.touched is false', () => {

      let formSubmitted;
      
      beforeEach(() => {
        formControl.touched = false;
      });

      describe('and formSubmitted is true', () => {
        
        beforeEach(() => {
          formSubmitted = true;
        });

        describe('and control.value is State', () => {
          
          beforeEach(() => {
            formControl.value = 'State';
          });

          it('should return true', () => {
            expect(paymentFormComponent.stateErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeTruthy();              
          });
        });

        describe('and control.value is not State', () => {
          
          describe('and control has errors', () => {
            
            beforeEach(() => {
              formControl.errors = true;
            });

            it('should return true', () => {
              expect(paymentFormComponent.stateErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeTruthy();              
            });
          });

          describe('and control has no errors', () => {
            
            beforeEach(() => {
              formControl.errors = false;
            });

            it('should return false', () => {
              expect(paymentFormComponent.stateErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeFalsy();              
            });
          });
        });
      });

      describe('and formSubmitted is false', () => {
        
        beforeEach(() => {
          formSubmitted = false;
        });

        it('should return false', () => {
          expect(paymentFormComponent.stateErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeFalsy();              
        });
      });
    });
  });

  describe('on [input-validator]', () => {

    let inputValidator: MockInputValidatorComponent;

    beforeEach(() => {
      inputValidator = fixture.debugElement.queryAll(By.css('[input-validator]'))[0].componentInstance;
    });
    
    it('should set formControl', () => {
      expect(<AbstractControl> inputValidator.formControl).toEqual(<AbstractControl> paymentFormComponent.form.controls['name']);
    });

    it('should set formSubmitted', () => {
      expect(inputValidator.formSubmitted).toBeFalsy();
    });

    describe('when form is submitted', () => {
      
      it('should change formSubmitted to true', () => {
        fixture.debugElement.query(By.css('button')).nativeElement.click();
        fixture.detectChanges();

        expect(inputValidator.formSubmitted).toBeTruthy();
      });
    });
  });

  describe('on [select-validator]', () => {

    let selectValidator: MockSelectValidatorComponent;

    beforeEach(() => {
      selectValidator = fixture.debugElement.queryAll(By.css('[select-validator]'))[0].componentInstance;
    });
    
    it('should set formControl', () => {
      expect(<AbstractControl> selectValidator.formControl).toEqual(<AbstractControl> paymentFormComponent.form.controls['month']);
    });

    it('should set formSubmitted', () => {
      expect(selectValidator.formSubmitted).toBeFalsy();
    });

    it('should set ErrorStateMatcher', () => {
      expect(selectValidator.errorStateMatcher).toEqual(paymentFormComponent.monthErrorStateMatcher);
    });

    describe('when form is submitted', () => {
      
      it('should change formSubmitted to true', () => {
        fixture.debugElement.query(By.css('button')).nativeElement.click();
        fixture.detectChanges();

        expect(selectValidator.formSubmitted).toBeTruthy();
      });
    });
  });
});
