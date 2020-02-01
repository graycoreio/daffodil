import { TestBed } from '@angular/core/testing';

import { DaffShopifyCartGraphQlQueryManagerService } from './cart-query-manager.service';
import { CheckoutLineItemInput } from '../models/checkout-line-item-input';
import { CheckoutCreateInput } from '../models/checkout-create-input';

describe('DaffShopifyCartGraphQlQueryManagerService', () => {
  let service: DaffShopifyCartGraphQlQueryManagerService;
  const checkoutId = '5'

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.get(DaffShopifyCartGraphQlQueryManagerService);
  });

  it('should be created', () => {
      expect(service).toBeTruthy();
  });

  describe('getCheckoutLineItemInputsQuery', () => {
    it('should set the variables', () => {
      const query = service.getCheckoutLineItemInputsQuery(checkoutId);

      expect(query.variables.checkoutId).toEqual(checkoutId);
    })

    it('should create the query', () => {
      const query = service.getCheckoutLineItemInputsQuery(checkoutId);

      expect(query.query).toBeTruthy();
    })
  });

  describe('getTheCartQuery', () => {
    const customerAccessToken = 'sda8f7gsadbdsf';

    it('should set the variables', () => {
      const query = service.getTheCartQuery(customerAccessToken, checkoutId);

      expect(query.variables.checkoutId).toEqual(checkoutId);
      expect(query.variables.customerAccessToken).toEqual(customerAccessToken);
    })

    it('should create the query', () => {
      const query = service.getTheCartQuery(customerAccessToken, checkoutId);

      expect(query.query).toBeTruthy();
    })
  });


  describe('setCartItemsMutation', () => {
    const mockLineItemInputs: CheckoutLineItemInput[] = [
      {
        variantId: '5',
        quantity: 2
      },
      {
        variantId: '3',
        quantity: 1
      }
    ];

    it('should set the checkoutId variable', () => {
      const mutation = service.setCartItemsMutation(mockLineItemInputs, checkoutId);

      expect(mutation.variables.checkoutId).toEqual(checkoutId);
      expect(mutation.variables.lineItems).toEqual(mockLineItemInputs);
    })

    it('should create the mutation', () => {
      const mutation = service.setCartItemsMutation(mockLineItemInputs, checkoutId);

      expect(mutation.mutation).toBeTruthy();
    })
  });

  describe('getCreateCartMutation', () => {
    const mockCheckoutCreateInput: CheckoutCreateInput = {
      allowPartialAddresses: true,
      customAttributes: [],
      email: '',
      lineItems: [],
      note: '',
      presentmentCurrencyCode: '',
      shippingAddress: null,
    };

    it('should set the checkoutId variable', () => {
      const mutation = service.getCreateCartMutation(mockCheckoutCreateInput);

      expect(mutation.variables.input).toEqual(mockCheckoutCreateInput);
    })

    it('should create the mutation', () => {
      const mutation = service.getCreateCartMutation(mockCheckoutCreateInput);

      expect(mutation.mutation).toBeTruthy();
    })
  });
});
