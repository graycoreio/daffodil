import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';

import { of } from 'rxjs';

import {
  MagentoCartFactory,
  DaffCartFactory,
  MagentoCartItemFactory,
  DaffCartItemFactory
} from '@daffodil/cart/testing';

import { DaffMagentoCartService } from './cart.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffCart } from '@daffodil/cart';
import { MagentoCart } from './models/outputs/cart';
import { MagentoCreateCartResponse } from './models/responses/create-cart';
import { getCart, createCart } from './queries/public_api';
import { DaffCartItemDriver } from '../interfaces/cart-item-service.interface';
import { MagentoGetCartResponse } from './models/responses/get-cart';
import { MagentoCartItem } from './models/outputs/cart-item';
import { DaffCartItem } from '../../models/cart-item';

describe('Driver | Magento | Cart | CartService', () => {
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
        ApolloTestingModule
      ],
      providers: [
        DaffMagentoCartService,
        {
          provide: DaffMagentoCartTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartTransformer', ['transform'])
        },
        {
          provide: DaffCartItemDriver,
          useValue: jasmine.createSpyObj('DaffCartItemDriver', ['delete', 'list'])
        }
      ]
    });

    service = TestBed.get(DaffMagentoCartService);
    controller = TestBed.get(ApolloTestingController);

    magentoCartTransformerSpy = TestBed.get(DaffMagentoCartTransformer);
    magentoCartItemSpy = TestBed.get(DaffCartItemDriver);

    daffCartFactory = TestBed.get(DaffCartFactory);
    magentoCartFactory = TestBed.get(MagentoCartFactory);
    magentoCartItemFactory = TestBed.get(MagentoCartItemFactory);
    daffCartItemFactory = TestBed.get(DaffCartItemFactory);

    mockDaffCart = daffCartFactory.create();
    mockMagentoCart = magentoCartFactory.create();
    mockMagentoCartItem = magentoCartItemFactory.create();
    mockDaffCartItem = daffCartItemFactory.create();

    mockMagentoCartItem.id = String(mockDaffCartItem.item_id);
    cartId = mockDaffCart.id;
    mockMagentoCart.items = [mockMagentoCartItem];
    mockDaffCart.items = [mockDaffCartItem];
    mockCreateCartResponse = {
      createEmptyCart: String(cartId)
    };
    mockCartResponse = {
      cart: mockMagentoCart
    };

    magentoCartTransformerSpy.transform.withArgs(mockMagentoCart).and.returnValue(mockDaffCart);
    magentoCartItemSpy.list.withArgs(cartId).and.returnValue(of(mockDaffCart.items))
    magentoCartItemSpy.delete.and.callFake((_, itemId) => of({
      ...mockDaffCart,
      items: mockDaffCart.items.filter(({item_id}) => item_id !== itemId)
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

      const op = controller.expectOne(getCart);

      op.flush({
        data: mockCartResponse
      });
    });

    it('should return the correct value', done => {
      service.get(cartId).subscribe(result => {
        expect(result).toEqual(jasmine.objectContaining(mockDaffCart));
        done();
      });

      const op = controller.expectOne(getCart);

      op.flush({
        data: mockCartResponse
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('clear | remove all items from the cart', () => {
    it('should make a delete cart item request for every item in the cart', done => {
      service.clear(cartId).subscribe(() => {
        mockDaffCart.items.forEach(item => {
          expect(magentoCartItemSpy.delete).toHaveBeenCalledWith(cartId, item.item_id)
        })
        done();
      });
    });

    it('should return an cart observable with no items', done => {
      service.clear(cartId).subscribe(result => {
        expect(result.items.length).toEqual(0);
        done();
      });
		});
		
		describe('when there are no items in the cart', () => {
			
			it('should return the cart', done => {
				mockDaffCart.items = [];
				magentoCartItemSpy.list.and.returnValue(of(mockDaffCart.items));

				service.clear(cartId).subscribe((result) => {
					expect(result).toEqual(mockDaffCart);
					done();
				})
			});
		});
  });

  describe('create | creates the cart', () => {
    it('should return an observable with the cart ID', done => {
      service.create().subscribe(result => {
        expect(String(result.id)).toEqual(String(cartId));
        done();
      });

      const op = controller.expectOne(createCart);

      op.flush({
        data: mockCreateCartResponse
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
