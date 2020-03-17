import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';

import {
  DaffCart,
  DaffCartShippingInformation
} from '@daffodil/cart';
import {
  MagentoCartFactory,
  DaffCartFactory,
  MagentoCartShippingMethodFactory,
  DaffCartShippingRateFactory,
  MagentoShippingAddressFactory
} from '@daffodil/cart/testing';

import { DaffMagentoCartShippingInformationService } from './cart-shipping-information.service';
import { MagentoCart } from './models/outputs/cart';
import { MagentoCartShippingMethod } from './models/outputs/cart-shipping-method';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { MagentoGetSelectedShippingMethodResponse } from './models/responses/get-selected-shipping-method';
import { MagentoSetSelectedShippingMethodResponse } from './models/responses/set-selected-shipping-method';
import { getSelectedShippingMethod, setSelectedShippingMethod } from './queries/public_api';
import { DaffMagentoCartShippingRateTransformer } from './transforms/outputs/cart-shipping-rate.service';
import { DaffMagentoShippingMethodInputTransformer } from './transforms/inputs/shipping-method.service';
import { MagentoShippingAddress } from './models/outputs/shipping-address';

describe('Driver | Magento | Cart | CartShippingInformationService', () => {
  let service: DaffMagentoCartShippingInformationService;
  let controller: ApolloTestingController;

  let daffCartFactory: DaffCartFactory;
  let magentoCartFactory: MagentoCartFactory;
  let magentoShippingMethodFactory: MagentoCartShippingMethodFactory;
  let daffCartShippingRateFactory: DaffCartShippingRateFactory;
  let magentoShippingAddressFactory: MagentoShippingAddressFactory;

  let magentoCartTransformerSpy;
  let magentoShippingRateTransformerSpy;
  let magentoShippingMethodInputTransformerSpy;

  let cartId;
  let mockDaffCart: DaffCart;
  let mockMagentoCart: MagentoCart;
  let mockMagentoShippingAddress: MagentoShippingAddress;
  let mockMagentoShippingMethod: MagentoCartShippingMethod;
  let mockDaffCartShippingInformation: DaffCartShippingInformation;
  let mockSetSelectedShippingMethodResponse: MagentoSetSelectedShippingMethodResponse;
  let mockGetSelectedShippingMethodResponse: MagentoGetSelectedShippingMethodResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        DaffMagentoCartShippingInformationService,
        {
          provide: DaffMagentoCartTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartTransformer', ['transform'])
        },
        {
          provide: DaffMagentoCartShippingRateTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartShippingRateTransformer', ['transform'])
        },
        {
          provide: DaffMagentoShippingMethodInputTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoShippingMethodInputTransformer', ['transform'])
        },
      ]
    });

    service = TestBed.get(DaffMagentoCartShippingInformationService);
    controller = TestBed.get(ApolloTestingController);

    magentoCartTransformerSpy = TestBed.get(DaffMagentoCartTransformer);
    magentoShippingRateTransformerSpy = TestBed.get(DaffMagentoCartShippingRateTransformer);
    magentoShippingMethodInputTransformerSpy = TestBed.get(DaffMagentoShippingMethodInputTransformer);

    daffCartFactory = TestBed.get(DaffCartFactory);
    magentoCartFactory = TestBed.get(MagentoCartFactory);
    magentoShippingMethodFactory = TestBed.get(MagentoCartShippingMethodFactory);
    daffCartShippingRateFactory = TestBed.get(DaffCartShippingRateFactory);
    magentoShippingAddressFactory = TestBed.get(MagentoShippingAddressFactory);

    mockDaffCart = daffCartFactory.create();
    mockMagentoCart = magentoCartFactory.create();
    mockMagentoShippingMethod = magentoShippingMethodFactory.create();
    mockDaffCartShippingInformation = {
      ...daffCartShippingRateFactory.create(),
      address_id: 0
    };
    mockMagentoShippingAddress = magentoShippingAddressFactory.create();

    cartId = mockDaffCart.id;
    mockMagentoShippingAddress.selected_shipping_method = mockMagentoShippingMethod;
    mockDaffCart.shipping_information = mockDaffCartShippingInformation;
    mockMagentoCart.shipping_addresses = [mockMagentoShippingAddress];
    mockGetSelectedShippingMethodResponse = {
      cart: {
        shipping_addresses: [{
          selected_shipping_method: mockMagentoShippingMethod
        }]
      }
    };
    mockSetSelectedShippingMethodResponse = {
      setShippingMethodsOnCart: {
        cart: mockMagentoCart
      }
    };

    magentoCartTransformerSpy.transform.withArgs(mockMagentoCart).and.returnValue(mockDaffCart);
    magentoShippingRateTransformerSpy.transform.and.returnValue(mockDaffCartShippingInformation)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting the selected shipping method', () => {
    it('should call the transformer with the correct argument', done => {
      service.get(cartId).subscribe(() => {
        expect(magentoShippingRateTransformerSpy.transform).toHaveBeenCalledWith(jasmine.objectContaining(mockMagentoShippingMethod));
        done();
      });

      const op = controller.expectOne(getSelectedShippingMethod);

      op.flush({
        data: mockGetSelectedShippingMethodResponse
      });
    });

    it('should return the correct value', done => {
      service.get(cartId).subscribe(result => {
        expect(result).toEqual(jasmine.objectContaining(mockDaffCartShippingInformation));
        done();
      });

      const op = controller.expectOne(getSelectedShippingMethod);

      op.flush({
        data: mockGetSelectedShippingMethodResponse
      });
    });

    describe('when the response is an empty array', () => {
      beforeEach(() => {
        mockGetSelectedShippingMethodResponse.cart.shipping_addresses = [];
      });

      it('should return null and not throw', done => {
        service.get(cartId).subscribe(result => {
          expect(result).toBeNull();
          done();
        });

        const op = controller.expectOne(getSelectedShippingMethod);

        op.flush({
          data: mockGetSelectedShippingMethodResponse
        });
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('update | updates the cart\'s selected shipping method', () => {
    let carrier;

    beforeEach(() => {
      carrier = 'carrier';

      mockMagentoShippingMethod.carrier_code = carrier;
      mockDaffCartShippingInformation.carrier = carrier;
    });

    it('should return the correct value', done => {
      service.update(cartId, mockDaffCartShippingInformation).subscribe(result => {
        expect(result.shipping_information.carrier).toEqual(carrier);
        done();
      });

      const op = controller.expectOne(setSelectedShippingMethod);

      op.flush({
        data: mockSetSelectedShippingMethodResponse
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('delete | removes the cart\'s selected shipping method', () => {
    beforeEach(() => {
      mockMagentoCart.shipping_addresses[0].selected_shipping_method = null;
      mockDaffCart.shipping_information = null;
    });

    it('should return the cart without shipping information', done => {
      service.delete(cartId).subscribe(result => {
        expect(result.shipping_information).toBeFalsy();
        done();
      });

      const op = controller.expectOne(setSelectedShippingMethod);

      op.flush({
        data: mockSetSelectedShippingMethodResponse
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
