import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, AbstractControl, FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { 
  DaffSelectModule, 
  DaffInputModule, 
  DaffInputComponent,
  DaffSelectValidatorComponent,
  DaffFormFieldModule
} from '@daffodil/design';
import { PaymentInfoFormComponent } from './payment-info-form.component';
import { PaymentInfoFormFactory } from '../../factories/payment-info-form.factory';

@Component({
  template: '<demo-payment-info-form [formGroup]="formGroupValue" ' + 
                '[submitted]="submittedValue"></demo-payment-info-form>'
})
class WrapperComponent {
  formGroupValue: FormGroup;
  submittedValue: boolean;
}

describe('PaymentInfoFormComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let paymentInfoForm: PaymentInfoFormComponent;
  const paymentInfoFormFactory = new PaymentInfoFormFactory(new FormBuilder());
  const paymentInfoGroup = paymentInfoFormFactory.create(null);
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        DaffSelectModule,
        DaffInputModule,
        DaffFormFieldModule
      ],
      declarations: [ 
        WrapperComponent,
        PaymentInfoFormComponent
      ]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.formGroupValue = paymentInfoGroup;

    wrapper.submittedValue = false;

    fixture.detectChanges();

    paymentInfoForm = fixture.debugElement.query(By.css('demo-payment-info-form')).componentInstance;
  });

  it('should create', () => {
    expect(paymentInfoForm).toBeTruthy();
  });

  it('should be able to take formGroup as input', () => {
    expect(paymentInfoForm.formGroup).toEqual(wrapper.formGroupValue);
  });

  it('should be able to take submitted as input', () => {
    expect(paymentInfoForm.submitted).toEqual(wrapper.submittedValue);
  });

  describe('on [daff-input]', () => {

    let inputValidator: DaffInputComponent;

    beforeEach(() => {
      inputValidator = fixture.debugElement.queryAll(By.css('[daff-input]'))[0].componentInstance;
    });
    
    it('should set formControl', () => {
      expect(<AbstractControl> inputValidator.formControl).toEqual(<AbstractControl> paymentInfoForm.formGroup.controls['name']);
    });

    it('should set formSubmitted', () => {
      expect(inputValidator.formSubmitted).toEqual(paymentInfoForm.submitted);
    });
  });

  describe('on month [daff-select-validator]', () => {

    let monthSelectValidator: DaffSelectValidatorComponent;

    beforeEach(() => {
      monthSelectValidator = fixture.debugElement.queryAll(By.css('[daff-select-validator]'))[0].componentInstance;
    });
    
    it('should set formControl', () => {
      expect(<AbstractControl> monthSelectValidator.formControl).toEqual(<AbstractControl> paymentInfoForm.formGroup.controls['month']);
    });

    it('should set formSubmitted', () => {
      expect(monthSelectValidator.formSubmitted).toEqual(paymentInfoForm.submitted);
    });

    it('should set ErrorStateMatcher', () => {
      expect(monthSelectValidator.errorStateMatcher).toEqual(paymentInfoForm.monthErrorStateMatcher);
    });
  });

  describe('on year [daff-select-validator]', () => {

    let yearSelectValidator: DaffSelectValidatorComponent;

    beforeEach(() => {
      yearSelectValidator = fixture.debugElement.queryAll(By.css('[daff-select-validator]'))[1].componentInstance;
    });
    
    it('should set formControl', () => {
      expect(<AbstractControl> yearSelectValidator.formControl).toEqual(<AbstractControl> paymentInfoForm.formGroup.controls['year']);
    });

    it('should set formSubmitted', () => {
      expect(yearSelectValidator.formSubmitted).toEqual(paymentInfoForm.submitted);
    });

    it('should set ErrorStateMatcher', () => {
      expect(yearSelectValidator.errorStateMatcher).toEqual(paymentInfoForm.yearErrorStateMatcher);
    });
  });

  describe('ngOnInit', () => {

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
            expect(paymentInfoForm.monthErrorStateMatcher.isErrorState(formControl, false)).toBeTruthy();
          });
        });

        describe('and value is not Month', () => {
          
          describe('and control has errors', () => {
            
            beforeEach(() => {
              formControl.errors = true;
            });

            it('should return true', () => {
              expect(paymentInfoForm.monthErrorStateMatcher.isErrorState(formControl, false)).toBeTruthy();              
            });
          });
          
          describe('and control has no errors', () => {
            
            beforeEach(() => {
              formControl.errors = false;
            });

            it('should return false', () => {
              expect(paymentInfoForm.monthErrorStateMatcher.isErrorState(formControl, false)).toBeFalsy();              
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
              expect(paymentInfoForm.monthErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeTruthy();              
            });
          });

          describe('and control.value is not Month', () => {
            
            describe('and control has errors', () => {
              
              beforeEach(() => {
                formControl.value = 'Not Month';
                formControl.errors = true;
              });

              it('should return true', () => {
                expect(paymentInfoForm.monthErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeTruthy();              
              });
            });

            describe('and control has no errors', () => {
              
              beforeEach(() => {
                formControl.errors = false;
              });

              it('should return false', () => {
                expect(paymentInfoForm.monthErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeFalsy();              
              });
            });
          });
        });

        describe('and formSubmitted is false', () => {
          
          beforeEach(() => {
            formSubmitted = false;
          });

          it('should return false', () => {
            expect(paymentInfoForm.monthErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeFalsy();              
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
            expect(paymentInfoForm.yearErrorStateMatcher.isErrorState(formControl, false)).toBeTruthy();
          });
        });

        describe('and value is not Year', () => {
          
          describe('and control has errors', () => {
            
            beforeEach(() => {
              formControl.errors = true;
            });

            it('should return true', () => {
              expect(paymentInfoForm.yearErrorStateMatcher.isErrorState(formControl, false)).toBeTruthy();              
            });
          });
          
          describe('and control has no errors', () => {
            
            beforeEach(() => {
              formControl.errors = false;
            });

            it('should return false', () => {
              expect(paymentInfoForm.yearErrorStateMatcher.isErrorState(formControl, false)).toBeFalsy();              
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
              expect(paymentInfoForm.yearErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeTruthy();              
            });
          });

          describe('and control.value is not Year', () => {
            
            describe('and control has errors', () => {
              
              beforeEach(() => {
                formControl.value = 'Not Year';
                formControl.errors = true;
              });

              it('should return true', () => {
                expect(paymentInfoForm.yearErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeTruthy();              
              });
            });

            describe('and control has no errors', () => {
              
              beforeEach(() => {
                formControl.errors = false;
              });

              it('should return false', () => {
                expect(paymentInfoForm.yearErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeFalsy();              
              });
            });
          });
        });

        describe('and formSubmitted is false', () => {
          
          beforeEach(() => {
            formSubmitted = false;
          });

          it('should return false', () => {
            expect(paymentInfoForm.yearErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeFalsy();              
          });
        });
      });
    });
  });
});
