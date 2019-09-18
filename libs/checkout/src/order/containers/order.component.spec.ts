import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { OrderContainer } from './order.component';
import { PlaceOrder } from '../actions/order.actions';
import * as fromOrder from '../reducers/index';
import { DaffOrderFactory } from '../../../testing/src';
import { Order } from '../../models/order/order';

describe('OrderContainer', () => {
  let component: OrderContainer;
  let fixture: ComponentFixture<OrderContainer>;
  let store: MockStore<any>;
  let stubLoading: boolean;
  let stubOrder: Order;
  let cartFactory: DaffOrderFactory;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderContainer ],
      providers: [
        provideMockStore({})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    cartFactory = TestBed.get(DaffOrderFactory);
    fixture = TestBed.createComponent(OrderContainer);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    stubLoading = false;
    stubOrder = cartFactory.create();

    store.overrideSelector(fromOrder.selectLoadingState, stubLoading);
    store.overrideSelector(fromOrder.selectOrderValueState, stubOrder);

    spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  afterAll(() => {
    store.resetSelectors();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngInit', () => {

    it('initializes loading$', () => {
      component.loading$.subscribe((loading) => {
        expect(loading).toEqual(stubLoading);
      });
    });

    it('initializes cart$', () => {
      component.order$.subscribe((order) => {
        expect(order).toEqual(stubOrder);
      });
    });
  });

  describe('placeOrder', () => {
    
    it('should call store.dispatch with a PlaceOrder action', () => {
      component.placeOrder(stubOrder);

      expect(store.dispatch).toHaveBeenCalledWith(new PlaceOrder(stubOrder));
    });
  });
});
