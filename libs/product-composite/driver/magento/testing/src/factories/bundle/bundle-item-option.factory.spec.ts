import { TestBed } from '@angular/core/testing';

import { MagentoBundledProductItemOption } from '@daffodil/product-composite/driver/magento';

import { MagentoBundledProductItemOptionFactory } from './bundle-item-option.factory';

describe('@daffodil/product-composite/driver/magento/testing | MagentoBundledProductItemOptionFactory', () => {
  let factory: MagentoBundledProductItemOptionFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoBundledProductItemOptionFactory],
    });

    factory = TestBed.inject(MagentoBundledProductItemOptionFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoBundledProductItemOption;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a MagentoBundledProduct with all required fields defined', () => {
      expect(result.uid).toBeDefined();
      expect(result.label).toBeDefined();
      expect(result.quantity).toBeDefined();
      expect(result.is_default).toBeDefined();
      expect(result.position).toBeDefined();
      expect(result.product).toBeDefined();
    });
  });
});
