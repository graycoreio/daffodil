import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, AbstractControl, FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { 
  DaffNativeSelectModule, 
  DaffNativeSelectComponent,
  DaffInputModule, 
  DaffInputComponent,
  DaffFormFieldModule
} from '@daffodil/design';
import { PaymentInfoFormComponent } from './payment-info-form.component';
import { PaymentInfoFormFactory } from '../../factories/payment-info-form.factory';

@Component({
  template: '<demo-payment-info-form [formGroup]="formGroupValue" ' + 
                '[submitted]="submittedValue"></demo-payment-info-form>'
})
class WrapperComponent {
  formGroupValue: FormGroup;
  submittedValue: boolean;
}

describe('PaymentInfoFormComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let paymentInfoForm: PaymentInfoFormComponent;
  const paymentInfoFormFactory = new PaymentInfoFormFactory(new FormBuilder());
  const paymentInfoGroup = paymentInfoFormFactory.create(null);
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        DaffNativeSelectModule,
        DaffInputModule,
        DaffFormFieldModule
      ],
      declarations: [ 
        WrapperComponent,
        PaymentInfoFormComponent
      ]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.formGroupValue = paymentInfoGroup;

    wrapper.submittedValue = false;

    fixture.detectChanges();

    paymentInfoForm = fixture.debugElement.query(By.css('demo-payment-info-form')).componentInstance;
  });

  it('should create', () => {
    expect(paymentInfoForm).toBeTruthy();
  });

  it('should be able to take formGroup as input', () => {
    expect(paymentInfoForm.formGroup).toEqual(wrapper.formGroupValue);
  });

  it('should be able to take submitted as input', () => {
    expect(paymentInfoForm.submitted).toEqual(wrapper.submittedValue);
  });

  describe('on [daff-input]', () => {

    let input: DaffInputComponent;

    beforeEach(() => {
      input = fixture.debugElement.queryAll(By.css('[daff-input]'))[0].componentInstance;
    });
    
    it('should set formControl', () => {
      expect(input.ngControl.control).toEqual(<AbstractControl> paymentInfoForm.formGroup.controls['name']);
    });

    it('should set formSubmitted', () => {
      expect(input.formSubmitted).toEqual(paymentInfoForm.submitted);
    });
  });

  describe('on month [daff-native-select]', () => {

    let monthSelect: DaffNativeSelectComponent;

    beforeEach(() => {
      monthSelect = fixture.debugElement.queryAll(By.css('[daff-native-select]'))[0].componentInstance;
    });
    
    it('should set formControl', () => {
      expect(monthSelect.ngControl.control).toEqual(paymentInfoForm.formGroup.controls['month']);
    });

    it('should set formSubmitted', () => {
      expect(monthSelect.formSubmitted).toEqual(paymentInfoForm.submitted);
    });
  });

  describe('on year [daff-native-select]', () => {

    let yearSelect: DaffNativeSelectComponent;

    beforeEach(() => {
      yearSelect = fixture.debugElement.queryAll(By.css('[daff-native-select]'))[1].componentInstance;
    });
    
    it('should set formControl', () => {
      expect(yearSelect.ngControl.control).toEqual(paymentInfoForm.formGroup.controls['year']);
    });

    it('should set formSubmitted', () => {
      expect(yearSelect.formSubmitted).toEqual(paymentInfoForm.submitted);
    });
  });
});
