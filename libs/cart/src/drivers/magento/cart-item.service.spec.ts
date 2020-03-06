import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { of } from 'rxjs';

import {
  DaffProductUnion
} from '@daffodil/product';
import { DaffProductFactory } from '@daffodil/product/testing';
import {
  DaffCart,
  DaffCartItem
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
import { DaffMagentoCartItemTransformer } from './transforms/outputs/cart-item.service';
import { DaffMagentoCartItemInputTransformer } from './transforms/inputs/cart-item.service';
import { DaffMagentoCartItemUpdateInputTransformer } from './transforms/inputs/cart-item-update.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import {
  listCartItems,
  addCartItem,
  removeCartItem,
  updateCartItem
} from './queries';
import {
  MagentoUpdateCartItemResponse,
  MagentoRemoveCartItemResponse,
  MagentoAddCartItemResponse,
  MagentoListCartItemsResponse
} from './models/responses';
import { MagentoCartItemInput } from './models/inputs/cart-item';
import { MagentoCartItemUpdateInput } from './models/inputs/cart-item-update';
import { DaffCartItemInput } from '../../models/cart-item-input';

describe('Driver | Magento | Cart | CartItemService', () => {
  let service: DaffMagentoCartItemService;
  let controller: ApolloTestingController;

  let daffProductFactory: DaffProductFactory;
  let daffCartFactory: DaffCartFactory;
  let magentoCartFactory: MagentoCartFactory;
  let daffCartItemFactory: DaffCartItemFactory;
  let magentoCartItemFactory: MagentoCartItemFactory;

  let magentoCartTransformerSpy: jasmine.SpyObj<DaffMagentoCartTransformer>;
  let magentoCartItemTransformerSpy: jasmine.SpyObj<DaffMagentoCartItemTransformer>;
  let magentoCartItemInputTransformerSpy: jasmine.SpyObj<DaffMagentoCartItemInputTransformer>;
  let magentoCartItemUpdateInputTransformerSpy: jasmine.SpyObj<DaffMagentoCartItemUpdateInputTransformer>;

  let cartId;
  let itemId;
  let sku;
  let mockDaffProduct: DaffProductUnion;
  let mockDaffCart: DaffCart;
  let mockMagentoCart: MagentoCart;
  let mockMagentoCartItem: MagentoCartItem;
  let mockDaffCartItemInput: DaffCartItemInput;
  let mockMagentoCartItemInput: MagentoCartItemInput;
  let mockMagentoCartItemUpdateInput: MagentoCartItemUpdateInput;
  let mockDaffCartItem: DaffCartItem;
  let mockAddCartItemResponse: MagentoAddCartItemResponse;
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
          provide: DaffMagentoCartItemTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartItemTransformer', ['transform'])
        },
        {
          provide: DaffMagentoCartItemInputTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartItemInputTransformer', ['transform'])
        },
        {
          provide: DaffMagentoCartItemUpdateInputTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartItemUpdateInputTransformer', ['transform'])
        }
      ]
    });

    service = TestBed.get(DaffMagentoCartItemService);
    controller = TestBed.get(ApolloTestingController);

    magentoCartTransformerSpy = TestBed.get(DaffMagentoCartTransformer);
    magentoCartItemTransformerSpy = TestBed.get(DaffMagentoCartItemTransformer);
    magentoCartItemInputTransformerSpy = TestBed.get(DaffMagentoCartItemInputTransformer);
    magentoCartItemUpdateInputTransformerSpy = TestBed.get(DaffMagentoCartItemUpdateInputTransformer);

    daffProductFactory = TestBed.get(DaffProductFactory);
    daffCartFactory = TestBed.get(DaffCartFactory);
    magentoCartFactory = TestBed.get(MagentoCartFactory);
    daffCartItemFactory = TestBed.get(DaffCartItemFactory);
    magentoCartItemFactory = TestBed.get(MagentoCartItemFactory);

    mockDaffProduct = daffProductFactory.create();
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
      productId: mockDaffProduct.id,
      qty: 3
    };
    mockMagentoCartItemUpdateInput = {
      cart_item_id: itemId,
      quantity: 3
    }
    mockListCartItemResponse = {
      cart: {
        items: [mockMagentoCartItem]
      }
    };
    mockAddCartItemResponse = {
      addSimpleProductsToCart: {
        cart: mockMagentoCart
      }
    };
    mockUpdateCartItemResponse = {
      updateCartItems: {
        cart: mockMagentoCart
      }
    };
    mockRemoveCartItemResponse = {
      removeItemFromCart: {
        cart: mockMagentoCart
      }
    };

    magentoCartTransformerSpy.transform.withArgs(mockMagentoCart).and.returnValue(mockDaffCart);
    magentoCartItemTransformerSpy.transform.withArgs(mockMagentoCartItem).and.returnValue(mockDaffCartItem);
    magentoCartItemInputTransformerSpy.transform.and.returnValue(mockMagentoCartItemInput);
    magentoCartItemUpdateInputTransformerSpy.transform.and.returnValue(mockMagentoCartItemUpdateInput);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list | getting a list of cart items', () => {
    it('should call the transformer with the correct argument', done => {
      service.list(cartId).subscribe(() => {
        expect(magentoCartItemTransformerSpy.transform).toHaveBeenCalledWith(jasmine.objectContaining(mockMagentoCartItem));
        done();
      });

      const op = controller.expectOne(listCartItems);

      op.flush({
        data: mockListCartItemResponse
      });
    });

    it('should return the correct value', done => {
      service.list(cartId).subscribe(result => {
        expect(result).toEqual([jasmine.objectContaining(mockDaffCartItem)]);
        done();
      });

      const op = controller.expectOne(listCartItems);

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
    it('should return the correct value', done => {
      service.add(cartId, mockDaffCartItemInput).subscribe(result => {
        expect(result.items[0]).toEqual(jasmine.objectContaining(mockDaffCartItem));
        done();
      });

      const op = controller.expectOne(addCartItem);

      op.flush({
        data: mockAddCartItemResponse
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

      const op = controller.expectOne(updateCartItem);

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

      const op = controller.expectOne(removeCartItem);

      op.flush({
        data: mockRemoveCartItemResponse
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
