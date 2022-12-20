import { TestBed } from '@angular/core/testing';
import { InMemoryCache } from '@apollo/client/core';
import { addTypenameToDocument } from '@apollo/client/utilities';
import {
  ApolloTestingController,
  ApolloTestingModule,
  APOLLO_TESTING_CACHE,
} from 'apollo-angular/testing';

import {
  DaffCart,
  DaffCartShippingInformation,
} from '@daffodil/cart';
import {
  MagentoCartShippingMethod,
  MagentoCart,
  MagentoShippingAddress,
  MagentoSetSelectedShippingMethodResponse,
  MagentoGetSelectedShippingMethodResponse,
  MagentoListShippingMethodsResponse,
  DaffMagentoCartTransformer,
  DaffMagentoCartShippingRateTransformer,
  DaffMagentoShippingMethodInputTransformer,
  getSelectedShippingMethod,
  setSelectedShippingMethod,
  listShippingMethods,
} from '@daffodil/cart/driver/magento';
import {
  MagentoCartFactory,
  MagentoCartShippingMethodFactory,
  MagentoShippingAddressFactory,
} from '@daffodil/cart/driver/magento/testing';
import {
  DaffCartFactory,
  DaffCartShippingRateFactory,
} from '@daffodil/cart/testing';
import { schema } from '@daffodil/driver/magento';

import { DaffMagentoCartShippingInformationService } from './cart-shipping-information.service';

interface MagentoCartSelectedShippingMethod extends MagentoCartShippingMethod {
  __typename: string;
}

describe('@daffodil/cart/driver/magento | CartShippingInformationService', () => {
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
        ApolloTestingModule,
      ],
      providers: [
        DaffMagentoCartShippingInformationService,
        {
          provide: DaffMagentoCartTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartTransformer', ['transform']),
        },
        {
          provide: DaffMagentoCartShippingRateTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartShippingRateTransformer', ['transform']),
        },
        {
          provide: DaffMagentoShippingMethodInputTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoShippingMethodInputTransformer', ['transform']),
        },
        {
          provide: APOLLO_TESTING_CACHE,
          useValue: new InMemoryCache({
            addTypename: true,
            possibleTypes: schema.possibleTypes,
          }),
        },
      ],
    });

    service = TestBed.inject(DaffMagentoCartShippingInformationService);
    controller = TestBed.inject(ApolloTestingController);

    magentoCartTransformerSpy = TestBed.inject(DaffMagentoCartTransformer);
    magentoShippingRateTransformerSpy = TestBed.inject(DaffMagentoCartShippingRateTransformer);
    magentoShippingMethodInputTransformerSpy = TestBed.inject(DaffMagentoShippingMethodInputTransformer);

    daffCartFactory = TestBed.inject(DaffCartFactory);
    magentoCartFactory = TestBed.inject(MagentoCartFactory);
    magentoShippingMethodFactory = TestBed.inject(MagentoCartShippingMethodFactory);
    daffCartShippingRateFactory = TestBed.inject(DaffCartShippingRateFactory);
    magentoShippingAddressFactory = TestBed.inject(MagentoShippingAddressFactory);

    mockDaffCart = daffCartFactory.create();
    mockMagentoCart = magentoCartFactory.create();
    mockMagentoShippingMethod = {
      __typename: 'SelectedShippingMethod',
      ...magentoShippingMethodFactory.create(),
    };
    mockDaffCartShippingInformation = {
      ...daffCartShippingRateFactory.create(),
      address_id: null,
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
          selected_shipping_method: mockMagentoShippingMethod,
        }],
      },
    };
    mockSetSelectedShippingMethodResponse = {
      setShippingMethodsOnCart: {
        __typename: 'CartShippingMethods',
        cart: mockMagentoCart,
      },
    };
    mockListCartShippingMethodsResponse = {
      cart: {
        __typename: 'Cart',
        id: cartId,
        shipping_addresses: [{
          __typename: 'AvailableShippingAddresses',
          available_shipping_methods: [mockMagentoShippingMethod],
        }],
      },
    };

    magentoCartTransformerSpy.transform.and.returnValue(mockDaffCart);
    magentoShippingRateTransformerSpy.transform.and.returnValue(mockDaffCartShippingInformation);
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

      const op = controller.expectOne(addTypenameToDocument(getSelectedShippingMethod([])));

      op.flush({
        data: mockGetSelectedShippingMethodResponse,
      });
    });

    it('should return the correct value', done => {
      service.get(cartId).subscribe(result => {
        expect(result).toEqual(jasmine.objectContaining(mockDaffCartShippingInformation));
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(getSelectedShippingMethod([])));

      op.flush({
        data: mockGetSelectedShippingMethodResponse,
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

        const op = controller.expectOne(addTypenameToDocument(getSelectedShippingMethod([])));

        op.flush({
          data: mockGetSelectedShippingMethodResponse,
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

      const setSelectedShippingMethodOp = controller.expectOne(addTypenameToDocument(setSelectedShippingMethod([])));

      setSelectedShippingMethodOp.flush({
        data: mockSetSelectedShippingMethodResponse,
      });

      // set timeout because the requests here are made in series
      setTimeout(() => {
        const listShippingMethodsOp = controller.expectOne(addTypenameToDocument(listShippingMethods([])));

        listShippingMethodsOp.flush({
          data: mockListCartShippingMethodsResponse,
        });
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

      const op = controller.expectOne(addTypenameToDocument(setSelectedShippingMethod([])));

      op.flush({
        data: mockSetSelectedShippingMethodResponse,
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
