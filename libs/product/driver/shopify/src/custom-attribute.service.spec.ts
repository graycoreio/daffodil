import { TestBed } from '@angular/core/testing';

import { DaffShopifyProductCustomAttributeService } from './custom-attribute.service';

describe('Driver | Shopify | Product | ProductCustomAttributeService', () => {
  let service: DaffShopifyProductCustomAttributeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffShopifyProductCustomAttributeService,
      ],
    });

    service = TestBed.inject(DaffShopifyProductCustomAttributeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list', () => {
    it('should return an empty list, as Shopify has no concept of a catalog-wide list of custom attribute definitions', () => {
      service.list().subscribe(customAttributes => {
        expect(customAttributes).toEqual([]);
      });
    });
  });
});
