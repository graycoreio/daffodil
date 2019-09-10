import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { DaffPaymentFactory } from '../../../testing/src';
import { PaymentContainer } from './payment.component';
import { UpdatePaymentInfo } from '../actions/payment.actions';
import * as fromPayment from '../reducers/index';
import { PaymentInfo } from '../../models/payment/payment-info';

describe('PaymentContainer', () => {
  let component: PaymentContainer;
  let fixture: ComponentFixture<PaymentContainer>;
  let store: MockStore<any>;
  let initialPaymentInfo: PaymentInfo;
  const paymentFactory: DaffPaymentFactory = new DaffPaymentFactory();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentContainer ],
      providers: [
        provideMockStore({})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentContainer);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    initialPaymentInfo = paymentFactory.create();
    store.overrideSelector(fromPayment.selectPaymentInfoState, initialPaymentInfo)

    spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  afterAll(() => {
    store.resetSelectors();
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
