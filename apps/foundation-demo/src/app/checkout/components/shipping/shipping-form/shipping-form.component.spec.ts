import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffodilAddress, ShippingOption, ShippingFactory } from '@daffodil/core';

import { ShippingFormComponent } from './shipping-form.component';

let shippingFactory: ShippingFactory = new ShippingFactory();

@Component({
  'template': '<shipping-form [shippingInfo]="shippingInfoValue" ' + 
                '[editMode]="editModeValue" ' + 
                '[shippingOptions]="shippingOptionsValue" ' + 
                '(submitted)="submittedFunction($event)"></shipping-form>'
})
class TestingShippingFormComponentWrapper {
  shippingInfoValue: DaffodilAddress;
  editModeValue: boolean;
  shippingOptionsValue: ShippingOption[];
  submittedFunction: Function = () => {};
}

@Component({selector: 'address-form', template: ''})
class MockAddressFormComponent {
  @Input() formGroup: FormGroup;
  @Input() submitted: boolean;
}

@Component({selector: 'shipping-options', template: ''})
class MockShippingOptionsComponent {
  @Input() shippingOptions: ShippingOption[];
  @Input() formGroup: FormGroup;
  @Input() submitted: boolean;
}

describe('ShippingFormComponent', () => {
  let component: TestingShippingFormComponentWrapper;
  let fixture: ComponentFixture<TestingShippingFormComponentWrapper>;
  let shippingFormComponent: ShippingFormComponent;
  let addressFormComponent: MockAddressFormComponent;
  let shippingOptionsComponent: MockShippingOptionsComponent;
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
        MockAddressFormComponent,
        MockShippingOptionsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingShippingFormComponentWrapper);
    component = fixture.componentInstance;
    component.shippingInfoValue = stubShippingInfo;
    component.shippingOptionsValue = shippingFactory.createShippingOptions();;
    component.editModeValue = false;
    fixture.detectChanges();

    shippingFormComponent = fixture.debugElement.query(By.css('shipping-form')).componentInstance;
    addressFormComponent = fixture.debugElement.query(By.css('address-form')).componentInstance;
    shippingOptionsComponent = fixture.debugElement.query(By.css('shipping-options')).componentInstance;
  });

  it('should create', () => {
    expect(shippingFormComponent).toBeTruthy();
  });

  it('should be able to take shippingInfo as input', () => {
    expect(shippingFormComponent.shippingInfo).toEqual(component.shippingInfoValue);
  });

  it('should be able to take editMode as input', () => {
    expect(shippingFormComponent.editMode).toEqual(component.editModeValue);
  });

  it('should be able to take shippingOptions as input', () => {
    expect(shippingFormComponent.shippingOptions).toEqual(component.shippingOptionsValue);
  });

  describe('on <address-form>', () => {
    
    it('should set formGroup', () => {
      expect(<FormGroup> addressFormComponent.formGroup).toEqual(<FormGroup> shippingFormComponent.form.controls['address']);
    });

    it('should set formSubmitted', () => {
      expect(addressFormComponent.submitted).toEqual(shippingFormComponent.form.valid);
    });
  });

  describe('on <shipping-options>', () => {
    
    it('should set shippingOptions', () => {
      expect(shippingOptionsComponent.shippingOptions).toEqual(component.shippingOptionsValue);
    });

    it('should set formGroup', () => {
      expect(<FormGroup> shippingOptionsComponent.formGroup).toEqual(<FormGroup> shippingFormComponent.form.controls.shippingOption);
    });

    it('should set submitted', () => {
      expect(shippingOptionsComponent.submitted).toEqual(shippingFormComponent.form.valid);
    });
  });

  describe('ngOnInit', () => {
    
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

  describe('onSubmit', () => {
    
    describe('when form is valid', () => {

      beforeEach(() => {
        let formBuilder = new FormBuilder();
        shippingFormComponent.form = formBuilder.group({
          address: formBuilder.group({}),
          shippingOption: formBuilder.group({id: 'id'})
        });
        fixture.detectChanges();

        spyOn(shippingFormComponent.submitted, 'emit');

        shippingFormComponent.onSubmit(shippingFormComponent.form);
      });
      
      it('should call submitted.emit', () => {
        expect(shippingFormComponent.submitted.emit).toHaveBeenCalledWith(shippingFormComponent.form.value);
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
