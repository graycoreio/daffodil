import { TestBed } from '@angular/core/testing';

import { DaffOrder } from '@daffodil/order';
import {
  MagentoOrderExtraTransform,
  MagentoOrderTransform,
  provideMagentoOrderExtraTransforms,
  MagentoOrder,
} from '@daffodil/order/driver/magento/2-4-1';
import { MagentoOrderFactory } from '@daffodil/order/driver/magento/2-4-1/testing';

import { MAGENTO_ORDER_TRANSFORM } from './token';

describe('@daffodil/order/driver/magento | MAGENTO_ORDER_TRANSFORM', () => {
  let magentoOrderFactory: MagentoOrderFactory;
  let magentoOrder: MagentoOrder;
  let result: DaffOrder;

  let transforms: MagentoOrderExtraTransform[];
  let orderTransform: MagentoOrderTransform;

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
        ...provideMagentoOrderExtraTransforms(...transforms),
      ],
    });

    magentoOrderFactory = TestBed.inject(MagentoOrderFactory);
    orderTransform = TestBed.inject(MAGENTO_ORDER_TRANSFORM);

    magentoOrder = magentoOrderFactory.create();
    result = orderTransform(magentoOrder);
  });

  it('should run the standard transform first, followed by the injected transforms', () => {
    expect(result.id).toEqual(`${magentoOrder.number} transform 1 transform 2`);
  });
});
