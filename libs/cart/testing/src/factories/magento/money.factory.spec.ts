import { TestBed } from '@angular/core/testing';

import { MagentoMoneyFactory } from './money.factory';
import { MagentoMoney } from '@daffodil/cart';

describe('Cart | Testing | Factories | MoneyFactory', () => {
  let factory: MagentoMoneyFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoMoneyFactory]
    });

    factory = TestBed.get(MagentoMoneyFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoMoney;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a Money with all required fields defined', () => {
      expect(result.currency).toBeDefined();
      expect(result.value).toBeDefined();
    });
  });
});
