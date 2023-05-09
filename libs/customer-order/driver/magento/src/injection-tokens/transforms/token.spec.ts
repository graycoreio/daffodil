import { TestBed } from '@angular/core/testing';

import {
  DaffMagentoCustomerOrderExtraTransform,
  DaffMagentoCustomerOrderTransform,
  daffProvideCustomerOrderMagentoExtraOrderTransforms,
  MagentoCustomerOrder,
} from '@daffodil/customer-order/driver/magento';
import { MagentoCustomerOrderFactory } from '@daffodil/customer-order/driver/magento/testing';
import { DaffOrder } from '@daffodil/order';

import { DAFF_CUSTOMER_ORDER_MAGENTO_ORDER_TRANSFORM } from './token';

describe('@daffodil/customer-order/driver/magento | DAFF_CUSTOMER_ORDER_MAGENTO_ORDER_TRANSFORM', () => {
  let magentoOrderFactory: MagentoCustomerOrderFactory;
  let magentoOrder: MagentoCustomerOrder;
  let result: DaffOrder;

  let transforms: DaffMagentoCustomerOrderExtraTransform[];
  let orderTransform: DaffMagentoCustomerOrderTransform;

  beforeEach(() => {
    transforms = [
      (daffOrder, order) => ({
        ...daffOrder,
        id: `${daffOrder.id} transform 1`,
      }),
      (daffOrder, order) => ({
        ...daffOrder,
        id: `${daffOrder.id} transform 2`,
      }),
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffProvideCustomerOrderMagentoExtraOrderTransforms(...transforms),
      ],
    });

    magentoOrderFactory = TestBed.inject(MagentoCustomerOrderFactory);
    orderTransform = TestBed.inject(DAFF_CUSTOMER_ORDER_MAGENTO_ORDER_TRANSFORM);

    magentoOrder = magentoOrderFactory.create();
    result = orderTransform(magentoOrder, 'test');
  });

  it('should run the standard transform first, followed by the injected transforms', () => {
    expect(result.id).toEqual(`${magentoOrder.number} transform 1 transform 2`);
  });
});
