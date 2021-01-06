import { TestBed } from '@angular/core/testing';

import {
  DaffCartPaymentFactory
} from '@daffodil/cart/testing';

import { DaffMagentoPaymentMethodInputTransformer } from './payment-method.service';

describe('Driver | Magento | Cart | Transformer | MagentoPaymentMethodInput', () => {
  let service: DaffMagentoPaymentMethodInputTransformer;

  let daffPaymentFactory: DaffCartPaymentFactory;

  let mockDaffPayment;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoPaymentMethodInputTransformer
      ]
    });

    service = TestBed.inject(DaffMagentoPaymentMethodInputTransformer);

    daffPaymentFactory = TestBed.inject(DaffCartPaymentFactory);

    mockDaffPayment = daffPaymentFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a payment method input', () => {
    let transformedPaymentMethod;
    let method;

    beforeEach(() => {
      method = 'method';

			mockDaffPayment.method = method;
			mockDaffPayment.payment_info = {
				field: 1,
				field2: {
					someField: 'test'
				}
			}

      transformedPaymentMethod = service.transform(mockDaffPayment);
    });

    it('should return the payment_info object', () => {
      expect(transformedPaymentMethod).toEqual(mockDaffPayment.payment_info);
    });
  });
});
