import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';

import {
  DaffCart,
  DaffCartPaymentMethod
} from '@daffodil/cart';
import {
  MagentoCartFactory,
  DaffCartFactory,
  DaffCartPaymentFactory,
  MagentoCartPaymentMethodFactory
} from '@daffodil/cart/testing';

import { DaffMagentoCartPaymentService } from './cart-payment.service';
import { MagentoCart } from './models/outputs/cart';
import { MagentoCartPaymentMethod } from './models/outputs/cart-payment-method';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { MagentoGetSelectedPaymentMethodResponse } from './models/responses/get-selected-payment-method';
import { MagentoSetSelectedPaymentMethodResponse } from './models/responses/set-selected-payment-method';
import { getSelectedPaymentMethod, setSelectedPaymentMethod } from './queries/public_api';
import { DaffMagentoCartPaymentTransformer } from './transforms/outputs/cart-payment.service';
import { DaffMagentoPaymentMethodInputTransformer } from './transforms/inputs/payment-method.service';

describe('Driver | Magento | Cart | CartPaymentMethodService', () => {
  let service: DaffMagentoCartPaymentService;
  let controller: ApolloTestingController;

  let daffCartFactory: DaffCartFactory;
  let magentoCartFactory: MagentoCartFactory;
  let magentoPaymentMethodFactory: MagentoCartPaymentMethodFactory;
  let daffCartPaymentFactory: DaffCartPaymentFactory;

  let magentoCartTransformerSpy;
  let magentoShippingRateTransformerSpy;
  let magentoPaymentMethodInputTransformerSpy;

  let cartId;
  let mockDaffCart: DaffCart;
  let mockMagentoCart: MagentoCart;
  let mockMagentoCartPaymentMethod: MagentoCartPaymentMethod;
  let mockDaffCartPaymentMethod: DaffCartPaymentMethod;
  let mockSetSelectedPaymentMethodResponse: MagentoSetSelectedPaymentMethodResponse;
  let mockGetSelectedPaymentMethodResponse: MagentoGetSelectedPaymentMethodResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        DaffMagentoCartPaymentService,
        {
          provide: DaffMagentoCartTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartTransformer', ['transform'])
        },
        {
          provide: DaffMagentoCartPaymentTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartPaymentTransformer', ['transform'])
        },
        {
          provide: DaffMagentoPaymentMethodInputTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoPaymentMethodInputTransformer', ['transform'])
        },
      ]
    });

    service = TestBed.get(DaffMagentoCartPaymentService);
    controller = TestBed.get(ApolloTestingController);

    magentoCartTransformerSpy = TestBed.get(DaffMagentoCartTransformer);
    magentoShippingRateTransformerSpy = TestBed.get(DaffMagentoCartPaymentTransformer);
    magentoPaymentMethodInputTransformerSpy = TestBed.get(DaffMagentoPaymentMethodInputTransformer);

    daffCartFactory = TestBed.get(DaffCartFactory);
    magentoCartFactory = TestBed.get(MagentoCartFactory);
    magentoPaymentMethodFactory = TestBed.get(MagentoCartPaymentMethodFactory);
    daffCartPaymentFactory = TestBed.get(DaffCartPaymentFactory);

    mockDaffCart = daffCartFactory.create();
    mockMagentoCart = magentoCartFactory.create();
    mockMagentoCartPaymentMethod = magentoPaymentMethodFactory.create();
    mockDaffCartPaymentMethod = daffCartPaymentFactory.create();

    cartId = mockDaffCart.id;
    mockDaffCart.payment = mockDaffCartPaymentMethod;
    mockMagentoCart.selected_payment_method = mockMagentoCartPaymentMethod;
    mockGetSelectedPaymentMethodResponse = {
      cart: {
        selected_payment_method: mockMagentoCartPaymentMethod
      }
    };
    mockSetSelectedPaymentMethodResponse = {
      setPaymentMethodOnCart: {
        cart: mockMagentoCart
      }
    };

    magentoCartTransformerSpy.transform.withArgs(mockMagentoCart).and.returnValue(mockDaffCart);
    magentoShippingRateTransformerSpy.transform.and.returnValue(mockDaffCartPaymentMethod)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting the selected payment method', () => {
    it('should call the transformer with the correct argument', done => {
      service.get(cartId).subscribe(() => {
        expect(magentoShippingRateTransformerSpy.transform).toHaveBeenCalledWith(jasmine.objectContaining(mockMagentoCartPaymentMethod));
        done();
      });

      const op = controller.expectOne(getSelectedPaymentMethod);

      op.flush({
        data: mockGetSelectedPaymentMethodResponse
      });
    });

    it('should return the correct value', done => {
      service.get(cartId).subscribe(result => {
        expect(result).toEqual(jasmine.objectContaining(mockDaffCartPaymentMethod));
        done();
      });

      const op = controller.expectOne(getSelectedPaymentMethod);

      op.flush({
        data: mockGetSelectedPaymentMethodResponse
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('update | updates the cart\'s selected payment method', () => {
    let method;

    beforeEach(() => {
      method = 'method';

      mockMagentoCartPaymentMethod.code = method;
      mockDaffCartPaymentMethod.method = method;
    });

    it('should return the correct value', done => {
      service.update(cartId, mockDaffCartPaymentMethod).subscribe(result => {
        expect(result.payment.method).toEqual(method);
        done();
      });

      const op = controller.expectOne(setSelectedPaymentMethod);

      op.flush({
        data: mockSetSelectedPaymentMethodResponse
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('remove | removes the cart\'s selected payment method', () => {
    beforeEach(() => {
      mockMagentoCart.selected_payment_method = null;
      mockDaffCart.payment = null;
    });

    it('should return void', done => {
      service.remove(cartId).subscribe(result => {
        expect(result).toBeUndefined();
        done();
      });

      const op = controller.expectOne(setSelectedPaymentMethod);

      op.flush({
        data: mockSetSelectedPaymentMethodResponse
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
