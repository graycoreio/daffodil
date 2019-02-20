import { TestBed } from '@angular/core/testing';

import { DaffOrderAddressFactory } from './order-address.factory';
import { OrderAddress } from '@daffodil/core';

describe('Core | Order | Factories | OrderAddressFactory', () => {
  
  let orderAddressFactory: DaffOrderAddressFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffOrderAddressFactory]
    });

    orderAddressFactory = TestBed.get(DaffOrderAddressFactory);
  });

  it('should be created', () => {
    expect(orderAddressFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: OrderAddress;

    beforeEach(() => {
      result = orderAddressFactory.create();
    });
    
    xit('should return a OrderAddress with all required fields defined', () => {

    });
  });

  describe('createMany', () => {
    let result: OrderAddress[];

    it('should create as many order addresses as desired', () => {
      result = orderAddressFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = orderAddressFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
