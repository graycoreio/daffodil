import { TestBed } from '@angular/core/testing';

import { DaffMagentoCartTransformerService } from './cart-transformer.service';
import { DaffCartItemTransformer } from '../../injection-tokens/cart-item-transformer.token';
import { DaffCartAddressTransformer } from '../../injection-tokens/cart-address-transformer.token';
import { cartFactory } from '../testing/factories/cart';
import { Cart } from '../models/cart';

describe('DaffMagentoCartTransformerService', () => {
  let service: DaffMagentoCartTransformerService;
  let mockResponse: Cart;

  const magentoCartItemTransformerServiceSpy = jasmine.createSpyObj('DaffMagentoCartItemTransformerService', ['transform'])
  const magentoCartAddressTransformerServiceSpy = jasmine.createSpyObj('DaffMagentoCartAddressTransformerService', ['transform'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCartTransformerService,
        {
          provide: DaffCartItemTransformer,
          useValue: magentoCartItemTransformerServiceSpy
        },
        {
          provide: DaffCartAddressTransformer,
          useValue: magentoCartAddressTransformerServiceSpy
        }
      ]
    })

    service = TestBed.get(DaffMagentoCartTransformerService);
    mockResponse = cartFactory();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {
    it('should return an object with the correct values', () => {
      const method = 'testPaymentMethod';
      const id = 34;
      const subtotal = 109.78
      mockResponse.method = method;
      mockResponse.id = id;
      mockResponse.subtotal = subtotal;

      const transformedCart = service.transform(mockResponse);

      expect(transformedCart.id).toEqual(id);
      expect(transformedCart.checkout_method).toEqual(method);
      expect(transformedCart.subtotal).toEqual(subtotal);
    });
  })
});
