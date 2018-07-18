import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFormComponent } from './payment-form.component';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

@Component({'template': '<payment-form [paymentInfo]="paymentInfoValue" (updatePaymentInfo)="updatePaymentInfoFunction($event)"></payment-form>'})
class TestingPaymentFormComponentWrapper {
  paymentInfoValue;
  updatePaymentInfoFunction: Function;
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ 
        TestingPaymentFormComponentWrapper,
        PromotionComponentMock,
        PaymentFormComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    stubPaymentInfo = null;

    fixture = TestBed.createComponent(TestingPaymentFormComponentWrapper);
    component = fixture.componentInstance;
    component.paymentInfoValue = stubPaymentInfo;
    component.updatePaymentInfoFunction = () => {};
    fixture.detectChanges();

    paymentFormComponent = fixture.debugElement.query(By.css('payment-form')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take paymentInfo as input', () => {
    expect(paymentFormComponent.paymentInfo).toEqual(stubPaymentInfo);
  });

  describe('ngOnInit', () => {

    describe('when paymentInfo is defined', () => {

      beforeEach(() => {
        fixture = TestBed.createComponent(TestingPaymentFormComponentWrapper);
        component = fixture.componentInstance;
        component.paymentInfoValue = {
          name: 'test',
          cardnumber: 'test',
          month: 'test',
          year: 'test',
          securitycode: 'test'
        };
        fixture.detectChanges();

        paymentFormComponent = fixture.debugElement.query(By.css('payment-form')).componentInstance;
      });
      
      it('sets form.value to paymentInfo', () => {
        expect(paymentFormComponent.form.value).toEqual(component.paymentInfoValue);
      });
    });

    describe('when paymentInfo is null', () => {
      
      it('sets form.value to default', () => {
        let defaultValues = {
          name: '',
          cardnumber: '',
          month: 'Month',
          year: 'Year',
          securitycode: ''
        }

        expect(paymentFormComponent.form.value).toEqual(defaultValues);
      });
    });

    describe('initializes a form control', () => {
      
      it('for name', () => {
        expect(paymentFormComponent.name).toEqual(jasmine.any(FormControl));
      });

      it('for cardnumber', () => {
        expect(paymentFormComponent.cardnumber).toEqual(jasmine.any(FormControl));
      });

      it('for month', () => {
        expect(paymentFormComponent.month).toEqual(jasmine.any(FormControl));
      });

      it('for year', () => {
        expect(paymentFormComponent.year).toEqual(jasmine.any(FormControl));
      });

      it('for securitycode', () => {
        expect(paymentFormComponent.securitycode).toEqual(jasmine.any(FormControl));
      });
    });
  });

  describe('when submit button is clicked', () => {
    
    it('should call onSubmit', () => {
      spyOn(paymentFormComponent, 'onSubmit');
      fixture.debugElement.query(By.css('button')).nativeElement.click();

      expect(paymentFormComponent.onSubmit).toHaveBeenCalledWith(paymentFormComponent.form);
    });
  });

  describe('onSubmit', () => {

    beforeEach(() => {
      spyOn(paymentFormComponent.updatePaymentInfo, 'emit');      
    });

    describe('when form is valid', () => {
    
      it('should emit updatePaymentInfo', () => {
        paymentFormComponent.form.setValue({
          name: 'test',
          cardnumber: 'test',
          month: 'test',
          year: 'test',
          securitycode: 'test'
        });
        fixture.detectChanges();
        paymentFormComponent.onSubmit(paymentFormComponent.form);

        expect(paymentFormComponent.updatePaymentInfo.emit).toHaveBeenCalledWith(paymentFormComponent.form.value);
      });
    });

    describe('when form is invalid', () => {
      
      it('should not emit updatePaymentInfo', () => {
        fixture.detectChanges();
        paymentFormComponent.onSubmit(paymentFormComponent.form);

        expect(paymentFormComponent.updatePaymentInfo.emit).not.toHaveBeenCalled();
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

  describe('name input', () => {

    let nameInput;

    beforeEach(() => {
      nameInput = fixture.debugElement.query(By.css('.payment-form__name'));
    });
    
    describe('when it has not been touched', () => {
      
      describe('and has no input', () => {
        
        it('should not have the error class', () => {
          expect(nameInput.nativeElement.classList.contains('payment-form__error')).toBeFalsy();
        });

        it('should not have the valid class', () => {
          expect(nameInput.nativeElement.classList.contains('payment-form__valid')).toBeFalsy();
        });

        describe('and form is submitted', () => {

          beforeEach(() => {
            fixture.debugElement.query(By.css('button')).nativeElement.click();
            fixture.detectChanges();
          });
        
          it('should have the error class', () => {
            expect(nameInput.nativeElement.classList.contains('payment-form__error')).toBeTruthy();
          });
  
          it('should not have the valid class', () => {
            expect(nameInput.nativeElement.classList.contains('payment-form__valid')).toBeFalsy();
          });
        });
      });
    });

    describe('when it has been touched', () => {

      beforeEach(() => {
        paymentFormComponent.form.controls.name.markAsTouched();
        fixture.detectChanges();
      });
      
      describe('and has no input', () => {
        
        it('should have the error class', () => {
          expect(nameInput.nativeElement.classList.contains('payment-form__error')).toBeTruthy();
        });

        it('should not have the valid class', () => {
          expect(nameInput.nativeElement.classList.contains('payment-form__valid')).toBeFalsy();
        });
      });

      describe('and has input', () => {

        beforeEach(() => {
          paymentFormComponent.name.setValue("name");
          fixture.detectChanges();
        });
        
        it('should not have the error class', () => {
          expect(nameInput.nativeElement.classList.contains('payment-form__error')).toBeFalsy();
        });

        it('should have the valid class', () => {
          expect(nameInput.nativeElement.classList.contains('payment-form__valid')).toBeTruthy();
        });
      });
    });
  });

  describe('card-number input', () => {

    let cardNumberInput;

    beforeEach(() => {
      cardNumberInput = fixture.debugElement.query(By.css('.payment-form__card-number'));
    });
    
    describe('when it has not been touched', () => {
      
      describe('and has no input', () => {
        
        it('should not have the error class', () => {
          expect(cardNumberInput.nativeElement.classList.contains('payment-form__error')).toBeFalsy();
        });

        it('should not have the valid class', () => {
          expect(cardNumberInput.nativeElement.classList.contains('payment-form__valid')).toBeFalsy();
        });

        describe('and form is submitted', () => {

          beforeEach(() => {
            fixture.debugElement.query(By.css('button')).nativeElement.click();
            fixture.detectChanges();
          });
        
          it('should have the error class', () => {
            expect(cardNumberInput.nativeElement.classList.contains('payment-form__error')).toBeTruthy();
          });
  
          it('should not have the valid class', () => {
            expect(cardNumberInput.nativeElement.classList.contains('payment-form__valid')).toBeFalsy();
          });
        });
      });
    });

    describe('when it has been touched', () => {

      beforeEach(() => {
        paymentFormComponent.form.controls.cardnumber.markAsTouched();
        fixture.detectChanges();
      });
      
      describe('and has no input', () => {
        
        it('should have the error class', () => {
          expect(cardNumberInput.nativeElement.classList.contains('payment-form__error')).toBeTruthy();
        });

        it('should not have the valid class', () => {
          expect(cardNumberInput.nativeElement.classList.contains('payment-form__valid')).toBeFalsy();
        });
      });

      describe('and has input', () => {

        beforeEach(() => {
          paymentFormComponent.cardnumber.setValue("cardNumber");
          fixture.detectChanges();
        });
        
        it('should not have the error class', () => {
          expect(cardNumberInput.nativeElement.classList.contains('payment-form__error')).toBeFalsy();
        });

        it('should have the valid class', () => {
          expect(cardNumberInput.nativeElement.classList.contains('payment-form__valid')).toBeTruthy();
        });
      });
    });
  });

  describe('month input', () => {
      
    let monthInput;

    beforeEach(() => {
      monthInput = fixture.debugElement.query(By.css('.payment-form__month'));
    });

    it('should have a default value of "Month"', () => {
      expect(paymentFormComponent.form.controls.month.value).toEqual('Month');
    });
    
    describe('when it has not been touched', () => {
      
      describe('and has default input', () => {
        
        it('should not have the error class', () => {
          expect(monthInput.nativeElement.classList.contains('payment-form__error')).toBeFalsy();
        });

        it('should not have the valid class', () => {
          expect(monthInput.nativeElement.classList.contains('payment-form__valid')).toBeFalsy();
        });

        describe('and form is submitted', () => {

          beforeEach(() => {
            fixture.debugElement.query(By.css('button')).nativeElement.click();
            fixture.detectChanges();
          });
        
          it('should have the error class', () => {
            expect(monthInput.nativeElement.classList.contains('payment-form__error')).toBeTruthy();
          });
  
          it('should not have the valid class', () => {
            expect(monthInput.nativeElement.classList.contains('payment-form__valid')).toBeFalsy();
          });
        });
      });
    });

    describe('when it has been touched', () => {

      beforeEach(() => {
        paymentFormComponent.form.controls.month.markAsTouched();
        fixture.detectChanges();
      });
      
      describe('and has default input', () => {
        
        it('should have the error class', () => {
          expect(monthInput.nativeElement.classList.contains('payment-form__error')).toBeTruthy();
        });

        it('should not have the valid class', () => {
          expect(monthInput.nativeElement.classList.contains('payment-form__valid')).toBeFalsy();
        });
      });

      describe('and does not have the default input', () => {

        beforeEach(() => {
          paymentFormComponent.month.setValue("not default");
          fixture.detectChanges();
        });
        
        it('should not have the error class', () => {
          expect(monthInput.nativeElement.classList.contains('payment-form__error')).toBeFalsy();
        });

        it('should have the valid class', () => {
          expect(monthInput.nativeElement.classList.contains('payment-form__valid')).toBeTruthy();
        });
      });
    });
  });

  describe('year input', () => {
      
    let yearInput;

    beforeEach(() => {
      yearInput = fixture.debugElement.query(By.css('.payment-form__year'));
    });

    it('should have a default value of "Year"', () => {
      expect(paymentFormComponent.form.controls.year.value).toEqual('Year');
    });
    
    describe('when it has not been touched', () => {
      
      describe('and has default input', () => {
        
        it('should not have the error class', () => {
          expect(yearInput.nativeElement.classList.contains('payment-form__error')).toBeFalsy();
        });

        it('should not have the valid class', () => {
          expect(yearInput.nativeElement.classList.contains('payment-form__valid')).toBeFalsy();
        });

        describe('and form is submitted', () => {

          beforeEach(() => {
            fixture.debugElement.query(By.css('button')).nativeElement.click();
            fixture.detectChanges();
          });
        
          it('should have the error class', () => {
            expect(yearInput.nativeElement.classList.contains('payment-form__error')).toBeTruthy();
          });
  
          it('should not have the valid class', () => {
            expect(yearInput.nativeElement.classList.contains('payment-form__valid')).toBeFalsy();
          });
        });
      });
    });

    describe('when it has been touched', () => {

      beforeEach(() => {
        paymentFormComponent.form.controls.year.markAsTouched();
        fixture.detectChanges();
      });
      
      describe('and has default input', () => {
        
        it('should have the error class', () => {
          expect(yearInput.nativeElement.classList.contains('payment-form__error')).toBeTruthy();
        });

        it('should not have the valid class', () => {
          expect(yearInput.nativeElement.classList.contains('payment-form__valid')).toBeFalsy();
        });
      });

      describe('and does not have the default input', () => {

        beforeEach(() => {
          paymentFormComponent.year.setValue("not default");
          fixture.detectChanges();
        });
        
        it('should not have the error class', () => {
          expect(yearInput.nativeElement.classList.contains('payment-form__error')).toBeFalsy();
        });

        it('should have the valid class', () => {
          expect(yearInput.nativeElement.classList.contains('payment-form__valid')).toBeTruthy();
        });
      });
    });
  });

  describe('security-code input', () => {

    let securityCodeInput;

    beforeEach(() => {
      securityCodeInput = fixture.debugElement.query(By.css('.payment-form__security-code'));
    });
    
    describe('when it has not been touched', () => {
      
      describe('and has no input', () => {
        
        it('should not have the error class', () => {
          expect(securityCodeInput.nativeElement.classList.contains('payment-form__error')).toBeFalsy();
        });

        it('should not have the valid class', () => {
          expect(securityCodeInput.nativeElement.classList.contains('payment-form__valid')).toBeFalsy();
        });

        describe('and form is submitted', () => {

          beforeEach(() => {
            fixture.debugElement.query(By.css('button')).nativeElement.click();
            fixture.detectChanges();
          });
        
          it('should have the error class', () => {
            expect(securityCodeInput.nativeElement.classList.contains('payment-form__error')).toBeTruthy();
          });
  
          it('should not have the valid class', () => {
            expect(securityCodeInput.nativeElement.classList.contains('payment-form__valid')).toBeFalsy();
          });
        });
      });
    });

    describe('when it has been touched', () => {

      beforeEach(() => {
        paymentFormComponent.form.controls.securitycode.markAsTouched();
        fixture.detectChanges();
      });
      
      describe('and has no input', () => {
        
        it('should have the error class', () => {
          expect(securityCodeInput.nativeElement.classList.contains('payment-form__error')).toBeTruthy();
        });

        it('should not have the valid class', () => {
          expect(securityCodeInput.nativeElement.classList.contains('payment-form__valid')).toBeFalsy();
        });
      });

      describe('and has input', () => {

        beforeEach(() => {
          paymentFormComponent.securitycode.setValue("securityCode");
          fixture.detectChanges();
        });
        
        it('should not have the error class', () => {
          expect(securityCodeInput.nativeElement.classList.contains('payment-form__error')).toBeFalsy();
        });

        it('should have the valid class', () => {
          expect(securityCodeInput.nativeElement.classList.contains('payment-form__valid')).toBeTruthy();
        });
      });
    });
  });
});
