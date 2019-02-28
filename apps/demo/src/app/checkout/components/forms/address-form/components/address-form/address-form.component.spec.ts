import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, AbstractControl, Validators, FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffInputModule, DaffNativeSelectComponent, DaffFormFieldModule, DaffNativeSelectModule, DaffInputComponent  } from '@daffodil/design';
import { AddressFormComponent } from './address-form.component';

@Component({
  template: '<demo-address-form [formGroup]="formGroupValue" ' + 
                '[submitted]="submittedValue"></demo-address-form>'
})
class WrapperComponent {
  formGroupValue: FormGroup;
  submittedValue: boolean;
}

describe('AddressFormComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let addressForm: AddressFormComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        DaffInputModule,
        DaffNativeSelectModule,
        DaffFormFieldModule
      ],
      declarations: [ 
        WrapperComponent,
        AddressFormComponent
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

  describe('on [daff-input]', () => {

    let input: DaffInputComponent;

    beforeEach(() => {
      input = fixture.debugElement.queryAll(By.css('[daff-input]'))[0].componentInstance;
    });
    
    it('should set formControl', () => {
      expect(input.ngControl.control).toEqual(addressForm.formGroup.controls['firstname']);
    });

    it('should set formSubmitted', () => {
      expect(input.formSubmitted).toEqual(addressForm.submitted);
    });
  });

  describe('on [daff-native-select]', () => {

    let select: DaffNativeSelectComponent;

    beforeEach(() => {
      select = fixture.debugElement.queryAll(By.css('[daff-native-select]'))[0].componentInstance;
    });
    
    it('should set formControl', () => {
      expect(select.ngControl.control).toEqual(<AbstractControl> addressForm.formGroup.controls['state']);
    });

    it('should set formSubmitted', () => {
      expect(select.formSubmitted).toEqual(addressForm.submitted);
    });
  });
});
