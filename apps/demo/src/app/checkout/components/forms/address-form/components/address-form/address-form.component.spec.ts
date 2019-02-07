import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, AbstractControl, Validators, FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffErrorStateMatcher } from '@daffodil/design';
import { AddressFormComponent } from './address-form.component';

@Component({
  template: '<demo-address-form [formGroup]="formGroupValue" ' + 
                '[submitted]="submittedValue"></demo-address-form>'
})
class WrapperComponent {
  formGroupValue: FormGroup;
  submittedValue: boolean;
}

// tslint:disable-next-line: component-selector
@Component({selector: '[daff-input-validator]', template: ''})
class MockInputValidatorComponent {
  @Input() formControl: FormControl;
  @Input() formSubmitted: boolean;
}

// tslint:disable-next-line: component-selector
@Component({selector: '[daff-select-validator]', template: ''})
class MockSelectValidatorComponent {
  @Input() formControl: FormControl;
  @Input() formSubmitted: boolean;
  @Input() errorStateMatcher: DaffErrorStateMatcher;
}

describe('AddressFormComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let addressForm: AddressFormComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ 
        WrapperComponent,
        AddressFormComponent,
        MockInputValidatorComponent,
        MockSelectValidatorComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    const formBuilder = new FormBuilder
    wrapper.formGroupValue = formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['State', Validators.required],
      postcode: ['', Validators.required],
      telephone: ['', Validators.required]
    });

    wrapper.submittedValue = false;

    fixture.detectChanges();

    addressForm = fixture.debugElement.query(By.css('demo-address-form')).componentInstance;
  });

  it('should create', () => {
    expect(addressForm).toBeTruthy();
  });

  it('should be able to take formGroup as input', () => {
    expect(addressForm.formGroup).toEqual(wrapper.formGroupValue);
  });

  it('should be able to take submitted as input', () => {
    expect(addressForm.submitted).toEqual(wrapper.submittedValue);
  });

  describe('on [daff-input-validator]', () => {

    let inputValidator: MockInputValidatorComponent;

    beforeEach(() => {
      inputValidator = fixture.debugElement.queryAll(By.css('[daff-input-validator]'))[0].componentInstance;
    });
    
    it('should set formControl', () => {
      expect(<AbstractControl> inputValidator.formControl).toEqual(<AbstractControl> addressForm.formGroup.controls['firstname']);
    });

    it('should set formSubmitted', () => {
      expect(inputValidator.formSubmitted).toEqual(addressForm.submitted);
    });
  });

  describe('on [daff-select-validator]', () => {

    let selectValidator: MockSelectValidatorComponent;

    beforeEach(() => {
      selectValidator = fixture.debugElement.query(By.css('[daff-select-validator]')).componentInstance;
    });
    
    it('should set formControl', () => {
      expect(<AbstractControl> selectValidator.formControl).toEqual(<AbstractControl> addressForm.formGroup.controls['state']);
    });

    it('should set formSubmitted', () => {
      expect(selectValidator.formSubmitted).toEqual(addressForm.submitted);
    });

    it('should set DaffErrorStateMatcher', () => {
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
