import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { PaymentContainer } from './payment.component';
import { PaymentInfo } from '../models/payment-info';
import { UpdatePaymentInfo } from '../actions/payment.actions';
import * as fromPayment from '../reducers';
import { PaymentFactory } from '../testing/factories/payment.factory';

describe('PaymentContainer', () => {
  let component: PaymentContainer;
  let fixture: ComponentFixture<PaymentContainer>;
  let store;
  let initialPaymentInfo: PaymentInfo;
  let paymentFactory: PaymentFactory;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          payments: combineReducers(fromPayment.reducers),
        })
      ],
      declarations: [ PaymentContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentContainer);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    paymentFactory = new PaymentFactory();
    initialPaymentInfo = paymentFactory.create();

    spyOn(fromPayment, 'selectPaymentInfoState').and.returnValue(initialPaymentInfo);
    spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngInit', () => {

    it('initializes paymentInfo$', () => {
      component.paymentInfo$.subscribe((paymentInfo) => {
        expect(paymentInfo).toEqual(initialPaymentInfo);
      });
    });
  });

  describe('updatePaymentInfo', () => {
    
    it('should call store.dispatch with UpdatePaymentInfo action', () => {
      component.updatePaymentInfo(initialPaymentInfo);

      expect(store.dispatch).toHaveBeenCalledWith(new UpdatePaymentInfo(initialPaymentInfo));
    });
  });
});
