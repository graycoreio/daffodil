import { TestBed } from '@angular/core/testing';

import { MagentoMoneyFactory } from './money.factory';
import { MagentoMoney } from '@daffodil/cart';

describe('Cart | Testing | Factories | MoneyFactory', () => {
  let cartItemFactory: MagentoMoneyFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoMoneyFactory]
    });

    cartItemFactory = TestBed.get(MagentoMoneyFactory);
  });

  it('should be created', () => {
    expect(cartItemFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoMoney;

    beforeEach(() => {
      result = cartItemFactory.create();
    });

    it('should return a Money with all required fields defined', () => {
      expect(result.currency).toBeDefined();
      expect(result.value).toBeDefined();
    });
  });

  describe('createMany', () => {
    let result: MagentoMoney[];

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
