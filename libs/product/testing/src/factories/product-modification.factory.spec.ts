import { TestBed } from '@angular/core/testing';

import { DaffProductModification } from '@daffodil/product';

import { DaffProductModificationFactory } from './product-modification.factory';

describe('Product | Testing | Factories | DaffProductModificationFactory', () => {
  
  let productModificationFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffProductModificationFactory]
    });

    productModificationFactory = TestBed.get(DaffProductModificationFactory);
  });

  it('should be created', () => {
    expect(productModificationFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffProductModification;

    beforeEach(() => {
      result = productModificationFactory.create();
    });
    
    it('should return a Product with all required fields defined', () => {
      expect(result.id).toBeDefined();   
      expect(result.modification).toBeDefined();     
    });
  });

  describe('createMany', () => {
    let result: DaffProductModification[];

    it('should create as many products as desired', () => {
      result = productModificationFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = productModificationFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
