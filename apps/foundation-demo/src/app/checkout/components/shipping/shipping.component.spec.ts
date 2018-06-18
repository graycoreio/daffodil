import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingComponent } from './shipping.component';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('ShippingComponent', () => {
  let component: ShippingComponent;
  let fixture: ComponentFixture<ShippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ ShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
        component.form.controls.firstName.markAsTouched();
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
          component.firstName.setValue("firstName");
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
        component.form.controls.lastName.markAsTouched();
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
          component.lastName.setValue("lastName");
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

  describe('address input', () => {
      
    let addressInput;

    beforeEach(() => {
      addressInput = fixture.debugElement.query(By.css('.shipping__address'));
    });
    
    describe('when it has not been touched', () => {
      
      describe('and has no input', () => {
        
        it('should not have the error class', () => {
          expect(addressInput.nativeElement.classList.contains('shipping__error')).toBeFalsy();
        });

        it('should not have the valid class', () => {
          expect(addressInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
        });

        describe('and form is submitted', () => {

          beforeEach(() => {
            fixture.debugElement.query(By.css('button')).nativeElement.click();
            fixture.detectChanges();
          });
        
          it('should have the error class', () => {
            expect(addressInput.nativeElement.classList.contains('shipping__error')).toBeTruthy();
          });
  
          it('should not have the valid class', () => {
            expect(addressInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
          });
        });
      });
    });

    describe('when it has been touched', () => {

      beforeEach(() => {
        component.form.controls.address.markAsTouched();
        fixture.detectChanges();
      });
      
      describe('and has no input', () => {
        
        it('should have the error class', () => {
          expect(addressInput.nativeElement.classList.contains('shipping__error')).toBeTruthy();
        });

        it('should not have the valid class', () => {
          expect(addressInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
        });
      });

      describe('and has input', () => {

        beforeEach(() => {
          component.address.setValue("address");
          fixture.detectChanges();
        });
        
        it('should not have the error class', () => {
          expect(addressInput.nativeElement.classList.contains('shipping__error')).toBeFalsy();
        });

        it('should have the valid class', () => {
          expect(addressInput.nativeElement.classList.contains('shipping__valid')).toBeTruthy();
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
        component.form.controls.city.markAsTouched();
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
          component.city.setValue("city");
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
      expect(component.form.controls.state.value).toEqual('State');
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
        component.form.controls.state.markAsTouched();
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
          component.state.setValue("not default");
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

  describe('zip input', () => {
      
    let zipInput;

    beforeEach(() => {
      zipInput = fixture.debugElement.query(By.css('.shipping__zip'));
    });
    
    describe('when it has not been touched', () => {
      
      describe('and has no input', () => {
        
        it('should not have the error class', () => {
          expect(zipInput.nativeElement.classList.contains('shipping__error')).toBeFalsy();
        });

        it('should not have the valid class', () => {
          expect(zipInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
        });

        describe('and form is submitted', () => {

          beforeEach(() => {
            fixture.debugElement.query(By.css('button')).nativeElement.click();
            fixture.detectChanges();
          });
        
          it('should have the error class', () => {
            expect(zipInput.nativeElement.classList.contains('shipping__error')).toBeTruthy();
          });
  
          it('should not have the valid class', () => {
            expect(zipInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
          });
        });
      });
    });

    describe('when it has been touched', () => {

      beforeEach(() => {
        component.form.controls.zip.markAsTouched();
        fixture.detectChanges();
      });
      
      describe('and has no input', () => {
        
        it('should have the error class', () => {
          expect(zipInput.nativeElement.classList.contains('shipping__error')).toBeTruthy();
        });

        it('should not have the valid class', () => {
          expect(zipInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
        });
      });

      describe('and has input', () => {

        beforeEach(() => {
          component.zip.setValue("zip");
          fixture.detectChanges();
        });
        
        it('should not have the error class', () => {
          expect(zipInput.nativeElement.classList.contains('shipping__error')).toBeFalsy();
        });

        it('should have the valid class', () => {
          expect(zipInput.nativeElement.classList.contains('shipping__valid')).toBeTruthy();
        });
      });
    });
  });

  describe('phone input', () => {
      
    let phoneInput;

    beforeEach(() => {
      phoneInput = fixture.debugElement.query(By.css('.shipping__phone'));
    });
    
    describe('when it has not been touched', () => {
      
      describe('and has no input', () => {
        
        it('should not have the error class', () => {
          expect(phoneInput.nativeElement.classList.contains('shipping__error')).toBeFalsy();
        });

        it('should not have the valid class', () => {
          expect(phoneInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
        });

        describe('and form is submitted', () => {

          beforeEach(() => {
            fixture.debugElement.query(By.css('button')).nativeElement.click();
            fixture.detectChanges();
          });
        
          it('should have the error class', () => {
            expect(phoneInput.nativeElement.classList.contains('shipping__error')).toBeTruthy();
          });
  
          it('should not have the valid class', () => {
            expect(phoneInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
          });
        });
      });
    });

    describe('when it has been touched', () => {

      beforeEach(() => {
        component.form.controls.phone.markAsTouched();
        fixture.detectChanges();
      });
      
      describe('and has no input', () => {
        
        it('should have the error class', () => {
          expect(phoneInput.nativeElement.classList.contains('shipping__error')).toBeTruthy();
        });

        it('should not have the valid class', () => {
          expect(phoneInput.nativeElement.classList.contains('shipping__valid')).toBeFalsy();
        });
      });

      describe('and has input', () => {

        beforeEach(() => {
          component.phone.setValue("phone");
          fixture.detectChanges();
        });
        
        it('should not have the error class', () => {
          expect(phoneInput.nativeElement.classList.contains('shipping__error')).toBeFalsy();
        });

        it('should have the valid class', () => {
          expect(phoneInput.nativeElement.classList.contains('shipping__valid')).toBeTruthy();
        });
      });
    });
  });

  describe('constructor', () => {

    describe('initializes a form', () => {

      it('with firstName', () => {
        expect(component.form.value.firstName).toEqual('');
      });
      
      it('with lastName', () => {
        expect(component.form.value.lastName).toEqual('');
      });
      
      it('with address', () => {
        expect(component.form.value.address).toEqual('');
      });
      
      it('with city', () => {
        expect(component.form.value.city).toEqual('');
      });
      
      it('with state', () => {
        expect(component.form.value.state).toEqual('State');
      });
      
      it('with zip', () => {
        expect(component.form.value.zip).toEqual('');
      });
      
      it('with phone', () => {
        expect(component.form.value.phone).toEqual('');
      });
    });

    describe('initializes a form control', () => {
      
      it('for firstName', () => {
        expect(component.firstName).toEqual(jasmine.any(FormControl));
      });

      it('for lastName', () => {
        expect(component.lastName).toEqual(jasmine.any(FormControl));
      });

      it('for address', () => {
        expect(component.address).toEqual(jasmine.any(FormControl));
      });

      it('for city', () => {
        expect(component.city).toEqual(jasmine.any(FormControl));
      });

      it('for state', () => {
        expect(component.state).toEqual(jasmine.any(FormControl));
      });

      it('for zip', () => {
        expect(component.zip).toEqual(jasmine.any(FormControl));
      });

      it('for phone', () => {
        expect(component.phone).toEqual(jasmine.any(FormControl));
      });
    });
  });
});
