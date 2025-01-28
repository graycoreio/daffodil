import { TestBed } from '@angular/core/testing';

import { DaffCartItem } from '@daffodil/cart';
import { DaffProduct } from '@daffodil/product';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffCartItemFactory } from './cart-item.factory';

describe('@daffodil/cart/testing | DaffCartItemFactory', () => {
  let cartItemFactory: DaffCartItemFactory;
  let productFactory: DaffProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCartItemFactory],
    });

    cartItemFactory = TestBed.inject(DaffCartItemFactory);
    productFactory = TestBed.inject(DaffProductFactory);
  });

  it('should be created', () => {
    expect(cartItemFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffCartItem;

    beforeEach(() => {
      result = cartItemFactory.create();
    });

    it('should return a CartItem with all required fields defined', () => {
      expect(result.id).not.toBeNull();
      expect(result.product_id).not.toBeNull();
      expect(result.parent_item_id).not.toBeNull();
      expect(result.image).not.toBeNull();
      expect(result.url).not.toBeNull();
      expect(result.sku).not.toBeNull();
      expect(result.name).not.toBeNull();
      expect(result.qty).not.toBeNull();
      expect(result.price).not.toBeNull();
      expect(result.row_total).not.toBeNull();
      expect(result.in_stock).not.toBeNull();
      expect(result.discounts).not.toBeNull();
    });

    it('should set the sum of discounts to be less than or equal to price', () => {
      expect(result.discounts.reduce((acc, discount) => acc + discount.amount, 0)).toBeLessThanOrEqual(result.price);
    });
  });

  describe('fromProduct', () => {
    let result: DaffCartItem;
    let product: DaffProduct;

    beforeEach(() => {
      product = productFactory.create();
      result = cartItemFactory.fromProduct(product);
    });

    it('should return a CartItem with fields seeded from a product', () => {
      expect(result.product_id).toEqual(product.id);
      expect(result.name).toEqual(product.name);
      expect(result.url).toEqual(product.url);
      expect(result.image).toEqual(product.images[0]);
      expect(result.sku).toEqual(product.id);
      expect(result.in_stock).toEqual(product.in_stock);
    });
  });
});
