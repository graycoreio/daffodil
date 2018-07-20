import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFormComponent } from './payment-form.component';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, AbstractControl } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ErrorStateMatcher } from '../../../../design/molecules/error-state-matcher/error-state-matcher.component';

@Component({'template': '<payment-form [paymentInfo]="paymentInfoValue" (updatePaymentInfo)="updatePaymentInfoFunction($event)"></payment-form>'})
class TestingPaymentFormComponentWrapper {
  paymentInfoValue;
  updatePaymentInfoFunction: Function;
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
