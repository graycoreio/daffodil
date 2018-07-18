import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSummaryComponent } from './payment-summary.component';
import { Component } from '@angular/core';
import { PaymentInfo } from '@daffodil/core';
import { By } from '@angular/platform-browser';

let stubPaymentInfo: PaymentInfo = {
  name: 'test',
  cardnumber: 123,
  month: 123,
  year: 123,
  securitycode: 123
};

@Component({template: '<payment-summary [paymentInfo]="paymentInfoValue" (editPaymentInfo)="editPaymentInfoFunction()"></payment-summary>'})
class TestPaymentSummaryWrapper {
  paymentInfoValue: PaymentInfo = stubPaymentInfo;
  editPaymentInfoFunction: Function = () => {};
}

describe('PaymentSummaryComponent', () => {
  let component: TestPaymentSummaryWrapper;
  let fixture: ComponentFixture<TestPaymentSummaryWrapper>;
  let paymentSummaryComponent: PaymentSummaryComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestPaymentSummaryWrapper,
        PaymentSummaryComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPaymentSummaryWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();

    paymentSummaryComponent = fixture.debugElement.query(By.css('payment-summary')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
      spyOn(component, 'editPaymentInfoFunction');

      paymentSummaryComponent.editPaymentInfo.emit();

      expect(component.editPaymentInfoFunction).toHaveBeenCalled();
    });
  });
});
