import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutViewComponent } from './checkout-view.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { ShippingContainer } from '@daffodil/state';
import { ShippingAddress, ShippingFactory } from '@daffodil/core';

let shippingFactory = new ShippingFactory();
let paymentFactory = new PaymentFactory();
let stubIsShippingInfoValid = true;
let stubShippingInfo = shippingFactory.createShippingAddress();
let stubSelectedShippingOption = 'shippingOption';
let stubPaymentInfo: PaymentInfo = paymentFactory.create();
let stubShowPaymentView: boolean = true;

@Component({selector: 'shipping', template: ''})
class MockShippingComponent {
  @Input() isShippingInfoValid: Boolean;
  @Input() shippingInfo: ShippingAddress;
  @Input() selectedShippingOption: string;
  @Input() hideContinueToPayment: boolean;
  @Output() updateShippingInfo: EventEmitter<any> = new EventEmitter();
  @Output() selectShippingOption: EventEmitter<any> = new EventEmitter();
  @Output() continueToPayment: EventEmitter<any> = new EventEmitter();
}

@Component({selector: 'payment', template: ''})
class MockPaymentComponent {
  @Input() paymentInfo: PaymentInfo;
  @Output() updatePaymentInfo: EventEmitter<any> = new EventEmitter();
}

@Component({selector: '[shipping-container]', template: '<ng-content></ng-content>', exportAs: 'ShippingContainer'})
class MockShippingContainer {
  isShippingInfoValid$: Observable<boolean> = of(stubIsShippingInfoValid);
  shippingInfo$: Observable<ShippingAddress> = of(stubShippingInfo);
  selectedShippingOption$: Observable<string> = of(stubSelectedShippingOption);
  updateShippingInfo: Function = () => {};
  selectShippingOption: Function = () => {};
}

@Component({selector: '[payment-container]', template: '<ng-content></ng-content>', exportAs: 'PaymentContainer'})
class MockPaymentContainer {
  paymentInfo$: Observable<PaymentInfo> = of(stubPaymentInfo);
  updatePaymentInfo: Function = () => {};
}

describe('CheckoutViewComponent', () => {
  let component: CheckoutViewComponent;
  let fixture: ComponentFixture<CheckoutViewComponent>;
  let shipping: MockShippingComponent;
  let shippingContainer: ShippingContainer;
  let payment: MockPaymentComponent
  let paymentContainer: MockPaymentContainer;
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
        MockPaymentContainer
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
    paymentContainer = fixture.debugElement.query(By.css('[payment-container]')).componentInstance;  
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

    describe('when <shipping> emits continueToPayment', () => {
      
      it('should call onContinueToPayment', () => {
        spyOn(component, 'onContinueToPayment');
  
        shipping.continueToPayment.emit();
  
        expect(component.onContinueToPayment).toHaveBeenCalled();
      });
    });
  });

  describe('when payment emits updatePaymentInfo', () => {
    
    it('should call PaymentContainer.updatePaymentInfo', () => {
      spyOn(paymentContainer, 'updatePaymentInfo');

      payment.updatePaymentInfo.emit(stubPaymentInfo);

      expect(paymentContainer.updatePaymentInfo).toHaveBeenCalledWith(stubPaymentInfo);
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
