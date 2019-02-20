import { TestBed, async } from "@angular/core/testing";
import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import { PlaceOrderSuccess } from "../actions/order.actions";
import * as fromOrder from './index';

import { Order } from "@daffodil/core";
import { DaffOrderFactory } from "@daffodil/core/testing";

describe('selectOrderState', () => {

  let store: Store<fromOrder.OrderState>;
  const orderFactory: DaffOrderFactory = new DaffOrderFactory();
  let stubOrder: Order;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          order: combineReducers(fromOrder.reducers),
        })
      ]
    });

    stubOrder = orderFactory.create();
    store = TestBed.get(Store);
    store.dispatch(new PlaceOrderSuccess(stubOrder));
  }));

  describe('orderStateSelector', () => {
    
    it('selects order state', () => {
      const expectedOrderState = {
        order: stubOrder,
        loading: false,
        errors: []
      }

      store.pipe(select(fromOrder.orderStateSelector)).subscribe((order) => {
        expect(order).toEqual(expectedOrderState);
      });
    });
  });

  describe('selectOrderValueState', () => {
    
    it('selects orderValue state', () => {
      store.pipe(select(fromOrder.selectOrderValueState)).subscribe((order) => {
        expect(order).toEqual(stubOrder);
      });
    });
  });

  describe('selectLoadingState', () => {
    
    it('selects order loading state', () => {
      store.pipe(select(fromOrder.selectLoadingState)).subscribe((loading) => {
        expect(loading).toEqual(false);
      });
    });
  });
});
