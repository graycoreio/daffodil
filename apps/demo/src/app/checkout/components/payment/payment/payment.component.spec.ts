import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { of } from 'rxjs';

import { DaffAddress } from '@daffodil/core';
import { DaffAddressFactory } from '@daffodil/core/testing';
import { PaymentInfo } from '@daffodil/checkout';
import { DaffPaymentFactory } from '@daffodil/checkout/testing';

import { ShowPaymentForm, ToggleShowPaymentForm, HidePaymentForm } from '../../../actions/payment.actions';
import * as fromDemoCheckout from '../../../reducers';
import { PaymentComponent } from './payment.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

const paymentFactory = new DaffPaymentFactory();
const daffodilAddressFactory = new DaffAddressFactory();
const stubPaymentInfo = paymentFactory.create();
const stubBillingAddress = daffodilAddressFactory.create();
const stubShowPaymentForm = true;
const stubBillingAddressIsShippingAddress = false;

@Component({
  template: '<demo-payment ' +
              '[paymentInfo]="paymentInfoValue" ' + 
              '[billingAddress]="billingAddressValue" ' + 
              '[billingAddressIsShippingAddress]="billingAddressIsShippingAddressValue" ' + 
              '(updatePaymentInfo)="updatePaymentInfoFunction($event)" ' + 
              '(updateBillingAddress)="updateBillingAddressFunction($event)" ' + 
              '(toggleBillingAddressIsShippingAddress)="toggleBillingAddressIsShippingAddressFunction()"></demo-payment>'
})
class WrapperComponent {
  paymentInfoValue: PaymentInfo = stubPaymentInfo;
  billingAddressValue: DaffAddress = stubBillingAddress;
  billingAddressIsShippingAddressValue: boolean = stubBillingAddressIsShippingAddress;
  updatePaymentInfoFunction = () => {};
  updateBillingAddressFunction = () => {};
  toggleBillingAddressIsShippingAddressFunction = () => {};
}

@Component({selector: 'demo-payment-form', template: ''})
class MockPaymentFormComponent {
  @Input() paymentInfo: PaymentInfo;
  @Input() billingAddress: DaffAddress;
  @Input() billingAddressIsShippingAddress: boolean;
  @Output() updatePaymentInfo: EventEmitter<any> = new EventEmitter();
  @Output() updateBillingAddress: EventEmitter<any> = new EventEmitter();
  @Output() toggleBillingAddressIsShippingAddress: EventEmitter<any> = new EventEmitter();
}

@Component({selector: 'demo-payment-summary', template: ''})
class MockPaymentSummaryComponent {
  @Input() paymentInfo: PaymentInfo;
  @Output() editPaymentInfo: EventEmitter<any> = new EventEmitter();
}

@Component({selector: 'demo-billing-summary', template: ''})
class MockBillingSummaryComponent {
  @Input() billingAddress: DaffAddress;
  @Input() billingAddressIsShippingAddress: boolean;
}

describe('PaymentComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let payment: PaymentComponent;
  let paymentForm: MockPaymentFormComponent;
  let paymentSummary: MockPaymentSummaryComponent;
  let billingSummary: MockBillingSummaryComponent;
  let store: MockStore<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        MockPaymentFormComponent,
        MockPaymentSummaryComponent,
        MockBillingSummaryComponent,
        PaymentComponent
      ],
      providers: [
        provideMockStore({})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    store = TestBed.get(Store);
    store.overrideSelector(fromDemoCheckout.selectShowPaymentForm, stubShowPaymentForm)
    spyOn(store, 'dispatch');
    
    fixture.detectChanges();

    payment = fixture.debugElement.query(By.css('demo-payment')).componentInstance;
    paymentForm = fixture.debugElement.query(By.css('demo-payment-form')).componentInstance;
    paymentSummary = fixture.debugElement.query(By.css('demo-payment-summary')).componentInstance;
    billingSummary = fixture.debugElement.query(By.css('demo-billing-summary')).componentInstance;
  });

  afterAll(() => {
    store.resetSelectors();
  })

  it('should create', () => {
    expect(payment).toBeTruthy();
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

  describe('on <demo-payment-form>', () => {
    
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
        spyOn(wrapper, 'updatePaymentInfoFunction');
        paymentForm.updatePaymentInfo.emit(stubPaymentInfo);

        expect(wrapper.updatePaymentInfoFunction).toHaveBeenCalledWith(stubPaymentInfo);
      });
    });

    describe('updateBillingAddress', () => {

      it('should call hostComponent.updateBillingAddressFunction', () => {
        spyOn(wrapper, 'updateBillingAddressFunction');
        paymentForm.updateBillingAddress.emit(stubBillingAddress);

        expect(wrapper.updateBillingAddressFunction).toHaveBeenCalledWith(stubBillingAddress);
      });
    });

    describe('toggleBillingAddressIsShippingAddress', () => {

      it('should call hostComponent.toggleBillingAddressIsShippingAddressFunction', () => {
        spyOn(wrapper, 'toggleBillingAddressIsShippingAddressFunction');
        paymentForm.toggleBillingAddressIsShippingAddress.emit();

        expect(wrapper.toggleBillingAddressIsShippingAddressFunction).toHaveBeenCalled();
      });
    });
  });

  describe('on <demo-payment-summary>', () => {
    
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

  describe('on <demo-billing-summary>', () => {
    
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

      paymentFormNativeElement = fixture.debugElement.query(By.css('demo-payment-form')).nativeElement;
      paymentSummaryNativeElement = fixture.debugElement.query(By.css('demo-payment-summary')).nativeElement;
      billingSummaryNativeElement = fixture.debugElement.query(By.css('demo-billing-summary')).nativeElement;
    });
    
    it('should not put hidden attribute on demo-payment-form', () => {
      expect(paymentFormNativeElement.hidden).toBeFalsy();
    });

    it('should put hidden attribute on demo-payment-summary', () => {
      expect(paymentSummaryNativeElement.hidden).toBeTruthy();      
    });

    it('should put hidden attribute on demo-billing-summary', () => {
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

      paymentFormNativeElement = fixture.debugElement.query(By.css('demo-payment-form')).nativeElement;
      paymentSummaryNativeElement = fixture.debugElement.query(By.css('demo-payment-summary')).nativeElement;
      billingSummaryNativeElement = fixture.debugElement.query(By.css('demo-billing-summary')).nativeElement;
    });

    it('should put hidden attribute on demo-payment-form', () => {
      expect(paymentFormNativeElement.hidden).toBeTruthy();
    });

    it('should not put hidden attribute on demo-payment-summary', () => {
      expect(paymentSummaryNativeElement.hidden).toBeFalsy();     
    });

    it('should not put hidden attribute on demo-billing-summary', () => {
      expect(billingSummaryNativeElement.hidden).toBeFalsy();     
    });
  });

  describe('when paymentInfo is null', () => {
    
    let paymentSummaryElement;
    
    beforeEach(() => {
      payment.paymentInfo = null;

      fixture.detectChanges();

      paymentSummaryElement = fixture.debugElement.query(By.css('demo-payment-summary'));
    });

    it('should not render demo-payment-summary', () => {
      expect(paymentSummaryElement).toBeNull();
    });
  });
});
