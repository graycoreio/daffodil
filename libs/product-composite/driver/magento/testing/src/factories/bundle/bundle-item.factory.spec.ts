import { TestBed } from '@angular/core/testing';

import { MagentoBundledProductItem } from '@daffodil/product-composite/driver/magento';

import { MagentoBundledProductItemFactory } from './bundle-item.factory';

describe('@daffodil/product-composite/driver/magento/testing | MagentoBundledProductItemFactory', () => {
  let factory: MagentoBundledProductItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoBundledProductItemFactory],
    });

    factory = TestBed.inject(MagentoBundledProductItemFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoBundledProductItem;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a MagentoBundledProduct with all required fields defined', () => {
      expect(result.required).toBeDefined();
      expect(result.title).toBeDefined();
      expect(result.type).toBeDefined();
      expect(result.options).toBeDefined();
      expect(result.option_id).toBeDefined();
    });
  });
});
