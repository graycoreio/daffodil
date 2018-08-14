import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentComponent } from './payment.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PaymentInfo, BillingFactory, DaffodilAddress, DaffodilAddressFactory } from '@daffodil/core';
import { By } from '@angular/platform-browser';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import * as fromFoundationCheckout from '../../../reducers';
import { ShowPaymentForm, ToggleShowPaymentForm, HidePaymentForm } from '../../../actions/payment.actions';
import { of } from 'rxjs';

let billingFactory = new BillingFactory();
let daffodilAddressFactory = new DaffodilAddressFactory();
let stubPaymentInfo = billingFactory.create();
let stubBillingAddress = daffodilAddressFactory.create();
let stubShowPaymentForm = true;
let stubBillingAddressIsShippingAddress = false;

@Component({template: '<payment [paymentInfo]="paymentInfoValue" [billingAddress]="billingAddressValue" [billingAddressIsShippingAddress]="billingAddressIsShippingAddressValue" (updatePaymentInfo)="updatePaymentInfoFunction($event)" (updateBillingAddress)="updateBillingAddressFunction($event)" (toggleBillingAddressIsShippingAddress)="toggleBillingAddressIsShippingAddressFunction()"></payment>'})
class TestPaymentComponentWrapper {
  paymentInfoValue: PaymentInfo = stubPaymentInfo;
  billingAddressValue: DaffodilAddress = stubBillingAddress;
  billingAddressIsShippingAddressValue: boolean = stubBillingAddressIsShippingAddress;
  updatePaymentInfoFunction = () => {};
  updateBillingAddressFunction = () => {};
  toggleBillingAddressIsShippingAddressFunction = () => {};
}

@Component({selector: 'payment-form', template: ''})
class MockPaymentFormComponent {
  @Input() paymentInfo: PaymentInfo;
  @Input() billingAddress: DaffodilAddress;
  @Input() billingAddressIsShippingAddress: boolean;
  @Output() updatePaymentInfo: EventEmitter<any> = new EventEmitter();
  @Output() updateBillingAddress: EventEmitter<any> = new EventEmitter();
  @Output() toggleBillingAddressIsShippingAddress: EventEmitter<any> = new EventEmitter();
}

@Component({selector: 'payment-summary', template: ''})
class MockPaymentSummaryComponent {
  @Input() paymentInfo: PaymentInfo;
  @Output() editPaymentInfo: EventEmitter<any> = new EventEmitter();
}

@Component({selector: 'billing-summary', template: ''})
class MockBillingSummaryComponent {
  @Input() billingAddress: DaffodilAddress;
  @Input() billingAddressIsShippingAddress: boolean;
}

describe('PaymentComponent', () => {
  let component: TestPaymentComponentWrapper;
  let fixture: ComponentFixture<TestPaymentComponentWrapper>;
  let payment: PaymentComponent;
  let paymentForm: MockPaymentFormComponent;
  let paymentSummary: MockPaymentSummaryComponent;
  let billingSummary: MockBillingSummaryComponent;
  let store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          shippings: combineReducers(fromFoundationCheckout.reducers),
        })
      ],
      declarations: [ 
        TestPaymentComponentWrapper,
        MockPaymentFormComponent,
        MockPaymentSummaryComponent,
        MockBillingSummaryComponent,
        PaymentComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPaymentComponentWrapper);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(fromFoundationCheckout, 'selectShowPaymentForm').and.returnValue(stubShowPaymentForm);
    spyOn(store, 'dispatch');
    fixture.detectChanges();

    payment = fixture.debugElement.query(By.css('payment')).componentInstance;
    paymentForm = fixture.debugElement.query(By.css('payment-form')).componentInstance;
    paymentSummary = fixture.debugElement.query(By.css('payment-summary')).componentInstance;
    billingSummary = fixture.debugElement.query(By.css('billing-summary')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take paymentInfo as input', () => {
    expect(payment.paymentInfo).toEqual(stubPaymentInfo);
  });

  it('should be able to take billingAddress as input', () => {
    expect(payment.billingAddress).toEqual(stubBillingAddress);
  });

  it('should be able to take billingAddressIsShippingAddress as input', () => {
    expect(payment.billingAddressIsShippingAddress).toEqual(stubBillingAddressIsShippingAddress);
  });

  describe('on <payment-form>', () => {
    
    it('should set paymentInfo', () => {
      expect(paymentForm.paymentInfo).toEqual(stubPaymentInfo);
    });

    it('should set billingAddress', () => {
      expect(paymentForm.billingAddress).toEqual(stubBillingAddress);
    });

    it('should set billingAddressIsShippingAddress', () => {
      expect(paymentForm.billingAddressIsShippingAddress).toEqual(stubBillingAddressIsShippingAddress);
    });
  });

  describe('when paymentForm emits', () => {

    describe('updatePaymentInfo', () => {

      it('should call hostComponent.updatePaymentInfoFunction', () => {
        spyOn(component, 'updatePaymentInfoFunction');
        paymentForm.updatePaymentInfo.emit(stubPaymentInfo);

        expect(component.updatePaymentInfoFunction).toHaveBeenCalledWith(stubPaymentInfo);
      });
    });

    describe('updateBillingAddress', () => {

      it('should call hostComponent.updateBillingAddressFunction', () => {
        spyOn(component, 'updateBillingAddressFunction');
        paymentForm.updateBillingAddress.emit(stubBillingAddress);

        expect(component.updateBillingAddressFunction).toHaveBeenCalledWith(stubBillingAddress);
      });
    });

    describe('toggleBillingAddressIsShippingAddress', () => {

      it('should call hostComponent.toggleBillingAddressIsShippingAddressFunction', () => {
        spyOn(component, 'toggleBillingAddressIsShippingAddressFunction');
        paymentForm.toggleBillingAddressIsShippingAddress.emit();

        expect(component.toggleBillingAddressIsShippingAddressFunction).toHaveBeenCalled();
      });
    });
  });

  describe('on <payment-summary>', () => {
    
    it('should set paymentInfo', () => {
      expect(paymentSummary.paymentInfo).toEqual(stubPaymentInfo);
    });
  });

  describe('when paymentSummary.editPaymentInfo is emitted', () => {

    it('should call payment.togglePaymentView', () => {
      spyOn(payment, 'togglePaymentView');
      paymentSummary.editPaymentInfo.emit();

      expect(payment.togglePaymentView).toHaveBeenCalled();
    });
  });

  describe('on <billing-summary>', () => {
    
    it('should set billingAddress', () => {
      expect(billingSummary.billingAddress).toEqual(stubBillingAddress);
    });
    
    it('should set billingAddressIsShippingAddress', () => {
      expect(billingSummary.billingAddressIsShippingAddress).toEqual(stubBillingAddressIsShippingAddress);
    });
  });

  describe('ngOnInit', () => {

    describe('when paymentInfo is defined', () => {
      
      beforeEach(() => {
        payment.paymentInfo = stubPaymentInfo;
        payment.ngOnInit();
      });

      it('should dispatch a HidePaymentForm action', () => {
        expect(store.dispatch).toHaveBeenCalledWith(new HidePaymentForm());
      });
    });

    describe('when paymentInfo is not defined', () => {

      beforeEach(() => {
        payment.paymentInfo = null;
        payment.ngOnInit();
      });
      
      it('should dispatch a ShowPaymentForm action', () => {
        expect(store.dispatch).toHaveBeenCalledWith(new ShowPaymentForm());
      });
    });

    it('should initialize showPaymentForm$', () => {
      payment.showPaymentForm$.subscribe((showPaymentForm) => {
        expect(showPaymentForm).toEqual(stubShowPaymentForm);
      });
    });
  });

  describe('togglePaymentView', () => {
    
    it('should dispatch a ToggleShowPaymentForm action', () => {
      payment.togglePaymentView();

      expect(store.dispatch).toHaveBeenCalledWith(new ToggleShowPaymentForm());
    });
  });

  describe('onUpdatePaymentInfo', () => {
    
    it('should call togglePaymentView', () => {
      spyOn(payment, 'togglePaymentView');

      payment.onUpdatePaymentInfo(stubPaymentInfo);

      expect(payment.togglePaymentView).toHaveBeenCalled();
    });
  });

  describe('when showPaymentForm$ is true', () => {

    let paymentFormNativeElement;
    let paymentSummaryNativeElement;
    let billingSummaryNativeElement;

    beforeEach(() => {
      payment.showPaymentForm$ = of(true);
      fixture.detectChanges();

      paymentFormNativeElement = fixture.debugElement.query(By.css('payment-form')).nativeElement;
      paymentSummaryNativeElement = fixture.debugElement.query(By.css('payment-summary')).nativeElement;
      billingSummaryNativeElement = fixture.debugElement.query(By.css('billing-summary')).nativeElement;
    });
    
    it('should not put hidden attribute on payment-form', () => {
      expect(paymentFormNativeElement.hidden).toBeFalsy();
    });

    it('should put hidden attribute on payment-summary', () => {
      expect(paymentSummaryNativeElement.hidden).toBeTruthy();      
    });

    it('should put hidden attribute on billing-summary', () => {
      expect(billingSummaryNativeElement.hidden).toBeTruthy();      
    });
  });

  describe('when showPaymentForm$ is false', () => {

    let paymentFormNativeElement;
    let paymentSummaryNativeElement;
    let billingSummaryNativeElement;

    beforeEach(() => {
      payment.showPaymentForm$ = of(false);
      fixture.detectChanges();

      paymentFormNativeElement = fixture.debugElement.query(By.css('payment-form')).nativeElement;
      paymentSummaryNativeElement = fixture.debugElement.query(By.css('payment-summary')).nativeElement;
      billingSummaryNativeElement = fixture.debugElement.query(By.css('billing-summary')).nativeElement;
    });

    it('should put hidden attribute on payment-form', () => {
      expect(paymentFormNativeElement.hidden).toBeTruthy();
    });

    it('should not put hidden attribute on payment-summary', () => {
      expect(paymentSummaryNativeElement.hidden).toBeFalsy();     
    });

    it('should not put hidden attribute on billing-summary', () => {
      expect(billingSummaryNativeElement.hidden).toBeFalsy();     
    });
  });

  describe('when paymentInfo is null', () => {

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
