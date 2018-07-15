import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingFormComponent } from './shipping-form.component';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, AbstractControl } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';
import { ShippingAddress } from '@daffodil/core';
import { InputValidatorComponent } from '../../../design/molecules/input-validator/input-validator.component';

@Component({'template': '<shipping-form [shippingInfo]="shippingInfoValue" (updateShippingInfo)="updateShippingInfoFunction($event)"></shipping-form>'})
class TestingShippingFormComponentWrapper {
  shippingInfoValue: ShippingAddress;
  updateShippingInfoFunction: Function;
}

@Component({'selector': '[input-validator]', 'template': ''})
class MockInputValidatorComponent {
  @Input() formControl: FormControl;
  @Input() formSubmitted: boolean;
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
        ShippingFormComponent,
        MockInputValidatorComponent
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

      it('for state', () => {
        expect(shippingFormComponent.state).toEqual(jasmine.any(FormControl));
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

  describe('on [input-validator]', () => {

    let inputValidator: InputValidatorComponent;

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
        fixture.debugElement.query(By.css('button')).nativeElement.click();
        fixture.detectChanges();

        expect(inputValidator.formSubmitted).toBeTruthy();
      });
    });
  });
});
