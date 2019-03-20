import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { PaymentInfo } from '@daffodil/checkout';

import { PaymentSummaryComponent } from './payment-summary.component';

const stubPaymentInfo: PaymentInfo = {
  name: 'test',
  cardnumber: 123,
  month: 123,
  year: 123,
  securitycode: 123
};

@Component({
  template: '<demo-payment-summary ' + 
              '[paymentInfo]="paymentInfoValue" '+ 
              '(editPaymentInfo)="editPaymentInfoFunction()"></demo-payment-summary>'
})
class WrapperComponent {
  paymentInfoValue: PaymentInfo = stubPaymentInfo;
  editPaymentInfoFunction: Function = () => {};
}

describe('PaymentSummaryComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let paymentSummaryComponent: PaymentSummaryComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        PaymentSummaryComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    paymentSummaryComponent = fixture.debugElement.query(By.css('demo-payment-summary')).componentInstance;
  });

  it('should create', () => {
    expect(paymentSummaryComponent).toBeTruthy();
  });

  it('should be able to take paymentInfo', () => {
    expect(paymentSummaryComponent.paymentInfo).toEqual(stubPaymentInfo);
  });

  describe('when edit anchor tag is clicked', () => {
    
    it('should call onEdit', () => {
      spyOn(paymentSummaryComponent, 'onEdit');

      fixture.debugElement.query(By.css('a')).nativeElement.click();

      expect(paymentSummaryComponent.onEdit).toHaveBeenCalled();
    });
  });

  describe('onEdit', () => {
    
    it('should call editPaymentInfo.emit', () => {
      spyOn(paymentSummaryComponent.editPaymentInfo, 'emit');

      paymentSummaryComponent.onEdit();

      expect(paymentSummaryComponent.editPaymentInfo.emit).toHaveBeenCalled();
    });
  });

  describe('when editPaymentInfo is emitted', () => {

    it('should call editPaymentInfoFunction', () => {
      spyOn(wrapper, 'editPaymentInfoFunction');

      paymentSummaryComponent.editPaymentInfo.emit();

      expect(wrapper.editPaymentInfoFunction).toHaveBeenCalled();
    });
  });
});
