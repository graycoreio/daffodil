import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
  DaffCartTotalTypeEnum,
} from '@daffodil/cart';
import {
  MagentoCartAddress,
  MagentoShippingAddress,
  MagentoCartShippingMethod,
  MagentoCartItem,
  MagentoCartPaymentMethod,
  DaffMagentoCartPaymentTransformer,
  DaffMagentoCartAddressTransformer,
  DaffMagentoCartShippingRateTransformer,
  DaffMagentoShippingAddressTransformer,
  DaffCartMagentoCartItemTransform,
  provideDaffCartMagentoCartItemTransforms,
} from '@daffodil/cart/driver/magento';
import {
  MagentoCartFactory,
  MagentoShippingAddressFactory,
  MagentoCartItemFactory,
  MagentoCartAddressFactory,
  MagentoCartShippingMethodFactory,
} from '@daffodil/cart/driver/magento/testing';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { daffAdd } from '@daffodil/core';

import { DaffMagentoCartTransformer } from './cart.service';
import { MagentoCart } from '../../models/public_api';

describe('@daffodil/cart/driver/magento | MagentoCart', () => {
  let service: DaffMagentoCartTransformer;

  let daffCartFactory: DaffCartFactory;
  let magentoCartFactory: MagentoCartFactory;
  let magentoShippingAddressFactory: MagentoShippingAddressFactory;
  let magentoCartAddressFactory: MagentoCartAddressFactory;
  let magentoCartItemFactory: MagentoCartItemFactory;
  let magentoShippingMethodFactory: MagentoCartShippingMethodFactory;

  let mockDaffCart: DaffCart;
  let mockMagentoCart: MagentoCart;
  let mockBillingAddress: MagentoCartAddress;
  let mockShippingAddress: MagentoShippingAddress;
  let mockShippingMethod: MagentoCartShippingMethod;
  let mockCartItem: MagentoCartItem;
  let mockPaymentMethod: MagentoCartPaymentMethod;
  let transform: DaffCartMagentoCartItemTransform;
  let transformName: string;

  let cartAddressTransformerSpy: jasmine.SpyObj<DaffMagentoCartAddressTransformer>;
  let shippingAddressTransformerSpy: jasmine.SpyObj<DaffMagentoShippingAddressTransformer>;
  let cartPaymentTransformerSpy: jasmine.SpyObj<DaffMagentoCartPaymentTransformer>;
  let cartShippingRateTransformerSpy: jasmine.SpyObj<DaffMagentoCartShippingRateTransformer>;

  beforeEach(() => {
    transformName = 'transform name';
    transform = (daffItem, magentoItem) => ({
      ...daffItem,
      name: transformName,
    });
    cartAddressTransformerSpy = jasmine.createSpyObj('DaffMagentoCartPaymentTransformer', ['transform']);
    shippingAddressTransformerSpy = jasmine.createSpyObj('DaffMagentoCartAddressTransformer', ['transform']);
    cartPaymentTransformerSpy = jasmine.createSpyObj('DaffMagentoCartShippingRateTransformer', ['transform']);
    cartShippingRateTransformerSpy = jasmine.createSpyObj('DaffMagentoShippingAddressTransformer', ['transform']);

    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCartTransformer,
        {
          provide: DaffMagentoCartPaymentTransformer,
          useValue: cartPaymentTransformerSpy,
        },
        {
          provide: DaffMagentoCartAddressTransformer,
          useValue: cartAddressTransformerSpy,
        },
        {
          provide: DaffMagentoCartShippingRateTransformer,
          useValue: cartShippingRateTransformerSpy,
        },
        {
          provide: DaffMagentoShippingAddressTransformer,
          useValue: shippingAddressTransformerSpy,
        },
        ...provideDaffCartMagentoCartItemTransforms(transform),
      ],
    });

    service = TestBed.inject(DaffMagentoCartTransformer);

    daffCartFactory = TestBed.inject(DaffCartFactory);
    magentoCartFactory = TestBed.inject(MagentoCartFactory);
    magentoShippingAddressFactory = TestBed.inject(MagentoShippingAddressFactory);
    magentoCartAddressFactory = TestBed.inject(MagentoCartAddressFactory);
    magentoCartItemFactory = TestBed.inject(MagentoCartItemFactory);
    magentoShippingMethodFactory = TestBed.inject(MagentoCartShippingMethodFactory);

    mockDaffCart = daffCartFactory.create();
    mockMagentoCart = magentoCartFactory.create({
      shipping_addresses: [
        magentoShippingAddressFactory.create({
          selected_shipping_method: magentoShippingMethodFactory.create({
            amount: {
              value: 100,
              currency: 'USD',
            },
          }),
        }),
      ],
    });
    mockShippingAddress = {
      ...magentoShippingAddressFactory.create(),
      email: mockMagentoCart.email,
    };
    mockBillingAddress = {
      ...magentoShippingAddressFactory.create(),
      email: mockMagentoCart.email,
    };
    mockCartItem = magentoCartItemFactory.create();
    mockShippingMethod = magentoShippingMethodFactory.create();
    mockMagentoCart.shipping_addresses = [mockShippingAddress];
    mockMagentoCart.billing_address = mockBillingAddress;
    mockMagentoCart.items = [mockCartItem];
    mockPaymentMethod = mockMagentoCart.selected_payment_method;
    mockShippingAddress.selected_shipping_method = mockShippingMethod;
    mockShippingAddress.available_shipping_methods = [mockShippingMethod];

    cartAddressTransformerSpy.transform.withArgs(mockBillingAddress).and.returnValue(mockDaffCart.billing_address);
    shippingAddressTransformerSpy.transform.and.returnValue(mockDaffCart.shipping_address);
    cartShippingRateTransformerSpy.transform.withArgs(mockShippingMethod).and.returnValue(mockDaffCart.shipping_information);
    cartPaymentTransformerSpy.transform.withArgs(mockPaymentMethod).and.returnValue(mockDaffCart.payment);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a cart', () => {
    let transformedCart: DaffCart;

    it('should invoke the extra cart item transforms', () => {
      transformedCart = service.transform(mockMagentoCart);
      transformedCart.items.forEach(item => {
        expect(item.name).toEqual(transformName);
      });
    });

    describe('when the cart has all its fields defined', () => {
      let id;
      let subtotal;
      let grand_total;

      beforeEach(() => {
        id = 5;
        subtotal = 20;
        grand_total = 20.20;

        mockMagentoCart.id = id;
        mockMagentoCart.prices.subtotal_excluding_tax.value = subtotal;
        mockMagentoCart.prices.grand_total.value = grand_total;

        transformedCart = service.transform(mockMagentoCart);
      });

      it('should return an object with the correct values', () => {
        expect(transformedCart.id).toEqual(id);
      });

      it('should return the expected cart totals', () => {
        const totalTax = mockMagentoCart.prices.applied_taxes.reduce((acc, tax) => (daffAdd(acc, tax.amount.value)), 0);
        expect(transformedCart.totals[DaffCartTotalTypeEnum.grandTotal].value).toEqual(mockMagentoCart.prices.grand_total.value);
        expect(transformedCart.totals[DaffCartTotalTypeEnum.subtotalExcludingTax].value).toEqual(mockMagentoCart.prices.subtotal_excluding_tax.value);
        expect(transformedCart.totals[DaffCartTotalTypeEnum.subtotalIncludingTax].value).toEqual(mockMagentoCart.prices.subtotal_including_tax.value);
        expect(transformedCart.totals[DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax].value).toEqual(mockMagentoCart.prices.subtotal_with_discount_excluding_tax.value);
        expect(transformedCart.totals[DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax].value).toEqual(daffAdd(mockMagentoCart.prices.subtotal_with_discount_excluding_tax.value, totalTax));
        expect(transformedCart.totals[DaffCartTotalTypeEnum.tax].value).toEqual(totalTax);
        expect(transformedCart.totals[DaffCartTotalTypeEnum.shipping].value).toEqual(mockMagentoCart.shipping_addresses[0].selected_shipping_method.amount.value);
      });

      it('should call the shipping information transformer with the shipping method', () => {
        expect(cartShippingRateTransformerSpy.transform).toHaveBeenCalledWith(mockShippingMethod);
      });

      it('should call the shipping rate transformer with each of the available shipping methods', () => {
        mockShippingAddress.available_shipping_methods.forEach(method => {
          expect(cartShippingRateTransformerSpy.transform).toHaveBeenCalledWith(method);
        });
      });

      it('should call the cart payment transformer with the payment method', () => {
        expect(cartPaymentTransformerSpy.transform).toHaveBeenCalledWith(mockPaymentMethod);
      });

      it('should call the cart address transformer with the billing address', () => {
        expect(cartAddressTransformerSpy.transform).toHaveBeenCalledWith(mockBillingAddress);
      });

      it('should call the shipping address transformer with the shipping address', () => {
        expect(shippingAddressTransformerSpy.transform).toHaveBeenCalledWith(mockShippingAddress);
      });

      it('should set the extra_attributes field', () => {
        expect(transformedCart.extra_attributes).toEqual(mockMagentoCart);
      });
    });

    describe('when the argument is null', () => {
      beforeEach(() => {
        transformedCart = service.transform(null);
      });

      it('should return null and not throw an error', () => {
        expect(transformedCart).toBeNull();
      });
    });

    describe('when the billing address is null', () => {
      beforeEach(() => {
        mockMagentoCart.billing_address = null;
        transformedCart = service.transform(mockMagentoCart);
      });

      it('should not call the cart address transformer', () => {
        expect(cartAddressTransformerSpy.transform).not.toHaveBeenCalled();
      });
    });

    describe('when the shipping address is null', () => {
      beforeEach(() => {
        mockMagentoCart.shipping_addresses = [];
        transformedCart = service.transform(mockMagentoCart);
      });

      it('should not call the shipping address transformer', () => {
        expect(shippingAddressTransformerSpy.transform).not.toHaveBeenCalled();
      });

      it('should not call the shipping rate transformer', () => {
        expect(cartShippingRateTransformerSpy.transform).not.toHaveBeenCalled();
      });
    });

    describe('when the shipping methods are null', () => {
      beforeEach(() => {
        mockMagentoCart.shipping_addresses[0].available_shipping_methods = null;
        transformedCart = service.transform(mockMagentoCart);
      });

      it('should set available_shipping_methods to an empty array', () => {
        expect(transformedCart.available_shipping_methods).toEqual([]);
      });
    });

    describe('when the cart items array contains nully values', () => {
      beforeEach(() => {
        mockMagentoCart.items = [
          null,
          null,
          mockCartItem,
        ];
        transformedCart = service.transform(mockMagentoCart);
      });

      it('should filter out the nully values', () => {
        expect(transformedCart.items.length).toEqual(1);
      });
    });
  });
});
