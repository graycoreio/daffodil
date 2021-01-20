import { TestBed } from '@angular/core/testing';

import { MagentoMoney } from '@daffodil/driver/magento';

import { MagentoMoneyFactory } from './money.factory';

describe('Driver | Magento | Testing | Factories | MagentoMoneyFactory', () => {
  let factory: MagentoMoneyFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoMoneyFactory]
    });

    factory = TestBed.inject(MagentoMoneyFactory);
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
