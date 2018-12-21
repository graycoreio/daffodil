import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, AbstractControl, Validators, FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ErrorStateMatcher } from '@daffodil/design';
import { AddressFormComponent } from './address-form.component';

@Component({
  template: '<demo-address-form [formGroup]="formGroupValue" ' + 
                '[submitted]="submittedValue"></demo-address-form>'
})
class TestingAddressFormComponentWrapper {
  formGroupValue: FormGroup;
  submittedValue: boolean;
}

@Component({selector: '[input-validator]', template: ''})
class MockInputValidatorComponent {
  @Input() formControl: FormControl;
  @Input() formSubmitted: boolean;
}

@Component({selector: '[select-validator]', template: ''})
class MockSelectValidatorComponent {
  @Input() formControl: FormControl;
  @Input() formSubmitted: boolean;
  @Input() errorStateMatcher: ErrorStateMatcher;
}

describe('AddressFormComponent', () => {
  let component: TestingAddressFormComponentWrapper;
  let fixture: ComponentFixture<TestingAddressFormComponentWrapper>;
  let addressForm: AddressFormComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ 
        TestingAddressFormComponentWrapper,
        AddressFormComponent,
        MockInputValidatorComponent,
        MockSelectValidatorComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingAddressFormComponentWrapper);
    component = fixture.componentInstance;
    let formBuilder = new FormBuilder
    component.formGroupValue = formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['State', Validators.required],
      postcode: ['', Validators.required],
      telephone: ['', Validators.required]
    });

    component.submittedValue = false;

    fixture.detectChanges();

    addressForm = fixture.debugElement.query(By.css('demo-address-form')).componentInstance;
  });

  it('should create', () => {
    expect(addressForm).toBeTruthy();
  });

  it('should be able to take formGroup as input', () => {
    expect(addressForm.formGroup).toEqual(component.formGroupValue);
  });

  it('should be able to take submitted as input', () => {
    expect(addressForm.submitted).toEqual(component.submittedValue);
  });

  describe('on [input-validator]', () => {

    let inputValidator: MockInputValidatorComponent;

    beforeEach(() => {
      inputValidator = fixture.debugElement.queryAll(By.css('[input-validator]'))[0].componentInstance;
    });
    
    it('should set formControl', () => {
      expect(<AbstractControl> inputValidator.formControl).toEqual(<AbstractControl> addressForm.formGroup.controls['firstname']);
    });

    it('should set formSubmitted', () => {
      expect(inputValidator.formSubmitted).toEqual(addressForm.submitted);
    });
  });

  describe('on [select-validator]', () => {

    let selectValidator: MockSelectValidatorComponent;

    beforeEach(() => {
      selectValidator = fixture.debugElement.query(By.css('[select-validator]')).componentInstance;
    });
    
    it('should set formControl', () => {
      expect(<AbstractControl> selectValidator.formControl).toEqual(<AbstractControl> addressForm.formGroup.controls['state']);
    });

    it('should set formSubmitted', () => {
      expect(selectValidator.formSubmitted).toEqual(addressForm.submitted);
    });

    it('should set ErrorStateMatcher', () => {
      expect(selectValidator.errorStateMatcher).toEqual(addressForm.stateErrorStateMatcher);
    });
  });

  describe('ngOnInit', () => {

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
            expect(addressForm.stateErrorStateMatcher.isErrorState(formControl, false)).toBeTruthy();
          });
        });

        describe('and value is not State', () => {
          
          describe('and control has errors', () => {
            
            beforeEach(() => {
              formControl.errors = true;
            });

            it('should return true', () => {
              expect(addressForm.stateErrorStateMatcher.isErrorState(formControl, false)).toBeTruthy();              
            });
          });
          
          describe('and control has no errors', () => {
            
            beforeEach(() => {
              formControl.errors = false;
            });

            it('should return false', () => {
              expect(addressForm.stateErrorStateMatcher.isErrorState(formControl, false)).toBeFalsy();              
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
              expect(addressForm.stateErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeTruthy();              
            });
          });

          describe('and control.value is not State', () => {
            
            describe('and control has errors', () => {
              
              beforeEach(() => {
                formControl.errors = true;
              });

              it('should return true', () => {
                expect(addressForm.stateErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeTruthy();              
              });
            });

            describe('and control has no errors', () => {
              
              beforeEach(() => {
                formControl.errors = false;
              });

              it('should return false', () => {
                expect(addressForm.stateErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeFalsy();              
              });
            });
          });
        });

        describe('and formSubmitted is false', () => {
          
          beforeEach(() => {
            formSubmitted = false;
          });

          it('should return false', () => {
            expect(addressForm.stateErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeFalsy();              
          });
        });
      });
    });
  });
});
