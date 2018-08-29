import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, AbstractControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffodilAddress } from '@daffodil/core';

import { ErrorStateMatcher } from '../../../../design/molecules/error-state-matcher/error-state-matcher.component';
import { ShippingFormComponent } from './shipping-form.component';

@Component({
  'template': '<shipping-form [shippingInfo]="shippingInfoValue" ' + 
                '[selectedShippingOptionId]="selectedShippingOptionIdValue" ' + 
                '[editMode]="editModeValue" ' + 
                '(updateShippingInfo)="onUpdateShippingInfoFunction($event)" ' + 
                '(continueToPayment)="continueToPaymentFunction()"></shipping-form>'
})
class TestingShippingFormComponentWrapper {
  shippingInfoValue: DaffodilAddress;
  selectedShippingOptionIdValue: number;
  editModeValue: boolean;
  onUpdateShippingInfoFunction: Function = () => {};
  continueToPaymentFunction: Function = () => {};
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

describe('ShippingFormComponent', () => {
  let component: TestingShippingFormComponentWrapper;
  let fixture: ComponentFixture<TestingShippingFormComponentWrapper>;
  let shippingFormComponent: ShippingFormComponent;
  let stubShippingInfo: DaffodilAddress;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ 
        TestingShippingFormComponentWrapper,
        ShippingFormComponent,
        MockInputValidatorComponent,
        MockSelectValidatorComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingShippingFormComponentWrapper);
    component = fixture.componentInstance;
    component.shippingInfoValue = stubShippingInfo;
    component.selectedShippingOptionIdValue = 0;
    component.editModeValue = false;
    fixture.detectChanges();

    shippingFormComponent = fixture.debugElement.query(By.css('shipping-form')).componentInstance;
  });

  it('should create', () => {
    expect(shippingFormComponent).toBeTruthy();
  });

  it('should be able to take shippingInfo as input', () => {
    expect(shippingFormComponent.shippingInfo).toEqual(component.shippingInfoValue);
  });

  it('should be able to take selectedShippingOptionId as input', () => {
    expect(shippingFormComponent.selectedShippingOptionId).toEqual(component.selectedShippingOptionIdValue);
  });

  it('should be able to take editMode as input', () => {
    expect(shippingFormComponent.editMode).toEqual(component.editModeValue);
  });

  describe('on [input-validator]', () => {

    let inputValidator: MockInputValidatorComponent;

    beforeEach(() => {
      inputValidator = fixture.debugElement.queryAll(By.css('[input-validator]'))[0].componentInstance;
    });
    
    it('should set formControl', () => {
      expect(<AbstractControl> inputValidator.formControl).toEqual(<AbstractControl> shippingFormComponent.form.controls['firstname']);
    });

    it('should set formSubmitted', () => {
      expect(inputValidator.formSubmitted).toBeFalsy();
    });

    describe('when form is submitted', () => {
      
      it('should change formSubmitted to true', () => {
        shippingFormComponent.editMode = true
        fixture.debugElement.query(By.css('button')).nativeElement.click();
        fixture.detectChanges();

        expect(inputValidator.formSubmitted).toBeTruthy();
      });
    });
  });

  describe('on [select-validator]', () => {

    let selectValidator: MockSelectValidatorComponent;

    beforeEach(() => {
      selectValidator = fixture.debugElement.query(By.css('[select-validator]')).componentInstance;
    });
    
    it('should set formControl', () => {
      expect(<AbstractControl> selectValidator.formControl).toEqual(<AbstractControl> shippingFormComponent.form.controls['state']);
    });

    it('should set formSubmitted', () => {
      expect(selectValidator.formSubmitted).toBeFalsy();
    });

    it('should set ErrorStateMatcher', () => {
      expect(selectValidator.errorStateMatcher).toEqual(shippingFormComponent.stateErrorStateMatcher);
    });

    describe('when form is submitted', () => {
      
      it('should change formSubmitted to true', () => {
        fixture.debugElement.query(By.css('button')).nativeElement.click();
        fixture.detectChanges();

        expect(selectValidator.formSubmitted).toBeTruthy();
      });
    });
  });

  describe('ngOnInit', () => {

    describe('when shippingInfo is defined', () => {

      beforeEach(() => {
        
        fixture = TestBed.createComponent(TestingShippingFormComponentWrapper);
        component = fixture.componentInstance;
        component.shippingInfoValue = {
          firstname: 'test',
          lastname: 'test',
          street: 'test',
          city: 'test',
          state: 'test',
          postcode: 'test',
          telephone: 'test'
        };
        fixture.detectChanges();

        shippingFormComponent = fixture.debugElement.query(By.css('shipping-form')).componentInstance;
      });
      
      it('sets form.value to shippingInfo', () => {
        expect(<DaffodilAddress>shippingFormComponent.form.value).toEqual(component.shippingInfoValue);
      });
    });

    describe('when shippingInfo is null', () => {
      
      it('sets form.value to default', () => {
        let defaultValues = {
          firstname: '',
          lastname: '',
          street: '',
          city: '',
          state: 'State',
          postcode: '',
          telephone: ''
        }

        expect(shippingFormComponent.form.value).toEqual(defaultValues);
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
            expect(shippingFormComponent.stateErrorStateMatcher.isErrorState(formControl, false)).toBeTruthy();
          });
        });

        describe('and value is not State', () => {
          
          describe('and control has errors', () => {
            
            beforeEach(() => {
              formControl.errors = true;
            });

            it('should return true', () => {
              expect(shippingFormComponent.stateErrorStateMatcher.isErrorState(formControl, false)).toBeTruthy();              
            });
          });
          
          describe('and control has no errors', () => {
            
            beforeEach(() => {
              formControl.errors = false;
            });

            it('should return false', () => {
              expect(shippingFormComponent.stateErrorStateMatcher.isErrorState(formControl, false)).toBeFalsy();              
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
              expect(shippingFormComponent.stateErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeTruthy();              
            });
          });

          describe('and control.value is not State', () => {
            
            describe('and control has errors', () => {
              
              beforeEach(() => {
                formControl.errors = true;
              });

              it('should return true', () => {
                expect(shippingFormComponent.stateErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeTruthy();              
              });
            });

            describe('and control has no errors', () => {
              
              beforeEach(() => {
                formControl.errors = false;
              });

              it('should return false', () => {
                expect(shippingFormComponent.stateErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeFalsy();              
              });
            });
          });
        });

        describe('and formSubmitted is false', () => {
          
          beforeEach(() => {
            formSubmitted = false;
          });

          it('should return false', () => {
            expect(shippingFormComponent.stateErrorStateMatcher.isErrorState(formControl, formSubmitted)).toBeFalsy();              
          });
        });
      });
    });
  });

  describe('when selectedShippingOptionId is null', () => {

    beforeEach(() => {
      shippingFormComponent.selectedShippingOptionId = null;
      fixture.detectChanges();
    });
    
    it('should disable the submit button', () => {
      let submitButton = fixture.debugElement.query(By.css('button'));

      expect(submitButton.nativeElement.disabled).toBeTruthy();
    });
  });

  describe('when selectedShippingOptionId is defined', () => {
    
    describe('and submit button is clicked', () => {

      beforeEach(() => {
        spyOn(shippingFormComponent, 'onSubmit');
        let submitButton = fixture.debugElement.query(By.css('button'));
        submitButton.nativeElement.click();
      });

      it('should call onSubmit a form', () => {
        expect(shippingFormComponent.onSubmit).toHaveBeenCalledWith(jasmine.any(FormGroup))
      });
    });
  });

  describe('onSubmit', () => {
    
    describe('when form is valid', () => {

      beforeEach(() => {
        fixture = TestBed.createComponent(TestingShippingFormComponentWrapper);
        component = fixture.componentInstance;
        component.shippingInfoValue = {
          firstname: 'valid',
          lastname: 'valid',
          street: 'valid',
          city: 'valid',
          state: 'valid',
          postcode: 'valid',
          telephone: 'valid'
        };
        fixture.detectChanges();

        shippingFormComponent = fixture.debugElement.query(By.css('shipping-form')).componentInstance;
        spyOn(shippingFormComponent.updateShippingInfo, 'emit');
        spyOn(shippingFormComponent.continueToPayment, 'emit');

        shippingFormComponent.onSubmit(shippingFormComponent.form);
      });
      
      it('should call updateShippingInfo.emit', () => {
        expect(shippingFormComponent.updateShippingInfo.emit).toHaveBeenCalledWith(shippingFormComponent.form.value);
      });
      
      it('should call continueToPayment.emit', () => {
        expect(shippingFormComponent.continueToPayment.emit).toHaveBeenCalled();
      });
    });

    describe('when form is invalid', () => {
      
      it('should not call updateShippingInfo.emit', () => {
        spyOn(shippingFormComponent.updateShippingInfo, 'emit');
        
        shippingFormComponent.onSubmit(shippingFormComponent.form);

        expect(shippingFormComponent.updateShippingInfo.emit).not.toHaveBeenCalled();
      });
      
      it('should not call continueToPayment.emit', () => {
        spyOn(shippingFormComponent.continueToPayment, 'emit');
        
        shippingFormComponent.onSubmit(shippingFormComponent.form);

        expect(shippingFormComponent.continueToPayment.emit).not.toHaveBeenCalled();
      });
    });
  });

  describe('when updateShippingInfo event is emitted', () => {

    let emittedValue;

    beforeEach(() => {
      emittedValue = 'emittedValue';
      spyOn(component, 'onUpdateShippingInfoFunction');
      
      shippingFormComponent.updateShippingInfo.emit(emittedValue);
    });
    
    it('should call the function passed in by the host component', () => {
      expect(component.onUpdateShippingInfoFunction).toHaveBeenCalledWith(emittedValue);
    });
  });

  describe('when continueToPayment is emitted', () => {
    
    it('should call function passed by host component', () => {
      spyOn(component, "continueToPaymentFunction");

      shippingFormComponent.continueToPayment.emit();

      expect(component.continueToPaymentFunction).toHaveBeenCalled();
    });
  });

  describe('when editMode is false', () => {
    
    it('should set button text to Continue to Payment', () => {
      let buttonText = fixture.debugElement.query(By.css('button')).nativeElement.innerHTML;
      expect(buttonText).toEqual('Continue to Payment')
    });
  });

  describe('when editMode is true', () => {
    
    let buttonText;
    
    beforeEach(() => {
      shippingFormComponent.editMode = true;
      fixture.detectChanges();
      buttonText = fixture.debugElement.query(By.css('button')).nativeElement.innerHTML;
    });
    
    it('should set button text to Save', () => {
      expect(buttonText).toEqual('Save');
    });
  });
});
