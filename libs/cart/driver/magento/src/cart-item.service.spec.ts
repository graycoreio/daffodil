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
import { catchError } from 'rxjs/operators';

import {
  DaffCart,
  DaffCartItem,
  DaffCartItemInputType,
  DaffCompositeCartItemInput,
  DaffConfigurableCartItemInput,
  DaffSimpleCartItemInput,
} from '@daffodil/cart';
import {
  DaffCartDriverErrorCodes,
  DaffCartItemExceedsMaxQtyError,
  DaffCartNotFoundError,
  DaffProductOutOfStockError,
} from '@daffodil/cart/driver';
import {
  DaffMagentoCartTransformer,
  DaffMagentoCartItemUpdateInputTransformer,
  MagentoCart,
  MagentoCartItem,
  MagentoCartItemInput,
  MagentoCartItemUpdateInput,
  MagentoListCartItemsResponse,
  MagentoUpdateCartItemResponse,
  MagentoRemoveCartItemResponse,
  listCartItems,
  updateCartItem,
  removeCartItem,
  MagentoAddCartItemResponse,
  addCartItem,
  DaffCartMagentoCartItemTransform,
  provideDaffCartMagentoCartItemTransforms,
  MagentoCartUserInputErrorType,
  MagentoCartUserInputError,
} from '@daffodil/cart/driver/magento';
import {
  MagentoCartFactory,
  MagentoCartItemFactory,
} from '@daffodil/cart/driver/magento/testing';
import {
  DaffCartFactory,
  DaffCartItemFactory,
} from '@daffodil/cart/testing';
import { DaffError } from '@daffodil/core';
import { DaffBadInputError } from '@daffodil/driver';
import { schema } from '@daffodil/driver/magento';
import { DaffProduct } from '@daffodil/product';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffMagentoCartItemService } from './cart-item.service';

describe('@daffodil/cart/driver/magento | CartItemService', () => {
  let service: DaffMagentoCartItemService;
  let controller: ApolloTestingController;

  let daffProductFactory: DaffProductFactory;
  let daffCartFactory: DaffCartFactory;
  let magentoCartFactory: MagentoCartFactory;
  let daffCartItemFactory: DaffCartItemFactory;
  let magentoCartItemFactory: MagentoCartItemFactory;

  let magentoCartTransformer: DaffMagentoCartTransformer;
  let magentoCartItemUpdateInputTransformer: DaffMagentoCartItemUpdateInputTransformer;
  let transform: DaffCartMagentoCartItemTransform;
  let transformName: string;

  let cartTransformerSpy: jasmine.Spy;
  let cartItemUpdateInputTransformerSpy: jasmine.Spy;

  let cartId;
  let itemId;
  let sku;
  let mockDaffProduct: DaffProduct;
  let mockDaffCart: DaffCart;
  let mockMagentoCart: MagentoCart;
  let mockMagentoCartItem: MagentoCartItem;
  let mockDaffCartItemInput: DaffSimpleCartItemInput;
  let mockDaffCompositeCartItemInput: DaffCompositeCartItemInput;
  let mockDaffConfigurableCartItemInput: DaffConfigurableCartItemInput;
  let mockMagentoCartItemInput: MagentoCartItemInput;
  let mockMagentoCartItemUpdateInput: MagentoCartItemUpdateInput;
  let mockDaffCartItem: DaffCartItem;
  let mockAddCartItemResponse: MagentoAddCartItemResponse;
  let mockListCartItemResponse: MagentoListCartItemsResponse;
  let mockUpdateCartItemResponse: MagentoUpdateCartItemResponse;
  let mockRemoveCartItemResponse: MagentoRemoveCartItemResponse;

  beforeEach(() => {
    transformName = 'transform name';
    transform = (daffItem, magentoItem) => ({
      ...daffItem,
      name: transformName,
    });

    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffMagentoCartItemService,
        ...provideDaffCartMagentoCartItemTransforms(transform),
        {
          provide: APOLLO_TESTING_CACHE,
          useValue: new InMemoryCache({
            addTypename: true,
            possibleTypes: schema.possibleTypes,
          }),
        },
      ],
    });

    service = TestBed.inject(DaffMagentoCartItemService);
    controller = TestBed.inject(ApolloTestingController);

    magentoCartTransformer = TestBed.inject(DaffMagentoCartTransformer);
    magentoCartItemUpdateInputTransformer = TestBed.inject(DaffMagentoCartItemUpdateInputTransformer);

    daffProductFactory = TestBed.inject(DaffProductFactory);
    daffCartFactory = TestBed.inject(DaffCartFactory);
    magentoCartFactory = TestBed.inject(MagentoCartFactory);
    daffCartItemFactory = TestBed.inject(DaffCartItemFactory);
    magentoCartItemFactory = TestBed.inject(MagentoCartItemFactory);

    mockDaffProduct = daffProductFactory.create();
    mockDaffCart = daffCartFactory.create();
    mockMagentoCart = magentoCartFactory.create();
    mockDaffCartItem = daffCartItemFactory.create();
    mockMagentoCartItem = magentoCartItemFactory.create();

    cartId = mockDaffCart.id;
    itemId = mockDaffCartItem.id;
    sku = mockDaffCartItem.sku;
    mockMagentoCartItem.id = itemId;
    mockDaffCart.items = [mockDaffCartItem];
    mockMagentoCart.items = [mockMagentoCartItem];
    mockMagentoCartItemInput = {
      quantity: 3,
      sku,
    };
    mockDaffCartItemInput = {
      type: DaffCartItemInputType.Simple,
      productId: mockDaffProduct.id,
      qty: 3,
    };
    mockDaffCompositeCartItemInput = {
      type: DaffCartItemInputType.Composite,
      productId: mockDaffProduct.id,
      qty: 3,
      options: [],
    };
    mockDaffConfigurableCartItemInput = {
      type: DaffCartItemInputType.Configurable,
      variantId: 'variantId',
      productId: 'configurableId',
      qty: 2,
    };
    mockMagentoCartItemUpdateInput = {
      cart_item_id: itemId,
      quantity: 3,
    };
    mockListCartItemResponse = {
      cart: {
        __typename: 'Cart',
        items: [mockMagentoCartItem],
      },
    };
    mockAddCartItemResponse = {
      addProductsToCart: {
        __typename: 'AddProductsToCartOutput',
        cart: mockMagentoCart,
        user_errors: [],
      },
    };
    mockUpdateCartItemResponse = {
      updateCartItems: {
        __typename: 'UpdateCartItems',
        cart: mockMagentoCart,
      },
    };
    mockRemoveCartItemResponse = {
      removeItemFromCart: {
        __typename: 'RemoveItemFromCart',
        cart: mockMagentoCart,
      },
    };

    cartTransformerSpy = spyOn(magentoCartTransformer, 'transform');
    cartItemUpdateInputTransformerSpy = spyOn(magentoCartItemUpdateInputTransformer, 'transform');

    cartTransformerSpy.and.returnValue(mockDaffCart);
    cartItemUpdateInputTransformerSpy.and.returnValue(mockMagentoCartItemUpdateInput);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list | getting a list of cart items', () => {
    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw an Error', done => {
        service.list(cartId).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(Error));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(listCartItems([])));

        op.graphqlErrors([new GraphQLError(
          'Can\'t find a cart with that ID.',
          null,
          null,
          null,
          null,
          null,
          { category: 'graphql-no-such-entity' },
        )]);
      });
    });

    describe('when the products response contains nully values', () => {
      beforeEach(() => {
        mockListCartItemResponse = {
          cart: {
            __typename: 'Cart',
            items: [null, null, mockMagentoCartItem],
          },
        };
      });

      it('should filter out the nully values', done => {
        service.list(cartId).subscribe(result => {
          expect(result.length).toEqual(1);
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(listCartItems([])));

        op.flush({
          data: mockListCartItemResponse,
        });
      });
    });

    it('should return the correct value', done => {
      service.list(cartId).subscribe(result => {
        expect(result).toEqual([jasmine.objectContaining({
          id: mockMagentoCartItem.id,
          type: DaffCartItemInputType.Simple,
          image: {
            id: mockMagentoCartItem.product.thumbnail.label,
            url: mockMagentoCartItem.product.thumbnail.url,
            label: mockMagentoCartItem.product.thumbnail.label,
          },
          product_id: mockMagentoCartItem.product.id.toString(),
          sku: mockMagentoCartItem.product.sku,
          name: transformName,
          qty: mockMagentoCartItem.quantity,
          price: mockMagentoCartItem.prices.price.value,
          row_total: mockMagentoCartItem.prices.row_total.value,
        })]);
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(listCartItems([])));

      op.flush({
        data: mockListCartItemResponse,
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('get | getting a cart item', () => {
    let listSpy;

    beforeEach(() => {
      listSpy = spyOn(service, 'list');
      listSpy.withArgs(cartId).and.returnValue(of([mockDaffCartItem]));
    });

    it('should return the correct value', done => {
      service.get(cartId, mockDaffCartItem.id).subscribe(result => {
        expect(result).toEqual(jasmine.objectContaining(mockDaffCartItem));
        done();
      });
    });
  });

  describe('add | adds a cart item', () => {

    describe('when the given cartItem is a composite product', () => {
      it('should make a addBundleCartItem query', done => {
        service.add(cartId, mockDaffCompositeCartItemInput).subscribe(result => {
          expect(result.items[0]).toEqual(jasmine.objectContaining(mockDaffCartItem));
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(addCartItem([])));

        op.flush({
          data: mockAddCartItemResponse,
        });
      });
    });

    describe('when the given cartItem is a simple product', () => {
      it('should make a addSimpleCartItem query', done => {
        service.add(cartId, mockDaffCartItemInput).subscribe(result => {
          expect(result.items[0]).toEqual(jasmine.objectContaining(mockDaffCartItem));
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(addCartItem([])));

        op.flush({
          data: mockAddCartItemResponse,
        });
      });
    });

    describe('when the given cartItem is a configurable product', () => {
      it('should make a addConfigurableCartItem query', done => {
        service.add(cartId, mockDaffConfigurableCartItemInput).subscribe(result => {
          expect(result.items[0]).toEqual(jasmine.objectContaining(mockDaffCartItem));
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(addCartItem([])));

        op.flush({
          data: mockAddCartItemResponse,
        });
      });
    });

    describe('when there are errors', () => {
      beforeEach(() => {
        mockAddCartItemResponse.addProductsToCart.user_errors.push({ code: MagentoCartUserInputErrorType.INSUFFICIENT_STOCK, message: 'Product out of stock' });
      });

      it('should throw an error', done => {
        service.add(cartId, mockDaffConfigurableCartItemInput).pipe(
          catchError((error: DaffError) => {
            expect(error.code).toEqual(DaffCartDriverErrorCodes.PRODUCT_OUT_OF_STOCK);
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(addCartItem([])));

        op.flush({
          data: mockAddCartItemResponse,
        });
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('update | updates a cart item', () => {
    describe('when the call to the Magento API is successful', () => {
      let qty;

      beforeEach(() => {
        qty = 5;

        mockMagentoCartItem.quantity = qty;
        mockDaffCartItem.qty = qty;
      });

      it('should return the correct value', done => {
        service.update(cartId, mockDaffCartItem.id, mockDaffCartItem).subscribe(result => {
          expect(result.items[0].qty).toEqual(qty);
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(updateCartItem([])));

        op.flush({
          data: mockUpdateCartItemResponse,
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      describe('because of a graphql-no-such-entity error', () => {
        it('should throw a DaffCartNotFoundError', done => {
          service.update(cartId, mockDaffCartItem.id, mockDaffCartItem).pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffCartNotFoundError));
              done();
              return [];
            }),
          ).subscribe();

          const op = controller.expectOne(addTypenameToDocument(updateCartItem([])));

          op.graphqlErrors([new GraphQLError(
            'Can\'t find a cart with that ID.',
            null,
            null,
            null,
            null,
            null,
            { category: 'graphql-no-such-entity' },
          )]);
        });
      });

      describe('because of a graphql-input error', () => {
        it('should throw a DaffBadInputError', done => {
          service.update(cartId, mockDaffCartItem.id, mockDaffCartItem).pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffBadInputError));
              done();
              return [];
            }),
          ).subscribe();

          const op = controller.expectOne(addTypenameToDocument(updateCartItem([])));

          op.graphqlErrors([new GraphQLError(
            'Item ID cannot be empty.',
            null,
            null,
            null,
            null,
            null,
            { category: 'graphql-input' },
          )]);
        });
      });

      describe('because the there is insufficient stock of the requested product', () => {
        it('should throw a DaffProductOutOfStockError', done => {
          service.update(cartId, mockDaffCartItem.id, mockDaffCartItem).pipe(
            catchError((err: DaffProductOutOfStockError) => {
              expect(err).toEqual(jasmine.any(DaffProductOutOfStockError));
              done();
              return [];
            }),
          ).subscribe();

          const op = controller.expectOne(addTypenameToDocument(updateCartItem([])));

          op.graphqlErrors([new GraphQLError(
            'The requested qty is not available',
            null,
            null,
            null,
            null,
            null,
            { category: 'graphql-input' },
          )]);
        });
      });

      describe('because the requested qty exceeds the max allowed', () => {
        it('should throw a DaffCartItemExceedsMaxQtyError', done => {
          service.update(cartId, mockDaffCartItem.id, mockDaffCartItem).pipe(
            catchError((err: DaffCartItemExceedsMaxQtyError) => {
              expect(err).toEqual(jasmine.any(DaffCartItemExceedsMaxQtyError));
              done();
              return [];
            }),
          ).subscribe();

          const op = controller.expectOne(addTypenameToDocument(updateCartItem([])));

          op.graphqlErrors([new GraphQLError(
            'The requested qty exceeds the maximum qty allowed in shopping cart.',
            null,
            null,
            null,
            null,
            null,
            { category: 'graphql-input' },
          )]);
        });
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('delete | removes a cart item', () => {
    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw an Error', done => {
        service.delete(cartId, mockDaffCartItem.id).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(Error));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(removeCartItem([])));

        op.graphqlErrors([new GraphQLError(
          'Can\'t find a cart with that ID.',
          null,
          null,
          null,
          null,
          null,
          { category: 'graphql-no-such-entity' },
        )]);
      });
    });

    beforeEach(() => {
      mockMagentoCart.items = [];
      mockDaffCart.items = [];
    });

    it('should return the cart without the cart item', done => {
      service.delete(cartId, mockDaffCartItem.id).subscribe(result => {
        expect(result.items.find(({ id }) =>
          id === mockDaffCartItem.id,
        )).toBeFalsy();
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(removeCartItem([])));

      op.flush({
        data: mockRemoveCartItemResponse,
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
