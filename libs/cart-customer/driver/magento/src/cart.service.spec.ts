import { TestBed } from '@angular/core/testing';
import { InMemoryCache } from '@apollo/client/core';
import { addTypenameToDocument } from '@apollo/client/utilities';
import {
  ApolloTestingController,
  ApolloTestingModule,
  APOLLO_TESTING_CACHE,
} from 'apollo-angular/testing';
import { GraphQLError } from 'graphql';
import { of } from 'rxjs';

import {
  DaffCart,
  DaffCartItem,
} from '@daffodil/cart';
import {
  getCustomerCart,
  MagentoGetCustomerCartResponse,
} from '@daffodil/cart-customer/driver/magento';
import {
  DaffCartDriverErrorCodes,
  DaffCartNotFoundError,
  DaffProductOutOfStockError,
} from '@daffodil/cart/driver';
import {
  MagentoCart,
  MagentoCartItem,
  DaffMagentoCartTransformer,
  DaffMagentoCartService,
} from '@daffodil/cart/driver/magento';
import {
  MagentoCartFactory,
  MagentoCartItemFactory,
} from '@daffodil/cart/driver/magento/testing';
import {
  DaffCartFactory,
  DaffCartItemFactory,
} from '@daffodil/cart/testing';
import { schema } from '@daffodil/driver/magento';

import { DaffMagentoCartCustomerService } from './cart.service';

describe('@daffodil/cart-customer/driver/magento | DaffMagentoCartCustomerService', () => {
  let service: DaffMagentoCartCustomerService;
  let controller: ApolloTestingController;

  let daffCartFactory: DaffCartFactory;
  let magentoCartFactory: MagentoCartFactory;
  let magentoCartItemFactory: MagentoCartItemFactory;
  let daffCartItemFactory: DaffCartItemFactory;

  let magentoCartTransformerSpy;

  let mockDaffCart: DaffCart;
  let mockMagentoCart: MagentoCart;
  let mockMagentoCartItem: MagentoCartItem;
  let mockDaffCartItem: DaffCartItem;
  let mockCartResponse: MagentoGetCustomerCartResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffMagentoCartCustomerService,
        {
          provide: DaffMagentoCartTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartTransformer', ['transform']),
        },
        {
          provide: DaffMagentoCartService,
          useValue: jasmine.createSpyObj('DaffMagentoCartService', ['get', 'create', 'clear']),
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

    service = TestBed.inject(DaffMagentoCartCustomerService);
    controller = TestBed.inject(ApolloTestingController);

    magentoCartTransformerSpy = TestBed.inject(DaffMagentoCartTransformer);

    daffCartFactory = TestBed.inject(DaffCartFactory);
    magentoCartFactory = TestBed.inject(MagentoCartFactory);
    magentoCartItemFactory = TestBed.inject(MagentoCartItemFactory);
    daffCartItemFactory = TestBed.inject(DaffCartItemFactory);

    mockDaffCart = daffCartFactory.create();
    mockMagentoCart = magentoCartFactory.create();
    mockMagentoCartItem = magentoCartItemFactory.create();
    mockDaffCartItem = daffCartItemFactory.create();

    mockMagentoCartItem.id = mockDaffCartItem.id;
    mockMagentoCart.items = [mockMagentoCartItem];
    mockDaffCart.items = [mockDaffCartItem];
    mockCartResponse = {
      __typename: 'Cart',
      customerCart: mockMagentoCart,
    };

    magentoCartTransformerSpy.transform.and.returnValue(mockDaffCart);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    it('should call the transformer with the correct argument', done => {
      service.get().subscribe(() => {
        expect(magentoCartTransformerSpy.transform).toHaveBeenCalledWith(mockCartResponse.customerCart);
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(getCustomerCart([])));

      op.flush({
        data: mockCartResponse,
      });
    });

    it('should return the correct value', done => {
      service.get().subscribe(result => {
        expect(result.response).toEqual(jasmine.objectContaining(mockDaffCart));
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(getCustomerCart([])));

      op.flush({
        data: mockCartResponse,
      });
    });

    describe('when there are graphQL errors', () => {
      it('should return those errors', done => {
        service.get().subscribe(result => {
          expect(result.errors).toContain(jasmine.any(DaffCartNotFoundError));
          expect(result.errors).toContain(jasmine.any(DaffProductOutOfStockError));
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(getCustomerCart([])));

        op.flush({
          errors: [new GraphQLError(
            'Can\'t find a cart with that ID.',
            null,
            null,
            null,
            null,
            null,
            { category: 'graphql-no-such-entity' },
          ), new GraphQLError(
            'Some of the products are out of stock.',
            null,
            null,
            null,
            null,
            null,
            { category: 'graphql-no-such-entity' },
          )],
        });
      });

      it('should should set out of stock errors as recoverable', done => {
        service.get().subscribe(result => {
          expect(result.errors.find(error => error.code === DaffCartDriverErrorCodes.PRODUCT_OUT_OF_STOCK).recoverable).toBeTrue();
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(getCustomerCart([])));

        op.flush({
          errors: [new GraphQLError(
            'Can\'t find a cart with that ID.',
            null,
            null,
            null,
            null,
            null,
            { category: 'graphql-no-such-entity' },
          ), new GraphQLError(
            'Some of the products are out of stock.',
            null,
            null,
            null,
            null,
            null,
            { category: 'graphql-no-such-entity' },
          )],
        });
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
