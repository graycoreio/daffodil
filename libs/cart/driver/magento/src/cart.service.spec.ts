import { TestBed } from '@angular/core/testing';
import { InMemoryCache } from '@apollo/client/core';
import { addTypenameToDocument } from '@apollo/client/utilities';
import {
  ApolloTestingController,
  ApolloTestingModule,
  APOLLO_TESTING_CACHE,
} from '@damienwebdev/apollo-angular/testing';
import { GraphQLError } from 'graphql';
import { of } from 'rxjs';

import {
  DaffCart,
  DaffCartItem,
} from '@daffodil/cart';
import {
  DaffCartDriverErrorCodes,
  DaffCartItemDriver,
  DaffCartNotFoundError,
  DaffProductOutOfStockError,
} from '@daffodil/cart/driver';
import {
  MagentoCart,
  MagentoCartItem,
  MagentoGetCartResponse,
  MagentoCreateCartResponse,
  DaffMagentoCartTransformer,
  createCart,
  getCart,
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

import { DaffMagentoCartService } from './cart.service';

describe('@daffodil/cart/driver/magento | DaffMagentoCartService', () => {
  let service: DaffMagentoCartService;
  let controller: ApolloTestingController;

  let daffCartFactory: DaffCartFactory;
  let magentoCartFactory: MagentoCartFactory;
  let magentoCartItemFactory: MagentoCartItemFactory;
  let daffCartItemFactory: DaffCartItemFactory;

  let magentoCartTransformerSpy;
  let magentoCartItemSpy;

  let cartId;
  let mockDaffCart: DaffCart;
  let mockMagentoCart: MagentoCart;
  let mockMagentoCartItem: MagentoCartItem;
  let mockDaffCartItem: DaffCartItem;
  let mockCartResponse: MagentoGetCartResponse;
  let mockCreateCartResponse: MagentoCreateCartResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffMagentoCartService,
        {
          provide: DaffMagentoCartTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartTransformer', ['transform']),
        },
        {
          provide: DaffCartItemDriver,
          useValue: jasmine.createSpyObj('DaffCartItemDriver', ['delete', 'list']),
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

    service = TestBed.inject(DaffMagentoCartService);
    controller = TestBed.inject(ApolloTestingController);

    magentoCartTransformerSpy = TestBed.inject(DaffMagentoCartTransformer);
    magentoCartItemSpy = TestBed.inject(DaffCartItemDriver);

    daffCartFactory = TestBed.inject(DaffCartFactory);
    magentoCartFactory = TestBed.inject(MagentoCartFactory);
    magentoCartItemFactory = TestBed.inject(MagentoCartItemFactory);
    daffCartItemFactory = TestBed.inject(DaffCartItemFactory);

    mockDaffCart = daffCartFactory.create();
    mockMagentoCart = magentoCartFactory.create();
    mockMagentoCartItem = magentoCartItemFactory.create();
    mockDaffCartItem = daffCartItemFactory.create();

    mockMagentoCartItem.id = mockDaffCartItem.id;
    cartId = mockDaffCart.id;
    mockMagentoCart.items = [mockMagentoCartItem];
    mockDaffCart.items = [mockDaffCartItem];
    mockCreateCartResponse = {
      createEmptyCart: cartId,
    };
    mockCartResponse = {
      __typename: 'Cart',
      cart: mockMagentoCart,
    };

    magentoCartTransformerSpy.transform.and.returnValue(mockDaffCart);
    magentoCartItemSpy.list.and.returnValue(of(mockDaffCart.items));
    magentoCartItemSpy.delete.and.callFake((_, itemId) => of({
      ...mockDaffCart,
      items: mockDaffCart.items.filter(({ id }) => id !== itemId),
    }));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting a single cart', () => {
    it('should call the transformer with the correct argument', done => {
      service.get(cartId).subscribe(() => {
        expect(magentoCartTransformerSpy.transform).toHaveBeenCalledWith(mockCartResponse.cart);
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(getCart([])));

      op.flush({
        data: mockCartResponse,
      });
    });

    it('should return the correct value', done => {
      service.get(cartId).subscribe(result => {
        expect(result.response).toEqual(jasmine.objectContaining(mockDaffCart));
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(getCart([])));

      op.flush({
        data: mockCartResponse,
      });
    });

    describe('when there are graphQL errors', () => {
      it('should return those errors', done => {
        service.get(cartId).subscribe(result => {
          expect(result.errors).toContain(jasmine.any(DaffCartNotFoundError));
          expect(result.errors).toContain(jasmine.any(DaffProductOutOfStockError));
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(getCart([])));

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
        service.get(cartId).subscribe(result => {
          expect(result.errors.find(error => error.code === DaffCartDriverErrorCodes.PRODUCT_OUT_OF_STOCK).recoverable).toBeTrue();
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(getCart([])));

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

  describe('clear | remove all items from the cart', () => {
    it('should make a delete cart item request for every item in the cart', done => {
      spyOn(service, 'get').and.returnValue(of({
        response: mockDaffCart,
        errors: [],
      }));
      service.clear(cartId).subscribe(() => {
        mockDaffCart.items.forEach(item => {
          expect(magentoCartItemSpy.delete).toHaveBeenCalledWith(cartId, item.id);
        });
        done();
      });
    });

    it('should return the cart from the get cart call', done => {
      spyOn(service, 'get').and.returnValue(of({
        response: mockDaffCart,
        errors: [],
      }));
      service.clear(cartId).subscribe(result => {
        expect(result).toEqual(mockDaffCart);
        done();
      });
    });
  });

  describe('create | creates the cart', () => {
    it('should return an observable with the cart ID', done => {
      service.create().subscribe(result => {
        expect(result.id).toEqual(cartId);
        done();
      });

      const op = controller.expectOne(createCart);

      op.flush({
        data: mockCreateCartResponse,
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
