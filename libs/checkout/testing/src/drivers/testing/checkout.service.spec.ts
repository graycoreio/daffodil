import { TestBed } from '@angular/core/testing';

import { DaffOrder } from '@daffodil/checkout';

import { DaffTestingCheckoutService } from './checkout.service';
import { DaffOrderFactory } from '../../order/factories/order.factory';

describe('Driver | Testing | Checkout | CheckoutService', () => {
  let testingCheckoutService: DaffTestingCheckoutService;
  const orderFactorySpy = jasmine.createSpyObj('DaffOrderFactory', ['create']);

  let stubOrder: DaffOrder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingCheckoutService,
        {provide: DaffOrderFactory, useValue: orderFactorySpy}
      ]
    });

    stubOrder = new DaffOrderFactory().create();
    orderFactorySpy.create.and.returnValue(stubOrder);

    testingCheckoutService = TestBed.get(DaffTestingCheckoutService);
  });

  it('should be created', () => {
    expect(testingCheckoutService).toBeTruthy();
  });

  describe('placeOrder', () => {
    let cartId;

    beforeEach(() => {
      cartId = 'cartId';
    });

    it('should return an order from order factory', () => {
      testingCheckoutService.placeOrder(cartId).subscribe(order => {
        expect(order).toEqual(stubOrder);
      });
    });
  });
});
