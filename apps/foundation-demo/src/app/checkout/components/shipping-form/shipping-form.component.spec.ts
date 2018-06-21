import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingFormComponent } from './shipping-form.component';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { ShippingAddress } from '@daffodil/core';

@Component({'template': '<shipping [shippingInfo]="shippingInfoValue" (updateShipping)="updateShippingFunction($event)"></shipping>'})
class TestingShippingFormComponentWrapper {
  shippingInfoValue: ShippingAddress;
  updateShippingFunction: Function;
}

describe('ShippingFormComponent', () => {
  let component: TestingShippingFormComponentWrapper;
  let fixture: ComponentFixture<TestingShippingFormComponentWrapper>;
  let shippingComponent: ShippingFormComponent;

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
    component.updateShippingFunction = () => {};
    fixture.detectChanges();

    shippingComponent = fixture.debugElement.query(By.css('shipping')).componentInstance;
  });

  it('should create', () => {
    expect(shippingComponent).toBeTruthy();
  });

  describe('first-name input', () => {

    let firstNameInput;

    beforeEach(() => {
      firstNameInput = fixture.debugElement.query(By.css('.shipping__first-name'));
    });
    
    describe('when it has not been touched', () => {
      
      describe('and has no input', () => {
        
        it('should not have the error class', () => {
          expect(firstNameInput.nativeElement.classList.contains('shipping__error')).toBeFalsy();
        });

        it('should not have the valid class', () => {
          expect(firstNameInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
        });

        describe('and form is submitted', () => {

          beforeEach(() => {
            fixture.debugElement.query(By.css('button')).nativeElement.click();
            fixture.detectChanges();
          });
        
          it('should have the error class', () => {
            expect(firstNameInput.nativeElement.classList.contains('shipping__error')).toBeTruthy();
          });
  
          it('should not have the valid class', () => {
            expect(firstNameInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
          });
        });
      });
    });

    describe('when it has been touched', () => {

      beforeEach(() => {
        shippingComponent.form.controls.firstname.markAsTouched();
        fixture.detectChanges();
      });
      
      describe('and has no input', () => {
        
        it('should have the error class', () => {
          expect(firstNameInput.nativeElement.classList.contains('shipping__error')).toBeTruthy();
        });

        it('should not have the valid class', () => {
          expect(firstNameInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
        });
      });

      describe('and has input', () => {

        beforeEach(() => {
          shippingComponent.firstname.setValue("firstName");
          fixture.detectChanges();
        });
        
        it('should not have the error class', () => {
          expect(firstNameInput.nativeElement.classList.contains('shipping__error')).toBeFalsy();
        });

        it('should have the valid class', () => {
          expect(firstNameInput.nativeElement.classList.contains('shipping__valid')).toBeTruthy();
        });
      });
    });
  });

  describe('last-name input', () => {
      
    let lastNameInput;

    beforeEach(() => {
      lastNameInput = fixture.debugElement.query(By.css('.shipping__last-name'));
    });
    
    describe('when it has not been touched', () => {
      
      describe('and has no input', () => {
        
        it('should not have the error class', () => {
          expect(lastNameInput.nativeElement.classList.contains('shipping__error')).toBeFalsy();
        });

        it('should not have the valid class', () => {
          expect(lastNameInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
        });

        describe('and form is submitted', () => {

          beforeEach(() => {
            fixture.debugElement.query(By.css('button')).nativeElement.click();
            fixture.detectChanges();
          });
        
          it('should have the error class', () => {
            expect(lastNameInput.nativeElement.classList.contains('shipping__error')).toBeTruthy();
          });
  
          it('should not have the valid class', () => {
            expect(lastNameInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
          });
        });
      });
    });

    describe('when it has been touched', () => {

      beforeEach(() => {
        shippingComponent.form.controls.lastname.markAsTouched();
        fixture.detectChanges();
      });
      
      describe('and has no input', () => {
        
        it('should have the error class', () => {
          expect(lastNameInput.nativeElement.classList.contains('shipping__error')).toBeTruthy();
        });

        it('should not have the valid class', () => {
          expect(lastNameInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
        });
      });

      describe('and has input', () => {

        beforeEach(() => {
          shippingComponent.lastname.setValue("lastName");
          fixture.detectChanges();
        });
        
        it('should not have the error class', () => {
          expect(lastNameInput.nativeElement.classList.contains('shipping__error')).toBeFalsy();
        });

        it('should have the valid class', () => {
          expect(lastNameInput.nativeElement.classList.contains('shipping__valid')).toBeTruthy();
        });
      });
    });
  });

  describe('street input', () => {
      
    let streetInput;

    beforeEach(() => {
      streetInput = fixture.debugElement.query(By.css('.shipping__street'));
    });
    
    describe('when it has not been touched', () => {
      
      describe('and has no input', () => {
        
        it('should not have the error class', () => {
          expect(streetInput.nativeElement.classList.contains('shipping__error')).toBeFalsy();
        });

        it('should not have the valid class', () => {
          expect(streetInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
        });

        describe('and form is submitted', () => {

          beforeEach(() => {
            fixture.debugElement.query(By.css('button')).nativeElement.click();
            fixture.detectChanges();
          });
        
          it('should have the error class', () => {
            expect(streetInput.nativeElement.classList.contains('shipping__error')).toBeTruthy();
          });
  
          it('should not have the valid class', () => {
            expect(streetInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
          });
        });
      });
    });

    describe('when it has been touched', () => {

      beforeEach(() => {
        shippingComponent.form.controls.street.markAsTouched();
        fixture.detectChanges();
      });
      
      describe('and has no input', () => {
        
        it('should have the error class', () => {
          expect(streetInput.nativeElement.classList.contains('shipping__error')).toBeTruthy();
        });

        it('should not have the valid class', () => {
          expect(streetInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
        });
      });

      describe('and has input', () => {

        beforeEach(() => {
          shippingComponent.street.setValue("street");
          fixture.detectChanges();
        });
        
        it('should not have the error class', () => {
          expect(streetInput.nativeElement.classList.contains('shipping__error')).toBeFalsy();
        });

        it('should have the valid class', () => {
          expect(streetInput.nativeElement.classList.contains('shipping__valid')).toBeTruthy();
        });
      });
    });
  });

  describe('city input', () => {
      
    let cityInput;

    beforeEach(() => {
      cityInput = fixture.debugElement.query(By.css('.shipping__city'));
    });
    
    describe('when it has not been touched', () => {
      
      describe('and has no input', () => {
        
        it('should not have the error class', () => {
          expect(cityInput.nativeElement.classList.contains('shipping__error')).toBeFalsy();
        });

        it('should not have the valid class', () => {
          expect(cityInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
        });

        describe('and form is submitted', () => {

          beforeEach(() => {
            fixture.debugElement.query(By.css('button')).nativeElement.click();
            fixture.detectChanges();
          });
        
          it('should have the error class', () => {
            expect(cityInput.nativeElement.classList.contains('shipping__error')).toBeTruthy();
          });
  
          it('should not have the valid class', () => {
            expect(cityInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
          });
        });
      });
    });

    describe('when it has been touched', () => {

      beforeEach(() => {
        shippingComponent.form.controls.city.markAsTouched();
        fixture.detectChanges();
      });
      
      describe('and has no input', () => {
        
        it('should have the error class', () => {
          expect(cityInput.nativeElement.classList.contains('shipping__error')).toBeTruthy();
        });

        it('should not have the valid class', () => {
          expect(cityInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
        });
      });

      describe('and has input', () => {

        beforeEach(() => {
          shippingComponent.city.setValue("city");
          fixture.detectChanges();
        });
        
        it('should not have the error class', () => {
          expect(cityInput.nativeElement.classList.contains('shipping__error')).toBeFalsy();
        });

        it('should have the valid class', () => {
          expect(cityInput.nativeElement.classList.contains('shipping__valid')).toBeTruthy();
        });
      });
    });
  });

  describe('state input', () => {
      
    let stateInput;

    beforeEach(() => {
      stateInput = fixture.debugElement.query(By.css('.shipping__state'));
    });

    it('should have a default value of "State"', () => {
      expect(shippingComponent.form.controls.state.value).toEqual('State');
    });
    
    describe('when it has not been touched', () => {
      
      describe('and has default input', () => {
        
        it('should not have the error class', () => {
          expect(stateInput.nativeElement.classList.contains('shipping__error')).toBeFalsy();
        });

        it('should not have the valid class', () => {
          expect(stateInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
        });

        describe('and form is submitted', () => {

          beforeEach(() => {
            fixture.debugElement.query(By.css('button')).nativeElement.click();
            fixture.detectChanges();
          });
        
          it('should have the error class', () => {
            expect(stateInput.nativeElement.classList.contains('shipping__error')).toBeTruthy();
          });
  
          it('should not have the valid class', () => {
            expect(stateInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
          });
        });
      });
    });

    describe('when it has been touched', () => {

      beforeEach(() => {
        shippingComponent.form.controls.state.markAsTouched();
        fixture.detectChanges();
      });
      
      describe('and has default input', () => {
        
        it('should have the error class', () => {
          expect(stateInput.nativeElement.classList.contains('shipping__error')).toBeTruthy();
        });

        it('should not have the valid class', () => {
          expect(stateInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
        });
      });

      describe('and does not have the default input', () => {

        beforeEach(() => {
          shippingComponent.state.setValue("not default");
          fixture.detectChanges();
        });
        
        it('should not have the error class', () => {
          expect(stateInput.nativeElement.classList.contains('shipping__error')).toBeFalsy();
        });

        it('should have the valid class', () => {
          expect(stateInput.nativeElement.classList.contains('shipping__valid')).toBeTruthy();
        });
      });
    });
  });

  describe('postcode input', () => {
      
    let postcodeInput;

    beforeEach(() => {
      postcodeInput = fixture.debugElement.query(By.css('.shipping__postcode'));
    });
    
    describe('when it has not been touched', () => {
      
      describe('and has no input', () => {
        
        it('should not have the error class', () => {
          expect(postcodeInput.nativeElement.classList.contains('shipping__error')).toBeFalsy();
        });

        it('should not have the valid class', () => {
          expect(postcodeInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
        });

        describe('and form is submitted', () => {

          beforeEach(() => {
            fixture.debugElement.query(By.css('button')).nativeElement.click();
            fixture.detectChanges();
          });
        
          it('should have the error class', () => {
            expect(postcodeInput.nativeElement.classList.contains('shipping__error')).toBeTruthy();
          });
  
          it('should not have the valid class', () => {
            expect(postcodeInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
          });
        });
      });
    });

    describe('when it has been touched', () => {

      beforeEach(() => {
        shippingComponent.form.controls.postcode.markAsTouched();
        fixture.detectChanges();
      });
      
      describe('and has no input', () => {
        
        it('should have the error class', () => {
          expect(postcodeInput.nativeElement.classList.contains('shipping__error')).toBeTruthy();
        });

        it('should not have the valid class', () => {
          expect(postcodeInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
        });
      });

      describe('and has input', () => {

        beforeEach(() => {
          shippingComponent.postcode.setValue("postcode");
          fixture.detectChanges();
        });
        
        it('should not have the error class', () => {
          expect(postcodeInput.nativeElement.classList.contains('shipping__error')).toBeFalsy();
        });

        it('should have the valid class', () => {
          expect(postcodeInput.nativeElement.classList.contains('shipping__valid')).toBeTruthy();
        });
      });
    });
  });

  describe('telephone input', () => {
      
    let telephoneInput;

    beforeEach(() => {
      telephoneInput = fixture.debugElement.query(By.css('.shipping__telephone'));
    });
    
    describe('when it has not been touched', () => {
      
      describe('and has no input', () => {
        
        it('should not have the error class', () => {
          expect(telephoneInput.nativeElement.classList.contains('shipping__error')).toBeFalsy();
        });

        it('should not have the valid class', () => {
          expect(telephoneInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
        });

        describe('and form is submitted', () => {

          beforeEach(() => {
            fixture.debugElement.query(By.css('button')).nativeElement.click();
            fixture.detectChanges();
          });
        
          it('should have the error class', () => {
            expect(telephoneInput.nativeElement.classList.contains('shipping__error')).toBeTruthy();
          });
  
          it('should not have the valid class', () => {
            expect(telephoneInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
          });
        });
      });
    });

    describe('when it has been touched', () => {

      beforeEach(() => {
        shippingComponent.form.controls.telephone.markAsTouched();
        fixture.detectChanges();
      });
      
      describe('and has no input', () => {
        
        it('should have the error class', () => {
          expect(telephoneInput.nativeElement.classList.contains('shipping__error')).toBeTruthy();
        });

        it('should not have the valid class', () => {
          expect(telephoneInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
        });
      });

      describe('and has input', () => {

        beforeEach(() => {
          shippingComponent.telephone.setValue("telephone");
          fixture.detectChanges();
        });
        
        it('should not have the error class', () => {
          expect(telephoneInput.nativeElement.classList.contains('shipping__error')).toBeFalsy();
        });

        it('should have the valid class', () => {
          expect(telephoneInput.nativeElement.classList.contains('shipping__valid')).toBeTruthy();
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

        shippingComponent = fixture.debugElement.query(By.css('shipping')).componentInstance;
      });
      
      it('sets form.value to shippingInfo', () => {
        expect(<ShippingAddress>shippingComponent.form.value).toEqual(component.shippingInfoValue);
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

        expect(shippingComponent.form.value).toEqual(defaultValues);
      });
    });

    describe('initializes a form control', () => {
      
      it('for firstName', () => {
        expect(shippingComponent.firstname).toEqual(jasmine.any(FormControl));
      });

      it('for lastName', () => {
        expect(shippingComponent.lastname).toEqual(jasmine.any(FormControl));
      });

      it('for street', () => {
        expect(shippingComponent.street).toEqual(jasmine.any(FormControl));
      });

      it('for city', () => {
        expect(shippingComponent.city).toEqual(jasmine.any(FormControl));
      });

      it('for state', () => {
        expect(shippingComponent.state).toEqual(jasmine.any(FormControl));
      });

      it('for postcode', () => {
        expect(shippingComponent.postcode).toEqual(jasmine.any(FormControl));
      });

      it('for telephone', () => {
        expect(shippingComponent.telephone).toEqual(jasmine.any(FormControl));
      });
    });
  });

  describe('when submit button is clicked', () => {

    beforeEach(() => {
      spyOn(shippingComponent, 'onSubmit');
      let submitButton = fixture.debugElement.query(By.css('button'));
      submitButton.nativeElement.click();
    });

    it('should call onSubmit a form', () => {
      expect(shippingComponent.onSubmit).toHaveBeenCalledWith(jasmine.any(FormGroup))
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

        shippingComponent = fixture.debugElement.query(By.css('shipping')).componentInstance;
        spyOn(shippingComponent.updateShipping, 'emit');

        shippingComponent.onSubmit(shippingComponent.form);
      });
      
      it('should call updateShipping.emit', () => {
        expect(shippingComponent.updateShipping.emit).toHaveBeenCalledWith(shippingComponent.form.value);
      });
    });

    describe('when form is invalid', () => {
      
      it('should not call updateShipping.emit', () => {
        spyOn(shippingComponent.updateShipping, 'emit');
        
        shippingComponent.onSubmit(shippingComponent.form);

        expect(shippingComponent.updateShipping.emit).not.toHaveBeenCalled();
      });
    });
  });

  describe('when updateShipping event is emitted', () => {

    let emittedValue;

    beforeEach(() => {
      emittedValue = 'emittedValue';
      spyOn(component, 'updateShippingFunction');
      
      shippingComponent.updateShipping.emit(emittedValue);
    });
    
    it('should call the function passed in by the host component', () => {
      expect(component.updateShippingFunction).toHaveBeenCalledWith(emittedValue);
    });
  });
});
