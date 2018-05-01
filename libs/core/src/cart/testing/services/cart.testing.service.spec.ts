import { TestBed, inject } from '@angular/core/testing';

import { CartTestingService } from './cart.testing.service';
import { Cart } from '../../model/cart';
import { CartTestingModule } from '../../testing/cart-testing.module';
import { CartFactory, MockCart } from '../../testing/factories/cart.factory';

describe('Core | Cart | Testing | CartTestingService', () => {
  
  let cartTestingService;
  let cartFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CartTestingModule
      ],
      providers: [CartTestingService]
    });

    cartFactory = TestBed.get(CartFactory);
    cartTestingService = TestBed.get(CartTestingService);

    spyOn(cartFactory, 'create');    
  });

  it('should be created', () => {
    expect(cartTestingService).toBeTruthy();
  });

  describe('createDb', () => {

    let result;

    beforeEach(() => {
      result = cartTestingService.createDb();
    });
    
    it('should return an object with an array of carts', () => {
      expect(result.carts.length).toEqual(1);
    });

    it('should call cartFactory.create', () => {
      expect(cartFactory.create).toHaveBeenCalledTimes(1);
    });
  });
});
