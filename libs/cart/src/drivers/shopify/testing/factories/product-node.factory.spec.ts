import { TestBed } from '@angular/core/testing';

import { ProductNode } from '../../models/product-node';
import { ProductNodeFactory } from './product-node.factory';

describe('Driver | Shopify | Cart | Testing | Factories | ProductNodeFactory', () => {

  let productNodeFactory: ProductNodeFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductNodeFactory]
    });

    productNodeFactory = TestBed.get(ProductNodeFactory);
  });

  it('should be created', () => {
    expect(productNodeFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: ProductNode;

    beforeEach(() => {
      result = productNodeFactory.create();
    });

    it('should return a ProductNode with all required fields defined', () => {
      expect(result.id).toBeDefined();
      expect(result.description).toBeDefined();
    });
  });

  describe('createMany', () => {
    let result: ProductNode[];

    it('should create as many product nodes as desired', () => {
      result = productNodeFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = productNodeFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
