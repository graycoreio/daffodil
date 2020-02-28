/* tslint:disable */
import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';

import {
  DaffCartShippingRate
} from '@daffodil/cart';
import {
  DaffCartShippingRateFactory,
  MagentoCartShippingMethodFactory
} from '@daffodil/cart/testing';

import { DaffMagentoCartShippingMethodsService } from './cart-shipping-methods.service';
import { DaffMagentoCartShippingRateTransformer } from './transforms/outputs/cart-shipping-rate.service';
import { listShippingMethods } from './queries';
import { ListShippingMethodsResponse } from './models/responses';
import { MagentoCartShippingMethod } from './models/outputs/cart-shipping-method';

describe('Driver | Magento | Cart | CartShippingMethodsService', () => {
  let service: DaffMagentoCartShippingMethodsService;
  let controller: ApolloTestingController;

  let magentoCartShippingTransformerSpy;

  let daffCartShippingRateFactory: DaffCartShippingRateFactory;
  let magentoShippingMethodFactory: MagentoCartShippingMethodFactory;

  let cartId;
  let mockDaffCartShippingRate: DaffCartShippingRate;
  let mockMagentoShippingMethod: MagentoCartShippingMethod;
  let mockListCartShippingMethodsResponse: ListShippingMethodsResponse;

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
        }
      ]
    });

    service = TestBed.get(DaffMagentoCartShippingMethodsService);
    controller = TestBed.get(ApolloTestingController);

    magentoCartShippingTransformerSpy = TestBed.get(DaffMagentoCartShippingRateTransformer);

    daffCartShippingRateFactory = TestBed.get(DaffCartShippingRateFactory);
    magentoShippingMethodFactory = TestBed.get(MagentoCartShippingMethodFactory);

    mockDaffCartShippingRate = daffCartShippingRateFactory.create();
    mockMagentoShippingMethod = magentoShippingMethodFactory.create();

    cartId = '15';
    mockListCartShippingMethodsResponse = {
      cart: {
        shipping_addresses: [{
          available_shipping_methods: [mockMagentoShippingMethod]
        }]
      }
    };

    magentoCartShippingTransformerSpy.transform.withArgs(mockMagentoShippingMethod).and.returnValue(mockDaffCartShippingRate);
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

      const op = controller.expectOne(listShippingMethods);

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

      const op = controller.expectOne(listShippingMethods);

      op.flush({
        data: mockListCartShippingMethodsResponse
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
