import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { AbstractControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

import {
  DaffNativeSelectModule,
  DaffNativeSelectComponent,
  DaffInputModule,
  DaffInputComponent,
  DaffFormFieldModule,
} from '@daffodil/design';

import { DemoCheckoutPaymentInfoFormComponent } from './payment-info-form.component';
import { PaymentInfoFormFactory } from '../../factories/payment-info-form.factory';
import { PaymentInfoFormGroup } from '../../models/payment-form.type';

@Component({
  template: `
    <demo-payment-info-form
      [formGroup]="formGroupValue"
    ></demo-payment-info-form>
  `,
  imports: [
    DemoCheckoutPaymentInfoFormComponent,
  ],
})
class WrapperComponent {
  formGroupValue: PaymentInfoFormGroup;
}

describe('DemoCheckoutPaymentInfoFormComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let paymentInfoForm: DemoCheckoutPaymentInfoFormComponent;
  let paymentInfoFormFactory: PaymentInfoFormFactory;
  let paymentInfoGroup: PaymentInfoFormGroup;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    paymentInfoFormFactory = TestBed.inject(PaymentInfoFormFactory);
    paymentInfoGroup = paymentInfoFormFactory.create(null);

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.formGroupValue = paymentInfoGroup;

    fixture.detectChanges();

    paymentInfoForm = fixture.debugElement.query(By.css('demo-payment-info-form')).componentInstance;
  });

  it('should create', () => {
    expect(paymentInfoForm).toBeTruthy();
  });

  it('should be able to take formGroup as input', () => {
    expect(paymentInfoForm.formGroup).toEqual(wrapper.formGroupValue);
  });
});
