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
});
