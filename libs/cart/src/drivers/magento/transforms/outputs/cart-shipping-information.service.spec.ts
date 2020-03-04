import { TestBed } from '@angular/core/testing';

import {
  MagentoCartShippingMethodFactory,
  DaffCartShippingRateFactory
} from '@daffodil/cart/testing';

import { DaffMagentoCartShippingRateTransformer } from './cart-shipping-rate.service';
import { DaffMagentoCartShippingInformationTransformer } from './cart-shipping-information.service';

describe('Driver | Magento | Cart | Transformer | MagentoShippingInformation', () => {
  let service: DaffMagentoCartShippingInformationTransformer;

  let daffCartShippingInformationFactory: DaffCartShippingRateFactory;
  let magentoCartShippingMethodFactory: MagentoCartShippingMethodFactory;

  let mockDaffShippingInformation;
  let mockMagentoShippingMethod;

  let cartShippingRateTransformerSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCartShippingInformationTransformer,
        {
          provide: DaffMagentoCartShippingRateTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartShippingRateTransformer', ['transform'])
        }
      ]
    });

    service = TestBed.get(DaffMagentoCartShippingInformationTransformer);

    daffCartShippingInformationFactory = TestBed.get(DaffCartShippingRateFactory);
    magentoCartShippingMethodFactory = TestBed.get(MagentoCartShippingMethodFactory);

    cartShippingRateTransformerSpy = TestBed.get(DaffMagentoCartShippingRateTransformer);

    mockDaffShippingInformation = {
      ...daffCartShippingInformationFactory.create(),
      address_id: 0
    };
    mockMagentoShippingMethod = magentoCartShippingMethodFactory.create();

    cartShippingRateTransformerSpy.transform.withArgs(mockMagentoShippingMethod).and.returnValue(mockDaffShippingInformation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming cart shipping information', () => {
    let transformedShippingInformation;

    beforeEach(() => {
      transformedShippingInformation = service.transform(mockMagentoShippingMethod);
    });

    // skipping because transformer does not implement this yet
    xit('should return an object with the correct values', () => {
      expect(transformedShippingInformation.address_id).toEqual(mockDaffShippingInformation.address_id);
    });

    it('should call the cart shipping rate transformer with the address', () => {
      expect(cartShippingRateTransformerSpy.transform).toHaveBeenCalledWith(mockMagentoShippingMethod);
    });
  })
});
