import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentComponent } from './payment.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PaymentInfo, PaymentFactory, PaymentContainer } from '@daffodil/core';
import { PaymentFormComponent } from '../payment-form/payment-form.component';
import { By } from '@angular/platform-browser';
import { PaymentSummaryComponent } from '../payment-summary/payment-summary.component';

let paymentFactory = new PaymentFactory();
let stubPaymentInfo = paymentFactory.create();

@Component({template: '<payment [paymentInfo]="paymentInfoValue" (updatePaymentInfo)="updatePaymentInfoFunction($event)"></payment>'})
class TestPaymentComponentWrapper {
  paymentInfoValue: PaymentInfo = stubPaymentInfo;
  updatePaymentInfoFunction: Function = () => {};
}

@Component({selector: 'payment-form', template: ''})
class MockPaymentFormComponent {
  @Input() paymentInfo: PaymentInfo;
  @Output() updatePaymentInfo: EventEmitter<any> = new EventEmitter();
}

@Component({selector: 'payment-summary', template: ''})
class MockPaymentSummaryComponent {
  @Input() paymentInfo: PaymentInfo;
  @Output() editPaymentInfo: EventEmitter<any> = new EventEmitter();
}

describe('PaymentComponent', () => {
  let component: TestPaymentComponentWrapper;
  let fixture: ComponentFixture<TestPaymentComponentWrapper>;
  let payment: PaymentComponent;
  let paymentForm: PaymentFormComponent;
  let paymentSummary: PaymentSummaryComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestPaymentComponentWrapper,
        MockPaymentFormComponent,
        MockPaymentSummaryComponent,
        PaymentComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPaymentComponentWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();

    payment = fixture.debugElement.query(By.css('payment')).componentInstance;
    paymentForm = fixture.debugElement.query(By.css('payment-form')).componentInstance;
    paymentSummary = fixture.debugElement.query(By.css('payment-summary')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take paymentInfo as input', () => {
    expect(payment.paymentInfo).toEqual(stubPaymentInfo);
  });

  describe('on <payment-form>', () => {
    
    it('should set paymentInfo', () => {
      expect(paymentForm.paymentInfo).toEqual(stubPaymentInfo);
    });
  });

  describe('when paymentForm.updatePaymentInfo is emitted', () => {

    it('should call hostComponent.updatePaymentInfoFunction', () => {
      spyOn(component, 'updatePaymentInfoFunction');
      paymentForm.updatePaymentInfo.emit(stubPaymentInfo);

      expect(component.updatePaymentInfoFunction).toHaveBeenCalledWith(stubPaymentInfo);
    });
  });

  describe('no <payment-summary>', () => {
    
    it('should set paymentInfo', () => {
      expect(paymentSummary.paymentInfo).toEqual(stubPaymentInfo);
    });
  });

  describe('when paymentForm.editPaymentInfo is emitted', () => {

    it('should call payment.togglePaymentView', () => {
      spyOn(payment, 'togglePaymentView');
      paymentSummary.editPaymentInfo.emit();

      expect(payment.togglePaymentView).toHaveBeenCalled();
    });
  });

  describe('ngOnInit', () => {
    
    it('should set showPaymentForm to true', () => {
      expect(payment.showPaymentForm).toBeTruthy();
    });
  });

  describe('togglePaymentView', () => {
    
    it('should toggle the showPaymentForm boolean', () => {
      payment.showPaymentForm = true;

      payment.togglePaymentView();

      expect(payment.showPaymentForm).toBeFalsy();
    });
  });

  describe('onUpdatePaymentInfo', () => {
    
    it('should call togglePaymentView', () => {
      spyOn(payment, 'togglePaymentView');

      payment.onUpdatePaymentInfo(stubPaymentInfo);

      expect(payment.togglePaymentView).toHaveBeenCalled();
    });
  });

  describe('when showPaymentForm is true', () => {

    let paymentFormNativeElement;
    let paymentSummaryNativeElement;

    beforeEach(() => {
      payment.showPaymentForm = true;
      fixture.detectChanges();

      paymentFormNativeElement = fixture.debugElement.query(By.css('payment-form')).nativeElement;
      paymentSummaryNativeElement = fixture.debugElement.query(By.css('payment-summary')).nativeElement;
    });
    
    it('should not put hidden attribute on payment-form', () => {
      expect(paymentFormNativeElement.hidden).toBeFalsy();
    });

    it('should put hidden attribute on payment-summary', () => {
      expect(paymentSummaryNativeElement.hidden).toBeTruthy();      
    });
  });

  describe('when showPaymentForm is false', () => {

    let paymentFormNativeElement;
    let paymentSummaryNativeElement;

    beforeEach(() => {
      payment.showPaymentForm = false;
      fixture.detectChanges();

      paymentFormNativeElement = fixture.debugElement.query(By.css('payment-form')).nativeElement;
      paymentSummaryNativeElement = fixture.debugElement.query(By.css('payment-summary')).nativeElement;
    });

    it('should put hidden attribute on payment-form', () => {
      expect(paymentFormNativeElement.hidden).toBeTruthy();
    });

    it('should not put hidden attribute on payment-summary', () => {
      expect(paymentSummaryNativeElement.hidden).toBeFalsy();     
    });
  });

  describe('when PaymentContainer.paymentInfo$ is null', () => {

    let paymentSummary;
    
    beforeEach(() => {
      payment.paymentInfo = null;

      fixture.detectChanges();

      paymentSummary = fixture.debugElement.query(By.css('payment-summary'));
    });

    it('should not render payment-summary', () => {
      expect(paymentSummary).toBeNull();
    });
  });
});
