import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule, APOLLO_TESTING_CACHE } from 'apollo-angular/testing';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { addTypenameToDocument } from 'apollo-utilities';

import { schema } from '@daffodil/driver/magento';
import {
  DaffCartShippingRate
} from '@daffodil/cart';
import {
  DaffCartShippingRateFactory,
  MagentoCartShippingMethodFactory
} from '@daffodil/cart/testing';

import { DaffMagentoCartShippingMethodsService } from './cart-shipping-methods.service';
import { DaffMagentoCartShippingRateTransformer } from './transforms/outputs/cart-shipping-rate.service';
import { listShippingMethods } from './queries/public_api';
import { MagentoListShippingMethodsResponse } from './models/responses/public_api';
import { MagentoCartShippingMethod } from './models/outputs/cart-shipping-method';

interface MagentoCartAvailableShippingMethod extends MagentoCartShippingMethod {
	__typename: string;
}

describe('Driver | Magento | Cart | CartShippingMethodsService', () => {
  let service: DaffMagentoCartShippingMethodsService;
  let controller: ApolloTestingController;

  let magentoCartShippingTransformerSpy;

  let daffCartShippingRateFactory: DaffCartShippingRateFactory;
  let magentoShippingMethodFactory: MagentoCartShippingMethodFactory;

  let cartId;
  let mockDaffCartShippingRate: DaffCartShippingRate;
  let mockMagentoShippingMethod: MagentoCartAvailableShippingMethod;
  let mockListCartShippingMethodsResponse: MagentoListShippingMethodsResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        DaffMagentoCartShippingMethodsService,
        {
          provide: DaffMagentoCartShippingRateTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartShippingRateTransformer', ['transform'])
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

    service = TestBed.get(DaffMagentoCartShippingMethodsService);
    controller = TestBed.get(ApolloTestingController);

    magentoCartShippingTransformerSpy = TestBed.get(DaffMagentoCartShippingRateTransformer);

    daffCartShippingRateFactory = TestBed.get(DaffCartShippingRateFactory);
    magentoShippingMethodFactory = TestBed.get(MagentoCartShippingMethodFactory);

    mockDaffCartShippingRate = daffCartShippingRateFactory.create();
    mockMagentoShippingMethod = {
			__typename: 'AvailableShippingMethod',
			...magentoShippingMethodFactory.create()
		}

    cartId = '15';
    mockListCartShippingMethodsResponse = {
      cart: {
				__typename: 'Cart',
        shipping_addresses: [{
					__typename: 'AvailableShippingAddresses',
          available_shipping_methods: [mockMagentoShippingMethod]
        }]
      }
    };

    magentoCartShippingTransformerSpy.transform.and.returnValue(mockDaffCartShippingRate);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list | listing shipping methods', () => {
    let carrier;
    let price;

    beforeEach(() => {
      carrier = 'carrier';
      price = 54.30;

      mockDaffCartShippingRate.carrier = carrier;
      mockDaffCartShippingRate.price = price;
    });

    it('should call the transformer with the correct argument', done => {
      service.list(cartId).subscribe(() => {
        expect(magentoCartShippingTransformerSpy.transform).toHaveBeenCalledWith(mockMagentoShippingMethod);
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(listShippingMethods));

      op.flush({
        data: mockListCartShippingMethodsResponse
      });
    });

    it('should return the correct value', done => {
      service.list(cartId).subscribe(result => {
        expect(result[0].carrier).toEqual(carrier);
        expect(result[0].price).toEqual(price);
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(listShippingMethods));

      op.flush({
        data: mockListCartShippingMethodsResponse
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
