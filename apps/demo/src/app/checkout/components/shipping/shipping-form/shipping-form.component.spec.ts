import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffAddress } from '@daffodil/core';

import { ShippingFormComponent } from './shipping-form.component';
import { ShippingOptionFormService } from '../shipping-options/components/services/shipping-option-form.service';
import { AddressFormFactory } from '../../forms/address-form/factories/address-form.factory';

@Component({
  'template': '<demo-shipping-form [shippingAddress]="shippingAddressValue" ' + 
                '[editMode]="editModeValue" ' + 
                '(submitted)="submittedFunction($event)"></demo-shipping-form>'
})
class WrapperComponent {
  shippingAddressValue: DaffAddress;
  editModeValue: boolean;
  submittedFunction() {};
}

@Component({selector: 'demo-address-form', template: ''})
class MockAddressFormComponent {
  @Input() formGroup: FormGroup;
  @Input() submitted: boolean;
}

@Component({selector: 'demo-shipping-options', template: ''})
class MockShippingOptionsComponent {
  @Input() formGroup: FormGroup;
  @Input() submitted: boolean;
}

describe('ShippingFormComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let shippingFormComponent: ShippingFormComponent;
  let addressFormComponent: MockAddressFormComponent;
  let shippingOptionsComponent: MockShippingOptionsComponent;
  const addressFormFactorySpy = jasmine.createSpyObj('AddressFormFactory', ['create']);
  let stubAddressFormGroup: FormGroup;
  let shippingOptionFormService: ShippingOptionFormService;
  let stubShippingAddress;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ 
        WrapperComponent,
        ShippingFormComponent,
        MockAddressFormComponent,
        MockShippingOptionsComponent
      ],
      providers: [
        {provide: AddressFormFactory, useValue: addressFormFactorySpy},
        ShippingOptionFormService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    shippingOptionFormService = TestBed.get(ShippingOptionFormService);
    stubShippingAddress = {
      firstname: '',
      lastname: '',
      street: '',
      city: '',
      state: '',
      postcode: '',
      telephone: ''
    };
    wrapper = fixture.componentInstance;
    wrapper.editModeValue = false;
    wrapper.shippingAddressValue = stubShippingAddress;
    
    stubAddressFormGroup = new AddressFormFactory(new FormBuilder()).create(stubShippingAddress).value;
    addressFormFactorySpy.create.and.returnValue(stubAddressFormGroup);

    fixture.detectChanges();

    shippingFormComponent = fixture.debugElement.query(By.css('demo-shipping-form')).componentInstance;
    addressFormComponent = fixture.debugElement.query(By.css('demo-address-form')).componentInstance;
    shippingOptionsComponent = fixture.debugElement.query(By.css('demo-shipping-options')).componentInstance;
  });

  it('should create', () => {
    expect(shippingFormComponent).toBeTruthy();
  });

  it('should be able to take shippingAddress as input', () => {
    expect(shippingFormComponent.shippingAddress).toEqual(wrapper.shippingAddressValue);
  });

  it('should be able to take editMode as input', () => {
    expect(shippingFormComponent.editMode).toEqual(wrapper.editModeValue);
  });

  describe('on <demo-address-form>', () => {
    
    it('should set formGroup', () => {
      expect(<FormGroup> addressFormComponent.formGroup).toEqual(<FormGroup> shippingFormComponent.form.controls['address']);
    });

    it('should set formSubmitted', () => {
      expect(addressFormComponent.submitted).toEqual(shippingFormComponent.form.valid);
    });
  });

  describe('on <demo-shipping-options>', () => {

    it('should set formGroup', () => {
      expect(<FormGroup> shippingOptionsComponent.formGroup).toEqual(<FormGroup> shippingFormComponent.form.controls.shippingOption);
    });

    it('should set submitted', () => {
      expect(shippingOptionsComponent.submitted).toEqual(shippingFormComponent.form.valid);
    });
  });

  describe('ngOnInit', () => {

    beforeEach(() => {
      shippingFormComponent.ngOnInit();
    });

    it('should call addressFormFactory.create with shippingAddress', () => {
      expect(addressFormFactorySpy.create).toHaveBeenCalledWith(stubShippingAddress)
    });
    
    it('sets form.value.address to addressFormFactory.create()', () => {
      expect(shippingFormComponent.form.value.address).toEqual(stubAddressFormGroup);
    });
    
    it('sets form.value.shippingOption to shippingOptionFormService.getShippingOptionFormGroup()', () => {
      expect(shippingFormComponent.form.value.shippingOption).toEqual(shippingOptionFormService.getShippingOptionFormGroup().value);
    });
  });

  describe('onSubmit', () => {
    
    describe('when form is valid', () => {

      beforeEach(() => {
        const formBuilder = new FormBuilder();
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
      spyOn(wrapper, 'submittedFunction');
      
      shippingFormComponent.submitted.emit(emittedValue);
    });
    
    it('should call the function passed in by the host component', () => {
      expect(wrapper.submittedFunction).toHaveBeenCalledWith(emittedValue);
    });
  });

  describe('when editMode is false', () => {
    
    it('should set button text to Continue to Payment', () => {
      const buttonText = fixture.debugElement.query(By.css('button')).nativeElement.innerHTML;
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
