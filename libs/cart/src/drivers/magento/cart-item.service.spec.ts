import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule, APOLLO_TESTING_CACHE } from 'apollo-angular/testing';
import { of } from 'rxjs';
import { addTypenameToDocument } from 'apollo-utilities';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';

import { schema } from '@daffodil/driver/magento';
import { DaffProduct, DaffConfigurableProduct } from '@daffodil/product';
import { DaffProductFactory, DaffConfigurableProductFactory } from '@daffodil/product/testing';
import {
  DaffCart,
  DaffCartItem,
  daffMagentoNoopCartFragment
} from '@daffodil/cart';
import {
  MagentoCartFactory,
  DaffCartFactory,
  DaffCartItemFactory,
  MagentoCartItemFactory
} from '@daffodil/cart/testing';

import { DaffMagentoCartItemService } from './cart-item.service';
import { MagentoCart } from './models/outputs/cart';
import { MagentoCartItem } from './models/outputs/cart-item';
import { DaffMagentoCartItemUpdateInputTransformer } from './transforms/inputs/cart-item-update.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import {
  listCartItems,
  addSimpleCartItem,
  addBundleCartItem,
  removeCartItem,
  updateCartItem,
	addConfigurableCartItem
} from './queries/public_api';
import {
  MagentoUpdateCartItemResponse,
  MagentoRemoveCartItemResponse,
  MagentoAddSimpleCartItemResponse,
  MagentoAddBundleCartItemResponse,
  MagentoListCartItemsResponse,
	MagentoAddConfigurableCartItemResponse
} from './models/responses/public_api';
import { MagentoCartItemInput } from './models/inputs/cart-item';
import { MagentoCartItemUpdateInput } from './models/inputs/cart-item-update';
import { DaffCartItemInputType, DaffCompositeCartItemInput, DaffSimpleCartItemInput, DaffConfigurableCartItemInput } from '../../models/cart-item-input';
import { DaffMagentoExtraCartFragments } from './injection-tokens/public_api';


describe('Driver | Magento | Cart | CartItemService', () => {
  let service: DaffMagentoCartItemService;
  let controller: ApolloTestingController;

  let daffProductFactory: DaffProductFactory;
  let daffConfigurableProductFactory: DaffConfigurableProductFactory;
  let daffCartFactory: DaffCartFactory;
  let magentoCartFactory: MagentoCartFactory;
  let daffCartItemFactory: DaffCartItemFactory;
  let magentoCartItemFactory: MagentoCartItemFactory;

  let magentoCartTransformerSpy: jasmine.SpyObj<DaffMagentoCartTransformer>;
  let magentoCartItemUpdateInputTransformerSpy: jasmine.SpyObj<DaffMagentoCartItemUpdateInputTransformer>;

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
        ApolloTestingModule
      ],
      providers: [
        DaffMagentoCartItemService,
        {
          provide: DaffMagentoCartTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartTransformer', ['transform'])
        },
        {
          provide: DaffMagentoCartItemUpdateInputTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartItemUpdateInputTransformer', ['transform'])
        },
        {
          provide: DaffMagentoExtraCartFragments,
          useValue: daffMagentoNoopCartFragment,
          multi: true
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

    service = TestBed.get(DaffMagentoCartItemService);
    controller = TestBed.get(ApolloTestingController);

    magentoCartTransformerSpy = TestBed.get(DaffMagentoCartTransformer);
    magentoCartItemUpdateInputTransformerSpy = TestBed.get(DaffMagentoCartItemUpdateInputTransformer);

		daffProductFactory = TestBed.get(DaffProductFactory);
		daffConfigurableProductFactory = TestBed.get(DaffConfigurableProductFactory);
    daffCartFactory = TestBed.get(DaffCartFactory);
    magentoCartFactory = TestBed.get(MagentoCartFactory);
    daffCartItemFactory = TestBed.get(DaffCartItemFactory);
    magentoCartItemFactory = TestBed.get(MagentoCartItemFactory);

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
      sku
    };
    mockDaffCartItemInput = {
			type: DaffCartItemInputType.Simple,
      productId: mockDaffProduct.id,
      qty: 3
    };
    mockDaffCompositeCartItemInput = {
			type: DaffCartItemInputType.Composite,
      productId: mockDaffProduct.id,
			qty: 3,
			options: []
    };
    mockDaffConfigurableCartItemInput = {
			type: DaffCartItemInputType.Configurable,
			variantId: mockDaffConfigurableProduct.variants[0].id,
			productId: mockDaffConfigurableProduct.id,
			qty: 2
    };
    mockMagentoCartItemUpdateInput = {
      cart_item_id: itemId,
      quantity: 3
    }
    mockListCartItemResponse = {
      cart: {
				__typename: 'Cart',
        items: [mockMagentoCartItem]
      }
    };
    mockAddSimpleCartItemResponse = {
      addSimpleProductsToCart: {
				__typename: 'AddSimpleProducts',
        cart: mockMagentoCart
      }
    };
    mockAddBundleCartItemResponse = {
      addBundleProductsToCart: {
				__typename: 'AddBundleProductsToCart',
        cart: mockMagentoCart
      }
    };
    mockAddConfigurableCartItemResponse = {
      addConfigurableProductsToCart: {
				__typename: 'AddConfigurableProductsToCart',
        cart: mockMagentoCart
      }
    };
    mockUpdateCartItemResponse = {
      updateCartItems: {
				__typename: 'UpdateCartItems',
        cart: mockMagentoCart
      }
    };
    mockRemoveCartItemResponse = {
      removeItemFromCart: {
				__typename: 'RemoveItemFromCart',
        cart: mockMagentoCart
      }
    };

    magentoCartTransformerSpy.transform.and.returnValue(mockDaffCart);
    magentoCartItemUpdateInputTransformerSpy.transform.and.returnValue(mockMagentoCartItemUpdateInput);
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
						label: mockMagentoCartItem.product.thumbnail.label
					},
					product_id: mockMagentoCartItem.product.id.toString(),
					sku: mockMagentoCartItem.product.sku,
					name: mockMagentoCartItem.product.name,
					qty: mockMagentoCartItem.quantity,
					price: mockMagentoCartItem.prices.price.value,
					row_total: mockMagentoCartItem.prices.row_total.value,
					total_discount: mockMagentoCartItem.prices.total_item_discount.value
				})]);
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(listCartItems([daffMagentoNoopCartFragment])));

      op.flush({
        data: mockListCartItemResponse
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
      service.get(cartId, Number(mockDaffCartItem.item_id)).subscribe(result => {
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

				const op = controller.expectOne(addTypenameToDocument(addBundleCartItem([daffMagentoNoopCartFragment])));

				op.flush({
					data: mockAddBundleCartItemResponse
				});
			});
		});

    describe('when the given cartItem is a simple product', () => {
			it('should make a addSimpleCartItem query', done => {
				service.add(cartId, mockDaffCartItemInput).subscribe(result => {
					expect(result.items[0]).toEqual(jasmine.objectContaining(mockDaffCartItem));
					done();
				});

				const op = controller.expectOne(addTypenameToDocument(addSimpleCartItem([daffMagentoNoopCartFragment])));

				op.flush({
					data: mockAddSimpleCartItemResponse
				});
			});
		});

		describe('when the given cartItem is a configurable product', () => {
			it('should make a addConfigurableCartItem query', done => {
				service.add(cartId, mockDaffConfigurableCartItemInput).subscribe(result => {
					expect(result.items[0]).toEqual(jasmine.objectContaining(mockDaffCartItem));
					done();
				});

				const op = controller.expectOne(addTypenameToDocument(addConfigurableCartItem([daffMagentoNoopCartFragment])));

				op.flush({
					data: mockAddConfigurableCartItemResponse
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
      service.update(cartId, Number(mockDaffCartItem.item_id), mockDaffCartItem).subscribe(result => {
        expect(result.items[0].qty).toEqual(qty);
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(updateCartItem([daffMagentoNoopCartFragment])));

      op.flush({
        data: mockUpdateCartItemResponse
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
      service.delete(cartId, Number(mockDaffCartItem.item_id)).subscribe(result => {
        expect(result.items.find(({item_id}) =>
          Number(item_id) === Number(mockDaffCartItem.item_id)
        )).toBeFalsy();
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(removeCartItem([daffMagentoNoopCartFragment])));

      op.flush({
        data: mockRemoveCartItemResponse
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
