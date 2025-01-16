import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffAuthorizeNetCreditCard } from '@daffodil/authorizenet';
import { DaffAuthorizeNetCreditCardFactory } from '@daffodil/authorizenet/testing';

import { DemoCheckoutPaymentSummaryComponent } from './payment-summary.component';
@Component({
  template: `
  <demo-checkout-payment-summary
    [paymentInfo]="paymentInfoValue"
    (editPaymentInfo)="editPaymentInfoFunction()"
  ></demo-checkout-payment-summary>`,
  imports: [
    DemoCheckoutPaymentSummaryComponent,
  ],
})
class WrapperComponent {
  paymentInfoValue: DaffAuthorizeNetCreditCard;
  editPaymentInfoFunction;
}

describe('DemoCheckoutPaymentSummaryComponent', () => {
  let creditCardFactory: DaffAuthorizeNetCreditCardFactory;
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let paymentSummaryComponent: DemoCheckoutPaymentSummaryComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    creditCardFactory = TestBed.inject(DaffAuthorizeNetCreditCardFactory);
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.editPaymentInfoFunction = jasmine.createSpy();
    wrapper.paymentInfoValue = creditCardFactory.create();
    fixture.detectChanges();

    paymentSummaryComponent = fixture.debugElement.query(By.css('demo-checkout-payment-summary')).componentInstance;
  });

  it('should create', () => {
    expect(paymentSummaryComponent).toBeTruthy();
  });

  it('should be able to take paymentInfo', () => {
    expect(paymentSummaryComponent.paymentInfo).toEqual(wrapper.paymentInfoValue);
  });

  describe('when edit anchor tag is clicked', () => {
    beforeEach(() => {
      fixture.debugElement.query(By.css('a')).nativeElement.click();
      fixture.detectChanges();
    });

    it('should call onEdit', () => {
      expect(wrapper.editPaymentInfoFunction).toHaveBeenCalledWith();
    });
  });
});
