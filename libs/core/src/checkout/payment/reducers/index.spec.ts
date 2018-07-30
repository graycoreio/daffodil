import { TestBed, async } from "@angular/core/testing";

import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import * as fromPayment from './index';
import { PaymentFactory } from "../testing/factories/payment.factory";
import { PaymentInfo } from '../models/payment-info';
import { UpdatePaymentInfo } from "../actions/payment.actions";

describe('selectPaymentState', () => {

  let store: Store<fromPayment.PaymentState>;
  let paymentFactory: PaymentFactory = new PaymentFactory();
  let stubPaymentInfo: PaymentInfo;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          payment: combineReducers(fromPayment.reducers),
        })
      ]
    });

    stubPaymentInfo = paymentFactory.create();
    store = TestBed.get(Store);
    store.dispatch(new UpdatePaymentInfo(stubPaymentInfo));
  }));

  describe('selectPaymentState', () => {
    
    it('selects payment state', () => {
      let expectedPaymentState = {
        paymentInfo: stubPaymentInfo
      }

      store.pipe(select(fromPayment.paymentStateSelector)).subscribe((paymentState) => {
        expect(paymentState).toEqual(expectedPaymentState);
      });
    });
  });

  describe('selectPaymentInfoState', () => {
    
    it('selects paymentInfo state', () => {
      store.pipe(select(fromPayment.selectPaymentInfoState)).subscribe((paymentInfo) => {
        expect(paymentInfo).toEqual(stubPaymentInfo);
      });
    });
  });
});
