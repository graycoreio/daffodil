import { TestBed } from '@angular/core/testing';
import { InMemoryCache } from '@apollo/client/core';
import { addTypenameToDocument } from '@apollo/client/utilities';
import {
  ApolloTestingController,
  ApolloTestingModule,
  APOLLO_TESTING_CACHE,
} from 'apollo-angular/testing';
import { of } from 'rxjs';

import {
  DaffCart,
  DaffCartItem,
  DaffCartItemInputType,
  DaffCompositeCartItemInput,
  DaffConfigurableCartItemInput,
  DaffSimpleCartItemInput,
} from '@daffodil/cart';
import {
  DaffMagentoCartTransformer,
  DaffMagentoCartItemUpdateInputTransformer,
  MagentoCart,
  MagentoCartItem,
  MagentoCartItemInput,
  MagentoCartItemUpdateInput,
  MagentoAddSimpleCartItemResponse,
  MagentoAddBundleCartItemResponse,
  MagentoAddConfigurableCartItemResponse,
  MagentoListCartItemsResponse,
  MagentoUpdateCartItemResponse,
  MagentoRemoveCartItemResponse,
  listCartItems,
  addBundleCartItem,
  addSimpleCartItem,
  addConfigurableCartItem,
  updateCartItem,
  removeCartItem,
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
import {
  DaffProduct,
  DaffConfigurableProduct,
} from '@daffodil/product';
import {
  DaffProductFactory,
  DaffConfigurableProductFactory,
} from '@daffodil/product/testing';

import { DaffMagentoCartItemService } from './cart-item.service';

describe('Driver | Magento | Cart | CartItemService', () => {
  let service: DaffMagentoCartItemService;
  let controller: ApolloTestingController;

  let daffProductFactory: DaffProductFactory;
  let daffConfigurableProductFactory: DaffConfigurableProductFactory;
  let daffCartFactory: DaffCartFactory;
  let magentoCartFactory: MagentoCartFactory;
  let daffCartItemFactory: DaffCartItemFactory;
  let magentoCartItemFactory: MagentoCartItemFactory;

  let magentoCartTransformer: DaffMagentoCartTransformer;
  let magentoCartItemUpdateInputTransformer: DaffMagentoCartItemUpdateInputTransformer;

  let cartTransformerSpy: jasmine.Spy;
  let cartItemUpdateInputTransformerSpy: jasmine.Spy;

  let cartId;
  let itemId;
  let sku;
  let mockDaffProduct: DaffProduct;
  let mockDaffConfigurableProduct: DaffConfigurableProduct;
  let mockDaffCart: DaffCart;
  let mockMagentoCart: MagentoCart;
  let mockMagentoCartItem: MagentoCartItem;
  let mockDaffCartItemInput: DaffSimpleCartItemInput;
  let mockDaffCompositeCartItemInput: DaffCompositeCartItemInput;
  let mockDaffConfigurableCartItemInput: DaffConfigurableCartItemInput;
  let mockMagentoCartItemInput: MagentoCartItemInput;
  let mockMagentoCartItemUpdateInput: MagentoCartItemUpdateInput;
  let mockDaffCartItem: DaffCartItem;
  let mockAddSimpleCartItemResponse: MagentoAddSimpleCartItemResponse;
  let mockAddBundleCartItemResponse: MagentoAddBundleCartItemResponse;
  let mockAddConfigurableCartItemResponse: MagentoAddConfigurableCartItemResponse;
  let mockListCartItemResponse: MagentoListCartItemsResponse;
  let mockUpdateCartItemResponse: MagentoUpdateCartItemResponse;
  let mockRemoveCartItemResponse: MagentoRemoveCartItemResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffMagentoCartItemService,
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
    daffConfigurableProductFactory = TestBed.inject(DaffConfigurableProductFactory);
    daffCartFactory = TestBed.inject(DaffCartFactory);
    magentoCartFactory = TestBed.inject(MagentoCartFactory);
    daffCartItemFactory = TestBed.inject(DaffCartItemFactory);
    magentoCartItemFactory = TestBed.inject(MagentoCartItemFactory);

    mockDaffProduct = daffProductFactory.create();
    mockDaffConfigurableProduct = daffConfigurableProductFactory.create();
    mockDaffCart = daffCartFactory.create();
    mockMagentoCart = magentoCartFactory.create();
    mockDaffCartItem = daffCartItemFactory.create();
    mockMagentoCartItem = magentoCartItemFactory.create();

    cartId = mockDaffCart.id;
    itemId = mockDaffCartItem.item_id;
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
      variantId: mockDaffConfigurableProduct.variants[0].id,
      productId: mockDaffConfigurableProduct.id,
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
    mockAddSimpleCartItemResponse = {
      addSimpleProductsToCart: {
        __typename: 'AddSimpleProducts',
        cart: mockMagentoCart,
      },
    };
    mockAddBundleCartItemResponse = {
      addBundleProductsToCart: {
        __typename: 'AddBundleProductsToCart',
        cart: mockMagentoCart,
      },
    };
    mockAddConfigurableCartItemResponse = {
      addConfigurableProductsToCart: {
        __typename: 'AddConfigurableProductsToCart',
        cart: mockMagentoCart,
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

    it('should return the correct value', done => {
      service.list(cartId).subscribe(result => {
        expect(result).toEqual([jasmine.objectContaining({
          item_id: mockMagentoCartItem.id,
          type: DaffCartItemInputType.Simple,
          image: {
            id: mockMagentoCartItem.product.thumbnail.label,
            url: mockMagentoCartItem.product.thumbnail.url,
            label: mockMagentoCartItem.product.thumbnail.label,
          },
          product_id: mockMagentoCartItem.product.id.toString(),
          sku: mockMagentoCartItem.product.sku,
          name: mockMagentoCartItem.product.name,
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
      service.get(cartId, mockDaffCartItem.item_id).subscribe(result => {
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

        const op = controller.expectOne(addTypenameToDocument(addBundleCartItem([])));

        op.flush({
          data: mockAddBundleCartItemResponse,
        });
      });
    });

    describe('when the given cartItem is a simple product', () => {
      it('should make a addSimpleCartItem query', done => {
        service.add(cartId, mockDaffCartItemInput).subscribe(result => {
          expect(result.items[0]).toEqual(jasmine.objectContaining(mockDaffCartItem));
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(addSimpleCartItem([])));

        op.flush({
          data: mockAddSimpleCartItemResponse,
        });
      });
    });

    describe('when the given cartItem is a configurable product', () => {
      it('should make a addConfigurableCartItem query', done => {
        service.add(cartId, mockDaffConfigurableCartItemInput).subscribe(result => {
          expect(result.items[0]).toEqual(jasmine.objectContaining(mockDaffCartItem));
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(addConfigurableCartItem([])));

        op.flush({
          data: mockAddConfigurableCartItemResponse,
        });
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });


  describe('update | updates a cart item', () => {
    let qty;

    beforeEach(() => {
      qty = 5;

      mockMagentoCartItem.quantity = qty;
      mockDaffCartItem.qty = qty;
    });

    it('should return the correct value', done => {
      service.update(cartId, mockDaffCartItem.item_id, mockDaffCartItem).subscribe(result => {
        expect(result.items[0].qty).toEqual(qty);
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(updateCartItem([])));

      op.flush({
        data: mockUpdateCartItemResponse,
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('delete | removes a cart item', () => {
    beforeEach(() => {
      mockMagentoCart.items = [];
      mockDaffCart.items = [];
    });

    it('should return the cart without the cart item', done => {
      service.delete(cartId, mockDaffCartItem.item_id).subscribe(result => {
        expect(result.items.find(({ item_id }) =>
          item_id === mockDaffCartItem.item_id,
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
