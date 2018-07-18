import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentComponent } from './payment.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PaymentInfo, PaymentFactory, PaymentContainer } from '@daffodil/core';
import { PaymentFormComponent } from '../payment-form/payment-form.component';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { PaymentSummaryComponent } from '../payment-summary/payment-summary.component';

let paymentFactory = new PaymentFactory();
let stubPaymentInfo = paymentFactory.create();

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

@Component({selector: '[payment-container]', template: '<ng-content></ng-content>', exportAs: 'PaymentContainer'})
class MockPaymentContainer {
  paymentInfo$: Observable<PaymentInfo> = of(stubPaymentInfo);
  updatePaymentInfo: Function = () => {};
}

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;
  let paymentForm: PaymentFormComponent;
  let paymentSummary: PaymentSummaryComponent;
  let paymentContainer: PaymentContainer;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PaymentComponent,
        MockPaymentContainer,
        MockPaymentFormComponent,
        MockPaymentSummaryComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    paymentForm = fixture.debugElement.query(By.css('payment-form')).componentInstance;
    paymentSummary = fixture.debugElement.query(By.css('payment-summary')).componentInstance;
    paymentContainer = fixture.debugElement.query(By.css('[payment-container]')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <payment-form>', () => {
    
    it('should set paymentInfo', () => {
      expect(paymentForm.paymentInfo).toEqual(stubPaymentInfo);
    });
  });

  describe('when paymentForm.updatePaymentInfo is emitted', () => {

    it('should call PaymentContainer.updatePaymentInfo', () => {
      spyOn(paymentContainer, 'updatePaymentInfo');
      paymentForm.updatePaymentInfo.emit(stubPaymentInfo);

      expect(paymentContainer.updatePaymentInfo).toHaveBeenCalledWith(stubPaymentInfo);
    });
  });

  describe('no <payment-summary>', () => {
    
    it('should set paymentInfo', () => {
      expect(paymentSummary.paymentInfo).toEqual(stubPaymentInfo);
    });
  });

  describe('when paymentForm.editPaymentInfo is emitted', () => {

    it('should call payment.togglePaymentView', () => {
      spyOn(component, 'togglePaymentView');
      paymentSummary.editPaymentInfo.emit();

      expect(component.togglePaymentView).toHaveBeenCalled();
    });
  });

  describe('ngOnInit', () => {
    
    it('should set showPaymentForm to true', () => {
      expect(component.showPaymentForm).toBeTruthy();
    });
  });

  describe('togglePaymentView', () => {
    
    it('should toggle the showPaymentForm boolean', () => {
      component.showPaymentForm = true;

      component.togglePaymentView();

      expect(component.showPaymentForm).toBeFalsy();
    });
  });

  describe('when showPaymentForm is true', () => {

    let paymentFormNativeElement;
    let paymentSummaryNativeElement;

    beforeEach(() => {
      component.showPaymentForm = true;
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
      component.showPaymentForm = false;
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
      paymentContainer.paymentInfo$ = of(null);

      fixture.detectChanges();

      paymentSummary = fixture.debugElement.query(By.css('payment-summary'));
    });

    it('should not render payment-summary', () => {
      expect(paymentSummary).toBeNull();
    });
  });
});
