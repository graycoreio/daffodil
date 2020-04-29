import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { OrderContainer } from './order.component';
import { DaffPlaceOrder } from '../actions/order.actions';
import { DaffOrderFactory } from '../../../testing/src';
import { DaffOrder } from '../../models/order/order';
import { selectLoading, selectOrder } from '../selectors/order.selector';

describe('OrderContainer', () => {
  let component: OrderContainer;
  let fixture: ComponentFixture<OrderContainer>;
  let store: MockStore<any>;
  let stubLoading: boolean;
  let stubOrder: DaffOrder;
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

    store.overrideSelector(selectLoading, stubLoading);
    store.overrideSelector(selectOrder, stubOrder);

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
});
