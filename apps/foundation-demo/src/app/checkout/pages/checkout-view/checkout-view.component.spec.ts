import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutViewComponent } from './checkout-view.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { DaffodilAddress, DaffodilAddressFactory, PaymentInfo, BillingFactory } from '@daffodil/core';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { ShowPaymentView } from '../../actions/payment.actions';
import * as fromFoundationCheckout from '../../reducers/index';
import { ShippingContainer } from '@daffodil/state';

let daffodilAddressFactory = new DaffodilAddressFactory();
let billingFactory = new BillingFactory();
let stubIsShippingInfoValid = true;
let stubShippingInfo = daffodilAddressFactory.create();
let stubSelectedShippingOption = 'shippingOption';
let stubPaymentInfo: PaymentInfo = billingFactory.create();
let stubShowPaymentView: boolean = true;
let stubBillingAddress: DaffodilAddress = daffodilAddressFactory.create();
let stubBillingAddressIsShippingAddress: boolean = false;

@Component({selector: 'shipping', template: ''})
class MockShippingComponent {
  @Input() isShippingInfoValid: boolean;
  @Input() shippingInfo: DaffodilAddress;
  @Input() selectedShippingOption: string;
  @Input() hideContinueToPayment: boolean;
  @Output() updateShippingInfo: EventEmitter<any> = new EventEmitter();
  @Output() selectShippingOption: EventEmitter<any> = new EventEmitter();
  @Output() continueToPayment: EventEmitter<any> = new EventEmitter();
}

@Component({selector: 'payment', template: ''})
class MockPaymentComponent {
  @Input() paymentInfo: PaymentInfo;
  @Input() billingAddress: DaffodilAddress;
  @Input() billingAddressIsShippingAddress: boolean;
  @Output() updatePaymentInfo: EventEmitter<any> = new EventEmitter();
  @Output() updateBillingAddress: EventEmitter<any> = new EventEmitter();
  @Output() toggleBillingAddressIsShippingAddress: EventEmitter<any> = new EventEmitter();
}

@Component({selector: '[shipping-container]', template: '<ng-content></ng-content>', exportAs: 'ShippingContainer'})
class MockShippingContainer {
  isShippingInfoValid$: Observable<boolean> = of(stubIsShippingInfoValid);
  shippingInfo$: Observable<DaffodilAddress> = of(stubShippingInfo);
  selectedShippingOption$: Observable<string> = of(stubSelectedShippingOption);
  updateShippingInfo = () => {};
  selectShippingOption = () => {};
}

@Component({selector: '[billing-container]', template: '<ng-content></ng-content>', exportAs: 'BillingContainer'})
class MockBillingContainer {
  paymentInfo$: Observable<PaymentInfo> = of(stubPaymentInfo);
  billingAddress$: Observable<DaffodilAddress> = of(stubBillingAddress);
  billingAddressIsShippingAddress$: Observable<boolean> = of(stubBillingAddressIsShippingAddress);
  updatePaymentInfo = () => {};
  updateBillingAddress = () => {};
  toggleBillingAddressIsShippingAddress = () => {};
}

describe('CheckoutViewComponent', () => {
  let component: CheckoutViewComponent;
  let fixture: ComponentFixture<CheckoutViewComponent>;
  let shipping: MockShippingComponent;
  let shippingContainer: ShippingContainer;
  let payment: MockPaymentComponent
  let billingContainer: MockBillingContainer;
  let store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          shippings: combineReducers(fromFoundationCheckout.reducers),
        })
      ],
      declarations: [
        CheckoutViewComponent,
        MockShippingComponent,
        MockShippingContainer,
        MockPaymentComponent,
        MockBillingContainer
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutViewComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(fromFoundationCheckout, 'selectShowPaymentView').and.returnValue(stubShowPaymentView);
    spyOn(store, 'dispatch');
    fixture.detectChanges();

    shipping = fixture.debugElement.query(By.css('shipping')).componentInstance;
    shippingContainer = fixture.debugElement.query(By.css('[shipping-container]')).componentInstance;
    payment = fixture.debugElement.query(By.css('payment')).componentInstance;
    billingContainer = fixture.debugElement.query(By.css('[billing-container]')).componentInstance;  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  describe('ngOnInit', () => {
    
    it('should initialize showPaymentView$', () => {
      component.showPaymentView$.subscribe((showPaymentView) => {
        expect(showPaymentView).toEqual(stubShowPaymentView);
      });
    });
  });
  
  describe('on <shipping>', () => {
  
    it('should set isShippingInfoValid', () => {
      expect(shipping.isShippingInfoValid).toEqual(stubIsShippingInfoValid);
    });

    it('should set shippingInfo', () => {
      expect(shipping.shippingInfo).toEqual(stubShippingInfo);
    });

    it('should set selectedShippingOption', () => {
      expect(shipping.selectedShippingOption).toEqual(stubSelectedShippingOption);
    });

    it('should set hideContinueToPayment', () => {
      expect(shipping.hideContinueToPayment).toEqual(stubShowPaymentView);
    });
  });

  describe('on <payment>', () => {
    
    it('should set paymentInfo', () => {
      expect(payment.paymentInfo).toEqual(stubPaymentInfo);
    });

    it('should set billingAddress', () => {
      expect(payment.billingAddress).toEqual(stubBillingAddress);
    });

    it('should set billingAddressIsShippingAddress', () => {
      expect(payment.billingAddressIsShippingAddress).toEqual(stubBillingAddressIsShippingAddress);
    });
  });

  describe('when <shipping> emits', () => {
    
    describe('updateShippingInfo', () => {
      
      it('should call function passed by ShippingContainer', () => {
        spyOn(shippingContainer, 'updateShippingInfo');

        shipping.updateShippingInfo.emit(stubShippingInfo);

        expect(shippingContainer.updateShippingInfo).toHaveBeenCalledWith(stubShippingInfo);
      });
    });

    describe('selectShippingOption', () => {
      
      it('should call function passed by ShippingContainer', () => {
        spyOn(shippingContainer, 'selectShippingOption');

        shipping.selectShippingOption.emit(stubSelectedShippingOption);

        expect(shippingContainer.selectShippingOption).toHaveBeenCalledWith(stubSelectedShippingOption);
      });
    });

    describe('continueToPayment', () => {
      
      it('should call onContinueToPayment', () => {
        spyOn(component, 'onContinueToPayment');
  
        shipping.continueToPayment.emit();
  
        expect(component.onContinueToPayment).toHaveBeenCalled();
      });
    });
  });

  describe('when payment emits', () => {

    describe('updatePaymentInfo', () => {
      
      it('should call BillingContainer.updatePaymentInfo', () => {
        spyOn(billingContainer, 'updatePaymentInfo');

        payment.updatePaymentInfo.emit(stubPaymentInfo);

        expect(billingContainer.updatePaymentInfo).toHaveBeenCalledWith(stubPaymentInfo);
      });
    });

    describe('updateBillingAddress', () => {
      
      it('should call BillingContainer.updateBillingAddress', () => {
        spyOn(billingContainer, 'updateBillingAddress');

        payment.updateBillingAddress.emit(stubBillingAddress);

        expect(billingContainer.updateBillingAddress).toHaveBeenCalledWith(stubBillingAddress);
      });
    });

    describe('toggleBillingAddressIsShippingAddress', () => {
      
      it('should call BillingContainer.toggleBillingAddressIsShippingAddress', () => {
        spyOn(billingContainer, 'toggleBillingAddressIsShippingAddress');

        payment.toggleBillingAddressIsShippingAddress.emit();

        expect(billingContainer.toggleBillingAddressIsShippingAddress).toHaveBeenCalled();
      });
    });
  });

  describe('onContinueToPayment', () => {
    
    it('should dispatch a ShowPaymentView action', () => {
      component.onContinueToPayment();

      expect(store.dispatch).toHaveBeenCalledWith(new ShowPaymentView());
    });
  });

  describe('when showPaymentView$ is false', () => {
    
    it('should not render checkout__payment', () => {

      component.showPaymentView$ = of(false);
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.checkout__payment'))).toBeNull();
    });
  });

  describe('when showPaymentView$ is true', () => {
    
    it('should render checkout__payment', () => {
      component.showPaymentView$ = of(true);
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.checkout__payment'))).not.toBeNull();
    });
  });
});
