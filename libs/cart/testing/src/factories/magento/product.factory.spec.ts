import { TestBed } from '@angular/core/testing';

import { MagentoProductFactory } from './product.factory';
import { MagentoProduct } from '@daffodil/cart';

describe('Cart | Testing | Factories | ProductFactory', () => {
  let cartItemFactory: MagentoProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoProductFactory]
    });

    cartItemFactory = TestBed.get(MagentoProductFactory);
  });

  it('should be created', () => {
    expect(cartItemFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoProduct;

    beforeEach(() => {
      result = cartItemFactory.create();
    });

    it('should return a Product with all required fields defined', () => {
      expect(result.id).toBeDefined();
      expect(result.image.label).toBeDefined();
      expect(result.image.url).toBeDefined();
      expect(result.manufacturer).toBeDefined();
      expect(result.name).toBeDefined();
      expect(result.description).toBeDefined();
      expect(result.sku).toBeDefined();
      expect(result.price_range.maximum_price).toBeDefined();
      expect(result.price_range.minumum_price).toBeDefined();
    });
  });

  describe('createMany', () => {
    let result: MagentoProduct[];

    it('should create as many cart items as desired', () => {
      const spy = spyOn(cartItemFactory, 'create');

      result = cartItemFactory.createMany(2);
      expect(result.length).toEqual(2);
      expect(cartItemFactory.create).toHaveBeenCalledTimes(2);

      spy.calls.reset();

      result = cartItemFactory.createMany(3);
      expect(result.length).toEqual(3);
      expect(cartItemFactory.create).toHaveBeenCalledTimes(3);
    });
  })
});
