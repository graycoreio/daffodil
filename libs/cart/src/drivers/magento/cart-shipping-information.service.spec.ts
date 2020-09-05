import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule, APOLLO_TESTING_CACHE } from 'apollo-angular/testing';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { addTypenameToDocument } from 'apollo-utilities';

import { schema } from '@daffodil/driver/magento';
import {
  DaffCart,
  DaffCartShippingInformation,
  daffMagentoNoopCartFragment
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
import { getSelectedShippingMethod, setSelectedShippingMethod, listShippingMethods } from './queries/public_api';
import { DaffMagentoCartShippingRateTransformer } from './transforms/outputs/cart-shipping-rate.service';
import { DaffMagentoShippingMethodInputTransformer } from './transforms/inputs/shipping-method.service';
import { MagentoShippingAddress } from './models/outputs/shipping-address';
import { DaffMagentoExtraCartFragments } from './injection-tokens/public_api';
import { MagentoListShippingMethodsResponse } from './models/responses/public_api';

interface MagentoCartSelectedShippingMethod extends MagentoCartShippingMethod {
	__typename: string;
}

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
  let mockMagentoShippingMethod: MagentoCartSelectedShippingMethod;
  let mockDaffCartShippingInformation: DaffCartShippingInformation;
  let mockSetSelectedShippingMethodResponse: MagentoSetSelectedShippingMethodResponse;
  let mockGetSelectedShippingMethodResponse: MagentoGetSelectedShippingMethodResponse;
  let mockListCartShippingMethodsResponse: MagentoListShippingMethodsResponse;

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
        {
          provide: DaffMagentoExtraCartFragments,
          useValue: daffMagentoNoopCartFragment,
          multi: true
        },
				{
					provide: APOLLO_TESTING_CACHE,
					useValue: new InMemoryCache({
						addTypename: true,
						fragmentMatcher: new IntrospectionFragmentMatcher({
							introspectionQueryResultData: schema,
						}),
					}),
				}
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
		mockMagentoShippingMethod = {
			__typename: 'SelectedShippingMethod',
			...magentoShippingMethodFactory.create()
		}
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
				__typename: 'Cart',
        shipping_addresses: [{
					__typename: 'CartShippingAddresses',
          selected_shipping_method: mockMagentoShippingMethod
        }]
      }
    };
    mockSetSelectedShippingMethodResponse = {
      setShippingMethodsOnCart: {
				__typename: 'CartShippingMethods',
        cart: mockMagentoCart
      }
    };
    mockListCartShippingMethodsResponse = {
      cart: {
        __typename: 'Cart',
        id: cartId,
        shipping_addresses: [{
					__typename: 'AvailableShippingAddresses',
          available_shipping_methods: [mockMagentoShippingMethod]
        }]
      }
    };

    magentoCartTransformerSpy.transform.and.returnValue(mockDaffCart);
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

      const op = controller.expectOne(addTypenameToDocument(getSelectedShippingMethod([daffMagentoNoopCartFragment])));

      op.flush({
        data: mockGetSelectedShippingMethodResponse
      });
    });

    it('should return the correct value', done => {
      service.get(cartId).subscribe(result => {
        expect(result).toEqual(jasmine.objectContaining(mockDaffCartShippingInformation));
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(getSelectedShippingMethod([daffMagentoNoopCartFragment])));

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

        const op = controller.expectOne(addTypenameToDocument(getSelectedShippingMethod([daffMagentoNoopCartFragment])));

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

    it('should return the correct value and manually refetch the shipping methods', done => {
      service.update(cartId, mockDaffCartShippingInformation).subscribe(result => {
        expect(result.shipping_information.carrier).toEqual(carrier);
        done();
      });

      const setSelectedShippingMethodOp = controller.expectOne(addTypenameToDocument(setSelectedShippingMethod([daffMagentoNoopCartFragment])));

      setSelectedShippingMethodOp.flush({
        data: mockSetSelectedShippingMethodResponse
      });

      // set timeout because the requests here are made in series
      setTimeout(() => {
        const listShippingMethodsOp = controller.expectOne(addTypenameToDocument(listShippingMethods([daffMagentoNoopCartFragment])));

        listShippingMethodsOp.flush({
          data: mockListCartShippingMethodsResponse
        });
      })
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

      const op = controller.expectOne(addTypenameToDocument(setSelectedShippingMethod([daffMagentoNoopCartFragment])));

      op.flush({
        data: mockSetSelectedShippingMethodResponse
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
