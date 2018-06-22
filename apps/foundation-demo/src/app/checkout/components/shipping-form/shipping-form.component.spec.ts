import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingFormComponent } from './shipping-form.component';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { ShippingAddress } from '@daffodil/core';

@Component({'template': '<shipping-form [shippingInfo]="shippingInfoValue" (updateShippingInfo)="updateShippingInfoFunction($event)"></shipping-form>'})
class TestingShippingFormComponentWrapper {
  shippingInfoValue: ShippingAddress;
  updateShippingInfoFunction: Function;
}

describe('ShippingFormComponent', () => {
  let component: TestingShippingFormComponentWrapper;
  let fixture: ComponentFixture<TestingShippingFormComponentWrapper>;
  let shippingFormComponent: ShippingFormComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ 
        TestingShippingFormComponentWrapper,
        ShippingFormComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingShippingFormComponentWrapper);
    component = fixture.componentInstance;
    component.updateShippingInfoFunction = () => {};
    fixture.detectChanges();

    shippingFormComponent = fixture.debugElement.query(By.css('shipping-form')).componentInstance;
  });

  it('should create', () => {
    expect(shippingFormComponent).toBeTruthy();
  });

  describe('first-name input', () => {

    let firstNameInput;

    beforeEach(() => {
      firstNameInput = fixture.debugElement.query(By.css('.shipping-form__first-name'));
    });
    
    describe('when it has not been touched', () => {
      
      describe('and has no input', () => {
        
        it('should not have the error class', () => {
          expect(firstNameInput.nativeElement.classList.contains('shipping-form__error')).toBeFalsy();
        });

        it('should not have the valid class', () => {
          expect(firstNameInput.nativeElement.classList.contains('shipping-form__valid')).toBeFalsy();
        });

        describe('and form is submitted', () => {

          beforeEach(() => {
            fixture.debugElement.query(By.css('button')).nativeElement.click();
            fixture.detectChanges();
          });
        
          it('should have the error class', () => {
            expect(firstNameInput.nativeElement.classList.contains('shipping-form__error')).toBeTruthy();
          });
  
          it('should not have the valid class', () => {
            expect(firstNameInput.nativeElement.classList.contains('shipping-form__valid')).toBeFalsy();
          });
        });
      });
    });

    describe('when it has been touched', () => {

      beforeEach(() => {
        shippingFormComponent.form.controls.firstname.markAsTouched();
        fixture.detectChanges();
      });
      
      describe('and has no input', () => {
        
        it('should have the error class', () => {
          expect(firstNameInput.nativeElement.classList.contains('shipping-form__error')).toBeTruthy();
        });

        it('should not have the valid class', () => {
          expect(firstNameInput.nativeElement.classList.contains('shipping-form__valid')).toBeFalsy();
        });
      });

      describe('and has input', () => {

        beforeEach(() => {
          shippingFormComponent.firstname.setValue("firstName");
          fixture.detectChanges();
        });
        
        it('should not have the error class', () => {
          expect(firstNameInput.nativeElement.classList.contains('shipping-form__error')).toBeFalsy();
        });

        it('should have the valid class', () => {
          expect(firstNameInput.nativeElement.classList.contains('shipping-form__valid')).toBeTruthy();
        });
      });
    });
  });

  describe('last-name input', () => {
      
    let lastNameInput;

    beforeEach(() => {
      lastNameInput = fixture.debugElement.query(By.css('.shipping-form__last-name'));
    });
    
    describe('when it has not been touched', () => {
      
      describe('and has no input', () => {
        
        it('should not have the error class', () => {
          expect(lastNameInput.nativeElement.classList.contains('shipping-form__error')).toBeFalsy();
        });

        it('should not have the valid class', () => {
          expect(lastNameInput.nativeElement.classList.contains('shipping-form__valid')).toBeFalsy();
        });

        describe('and form is submitted', () => {

          beforeEach(() => {
            fixture.debugElement.query(By.css('button')).nativeElement.click();
            fixture.detectChanges();
          });
        
          it('should have the error class', () => {
            expect(lastNameInput.nativeElement.classList.contains('shipping-form__error')).toBeTruthy();
          });
  
          it('should not have the valid class', () => {
            expect(lastNameInput.nativeElement.classList.contains('shipping-form__valid')).toBeFalsy();
          });
        });
      });
    });

    describe('when it has been touched', () => {

      beforeEach(() => {
        shippingFormComponent.form.controls.lastname.markAsTouched();
        fixture.detectChanges();
      });
      
      describe('and has no input', () => {
        
        it('should have the error class', () => {
          expect(lastNameInput.nativeElement.classList.contains('shipping-form__error')).toBeTruthy();
        });

        it('should not have the valid class', () => {
          expect(lastNameInput.nativeElement.classList.contains('shipping-form__valid')).toBeFalsy();
        });
      });

      describe('and has input', () => {

        beforeEach(() => {
          shippingFormComponent.lastname.setValue("lastName");
          fixture.detectChanges();
        });
        
        it('should not have the error class', () => {
          expect(lastNameInput.nativeElement.classList.contains('shipping-form__error')).toBeFalsy();
        });

        it('should have the valid class', () => {
          expect(lastNameInput.nativeElement.classList.contains('shipping-form__valid')).toBeTruthy();
        });
      });
    });
  });

  describe('street input', () => {
      
    let streetInput;

    beforeEach(() => {
      streetInput = fixture.debugElement.query(By.css('.shipping-form__street'));
    });
    
    describe('when it has not been touched', () => {
      
      describe('and has no input', () => {
        
        it('should not have the error class', () => {
          expect(streetInput.nativeElement.classList.contains('shipping-form__error')).toBeFalsy();
        });

        it('should not have the valid class', () => {
          expect(streetInput.nativeElement.classList.contains('shipping-form__valid')).toBeFalsy();
        });

        describe('and form is submitted', () => {

          beforeEach(() => {
            fixture.debugElement.query(By.css('button')).nativeElement.click();
            fixture.detectChanges();
          });
        
          it('should have the error class', () => {
            expect(streetInput.nativeElement.classList.contains('shipping-form__error')).toBeTruthy();
          });
  
          it('should not have the valid class', () => {
            expect(streetInput.nativeElement.classList.contains('shipping-form__valid')).toBeFalsy();
          });
        });
      });
    });

    describe('when it has been touched', () => {

      beforeEach(() => {
        shippingFormComponent.form.controls.street.markAsTouched();
        fixture.detectChanges();
      });
      
      describe('and has no input', () => {
        
        it('should have the error class', () => {
          expect(streetInput.nativeElement.classList.contains('shipping-form__error')).toBeTruthy();
        });

        it('should not have the valid class', () => {
          expect(streetInput.nativeElement.classList.contains('shipping-form__valid')).toBeFalsy();
        });
      });

      describe('and has input', () => {

        beforeEach(() => {
          shippingFormComponent.street.setValue("street");
          fixture.detectChanges();
        });
        
        it('should not have the error class', () => {
          expect(streetInput.nativeElement.classList.contains('shipping-form__error')).toBeFalsy();
        });

        it('should have the valid class', () => {
          expect(streetInput.nativeElement.classList.contains('shipping-form__valid')).toBeTruthy();
        });
      });
    });
  });

  describe('city input', () => {
      
    let cityInput;

    beforeEach(() => {
      cityInput = fixture.debugElement.query(By.css('.shipping-form__city'));
    });
    
    describe('when it has not been touched', () => {
      
      describe('and has no input', () => {
        
        it('should not have the error class', () => {
          expect(cityInput.nativeElement.classList.contains('shipping-form__error')).toBeFalsy();
        });

        it('should not have the valid class', () => {
          expect(cityInput.nativeElement.classList.contains('shipping-form__valid')).toBeFalsy();
        });

        describe('and form is submitted', () => {

          beforeEach(() => {
            fixture.debugElement.query(By.css('button')).nativeElement.click();
            fixture.detectChanges();
          });
        
          it('should have the error class', () => {
            expect(cityInput.nativeElement.classList.contains('shipping-form__error')).toBeTruthy();
          });
  
          it('should not have the valid class', () => {
            expect(cityInput.nativeElement.classList.contains('shipping-form__valid')).toBeFalsy();
          });
        });
      });
    });

    describe('when it has been touched', () => {

      beforeEach(() => {
        shippingFormComponent.form.controls.city.markAsTouched();
        fixture.detectChanges();
      });
      
      describe('and has no input', () => {
        
        it('should have the error class', () => {
          expect(cityInput.nativeElement.classList.contains('shipping-form__error')).toBeTruthy();
        });

        it('should not have the valid class', () => {
          expect(cityInput.nativeElement.classList.contains('shipping-form__valid')).toBeFalsy();
        });
      });

      describe('and has input', () => {

        beforeEach(() => {
          shippingFormComponent.city.setValue("city");
          fixture.detectChanges();
        });
        
        it('should not have the error class', () => {
          expect(cityInput.nativeElement.classList.contains('shipping-form__error')).toBeFalsy();
        });

        it('should have the valid class', () => {
          expect(cityInput.nativeElement.classList.contains('shipping-form__valid')).toBeTruthy();
        });
      });
    });
  });

  describe('state input', () => {
      
    let stateInput;

    beforeEach(() => {
      stateInput = fixture.debugElement.query(By.css('.shipping-form__state'));
    });

    it('should have a default value of "State"', () => {
      expect(shippingFormComponent.form.controls.state.value).toEqual('State');
    });
    
    describe('when it has not been touched', () => {
      
      describe('and has default input', () => {
        
        it('should not have the error class', () => {
          expect(stateInput.nativeElement.classList.contains('shipping-form__error')).toBeFalsy();
        });

        it('should not have the valid class', () => {
          expect(stateInput.nativeElement.classList.contains('shipping-form__valid')).toBeFalsy();
        });

        describe('and form is submitted', () => {

          beforeEach(() => {
            fixture.debugElement.query(By.css('button')).nativeElement.click();
            fixture.detectChanges();
          });
        
          it('should have the error class', () => {
            expect(stateInput.nativeElement.classList.contains('shipping-form__error')).toBeTruthy();
          });
  
          it('should not have the valid class', () => {
            expect(stateInput.nativeElement.classList.contains('shipping-form__valid')).toBeFalsy();
          });
        });
      });
    });

    describe('when it has been touched', () => {

      beforeEach(() => {
        shippingFormComponent.form.controls.state.markAsTouched();
        fixture.detectChanges();
      });
      
      describe('and has default input', () => {
        
        it('should have the error class', () => {
          expect(stateInput.nativeElement.classList.contains('shipping-form__error')).toBeTruthy();
        });

        it('should not have the valid class', () => {
          expect(stateInput.nativeElement.classList.contains('shipping-form__valid')).toBeFalsy();
        });
      });

      describe('and does not have the default input', () => {

        beforeEach(() => {
          shippingFormComponent.state.setValue("not default");
          fixture.detectChanges();
        });
        
        it('should not have the error class', () => {
          expect(stateInput.nativeElement.classList.contains('shipping-form__error')).toBeFalsy();
        });

        it('should have the valid class', () => {
          expect(stateInput.nativeElement.classList.contains('shipping-form__valid')).toBeTruthy();
        });
      });
    });
  });

  describe('postcode input', () => {
      
    let postcodeInput;

    beforeEach(() => {
      postcodeInput = fixture.debugElement.query(By.css('.shipping-form__postcode'));
    });
    
    describe('when it has not been touched', () => {
      
      describe('and has no input', () => {
        
        it('should not have the error class', () => {
          expect(postcodeInput.nativeElement.classList.contains('shipping-form__error')).toBeFalsy();
        });

        it('should not have the valid class', () => {
          expect(postcodeInput.nativeElement.classList.contains('shipping-form__valid')).toBeFalsy();
        });

        describe('and form is submitted', () => {

          beforeEach(() => {
            fixture.debugElement.query(By.css('button')).nativeElement.click();
            fixture.detectChanges();
          });
        
          it('should have the error class', () => {
            expect(postcodeInput.nativeElement.classList.contains('shipping-form__error')).toBeTruthy();
          });
  
          it('should not have the valid class', () => {
            expect(postcodeInput.nativeElement.classList.contains('shipping-form__valid')).toBeFalsy();
          });
        });
      });
    });

    describe('when it has been touched', () => {

      beforeEach(() => {
        shippingFormComponent.form.controls.postcode.markAsTouched();
        fixture.detectChanges();
      });
      
      describe('and has no input', () => {
        
        it('should have the error class', () => {
          expect(postcodeInput.nativeElement.classList.contains('shipping-form__error')).toBeTruthy();
        });

        it('should not have the valid class', () => {
          expect(postcodeInput.nativeElement.classList.contains('shipping-form__valid')).toBeFalsy();
        });
      });

      describe('and has input', () => {

        beforeEach(() => {
          shippingFormComponent.postcode.setValue("postcode");
          fixture.detectChanges();
        });
        
        it('should not have the error class', () => {
          expect(postcodeInput.nativeElement.classList.contains('shipping-form__error')).toBeFalsy();
        });

        it('should have the valid class', () => {
          expect(postcodeInput.nativeElement.classList.contains('shipping-form__valid')).toBeTruthy();
        });
      });
    });
  });

  describe('telephone input', () => {
      
    let telephoneInput;

    beforeEach(() => {
      telephoneInput = fixture.debugElement.query(By.css('.shipping-form__telephone'));
    });
    
    describe('when it has not been touched', () => {
      
      describe('and has no input', () => {
        
        it('should not have the error class', () => {
          expect(telephoneInput.nativeElement.classList.contains('shipping-form__error')).toBeFalsy();
        });

        it('should not have the valid class', () => {
          expect(telephoneInput.nativeElement.classList.contains('shipping-form__valid')).toBeFalsy();
        });

        describe('and form is submitted', () => {

          beforeEach(() => {
            fixture.debugElement.query(By.css('button')).nativeElement.click();
            fixture.detectChanges();
          });
        
          it('should have the error class', () => {
            expect(telephoneInput.nativeElement.classList.contains('shipping-form__error')).toBeTruthy();
          });
  
          it('should not have the valid class', () => {
            expect(telephoneInput.nativeElement.classList.contains('shipping-form__valid')).toBeFalsy();
          });
        });
      });
    });

    describe('when it has been touched', () => {

      beforeEach(() => {
        shippingFormComponent.form.controls.telephone.markAsTouched();
        fixture.detectChanges();
      });
      
      describe('and has no input', () => {
        
        it('should have the error class', () => {
          expect(telephoneInput.nativeElement.classList.contains('shipping-form__error')).toBeTruthy();
        });

        it('should not have the valid class', () => {
          expect(telephoneInput.nativeElement.classList.contains('shipping-form__valid')).toBeFalsy();
        });
      });

      describe('and has input', () => {

        beforeEach(() => {
          shippingFormComponent.telephone.setValue("telephone");
          fixture.detectChanges();
        });
        
        it('should not have the error class', () => {
          expect(telephoneInput.nativeElement.classList.contains('shipping-form__error')).toBeFalsy();
        });

        it('should have the valid class', () => {
          expect(telephoneInput.nativeElement.classList.contains('shipping-form__valid')).toBeTruthy();
        });
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
        expect(<ShippingAddress>shippingFormComponent.form.value).toEqual(component.shippingInfoValue);
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

    describe('initializes a form control', () => {
      
      it('for firstName', () => {
        expect(shippingFormComponent.firstname).toEqual(jasmine.any(FormControl));
      });

      it('for lastName', () => {
        expect(shippingFormComponent.lastname).toEqual(jasmine.any(FormControl));
      });

      it('for street', () => {
        expect(shippingFormComponent.street).toEqual(jasmine.any(FormControl));
      });

      it('for city', () => {
        expect(shippingFormComponent.city).toEqual(jasmine.any(FormControl));
      });

      it('for state', () => {
        expect(shippingFormComponent.state).toEqual(jasmine.any(FormControl));
      });

      it('for postcode', () => {
        expect(shippingFormComponent.postcode).toEqual(jasmine.any(FormControl));
      });

      it('for telephone', () => {
        expect(shippingFormComponent.telephone).toEqual(jasmine.any(FormControl));
      });
    });
  });

  describe('when submit button is clicked', () => {

    beforeEach(() => {
      spyOn(shippingFormComponent, 'onSubmit');
      let submitButton = fixture.debugElement.query(By.css('button'));
      submitButton.nativeElement.click();
    });

    it('should call onSubmit a form', () => {
      expect(shippingFormComponent.onSubmit).toHaveBeenCalledWith(jasmine.any(FormGroup))
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

        shippingFormComponent.onSubmit(shippingFormComponent.form);
      });
      
      it('should call updateShippingInfo.emit', () => {
        expect(shippingFormComponent.updateShippingInfo.emit).toHaveBeenCalledWith(shippingFormComponent.form.value);
      });
    });

    describe('when form is invalid', () => {
      
      it('should not call updateShippingInfo.emit', () => {
        spyOn(shippingFormComponent.updateShippingInfo, 'emit');
        
        shippingFormComponent.onSubmit(shippingFormComponent.form);

        expect(shippingFormComponent.updateShippingInfo.emit).not.toHaveBeenCalled();
      });
    });
  });

  describe('when updateShippingInfo event is emitted', () => {

    let emittedValue;

    beforeEach(() => {
      emittedValue = 'emittedValue';
      spyOn(component, 'updateShippingInfoFunction');
      
      shippingFormComponent.updateShippingInfo.emit(emittedValue);
    });
    
    it('should call the function passed in by the host component', () => {
      expect(component.updateShippingInfoFunction).toHaveBeenCalledWith(emittedValue);
    });
  });
});
