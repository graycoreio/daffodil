import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, AbstractControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffodilAddress } from '@daffodil/core';

import { ShippingFormComponent } from './shipping-form.component';

@Component({
  'template': '<shipping-form [shippingInfo]="shippingInfoValue" ' + 
                '[selectedShippingOptionId]="selectedShippingOptionIdValue" ' + 
                '[editMode]="editModeValue" ' + 
                '(submitted)="submittedFunction($event)"></shipping-form>'
})
class TestingShippingFormComponentWrapper {
  shippingInfoValue: DaffodilAddress;
  selectedShippingOptionIdValue: number;
  editModeValue: boolean;
  submittedFunction: Function = () => {};
}

@Component({selector: 'address-form', template: ''})
class MockAddressFormComponent {
  @Input() formGroup: FormGroup;
  @Input() submitted: boolean;
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
        MockAddressFormComponent
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

  describe('on <address-form>', () => {

    let addressForm: MockAddressFormComponent;

    beforeEach(() => {
      addressForm = fixture.debugElement.query(By.css('address-form')).componentInstance;
    });
    
    it('should set formGroup', () => {
      expect(addressForm.formGroup).toEqual(shippingFormComponent.form.controls['address']);
    });

    it('should set formSubmitted', () => {
      expect(addressForm.formSubmitted).toBeFalsy();
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
      
      it('sets form.value.address to shippingInfo', () => {
        expect(<DaffodilAddress>shippingFormComponent.form.value.address).toEqual(component.shippingInfoValue);
      });
    });

    describe('when shippingInfo is null', () => {
      
      it('sets form.value.address to default', () => {
        let defaultValues = {
          firstname: '',
          lastname: '',
          street: '',
          city: '',
          state: 'State',
          postcode: '',
          telephone: ''
        }

        expect(shippingFormComponent.form.value.address).toEqual(defaultValues);
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
        spyOn(shippingFormComponent.submitted, 'emit');

        shippingFormComponent.onSubmit(shippingFormComponent.form);
      });
      
      it('should call submitted.emit', () => {
        expect(shippingFormComponent.submitted.emit).toHaveBeenCalledWith(shippingFormComponent.form.value.address);
      });
    });

    describe('when form is invalid', () => {
      
      it('should not call submitted.emit', () => {
        spyOn(shippingFormComponent.submitted, 'emit');
        
        shippingFormComponent.onSubmit(shippingFormComponent.form);

        expect(shippingFormComponent.submitted.emit).not.toHaveBeenCalled();
      });
    });
  });

  describe('when submitted event is emitted', () => {

    let emittedValue;

    beforeEach(() => {
      emittedValue = 'emittedValue';
      spyOn(component, 'submittedFunction');
      
      shippingFormComponent.submitted.emit(emittedValue);
    });
    
    it('should call the function passed in by the host component', () => {
      expect(component.submittedFunction).toHaveBeenCalledWith(emittedValue);
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
