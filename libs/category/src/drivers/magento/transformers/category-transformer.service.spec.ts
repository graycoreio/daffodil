import { TestBed } from '@angular/core/testing';

import { DaffMagentoCategoryTransformerService } from './category-transformer.service';
import { DaffCategoryFactory } from '@daffodil/category/testing';
import { DaffCategory } from '../../../models/category';
import { CategoryNode } from '../models/category-node';

describe('DaffMagentoCategoryTransformerService', () => {

  let service: DaffMagentoCategoryTransformerService;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const mockCategory: DaffCategory = categoryFactory.create();
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCategoryTransformerService
      ]
    });
    service = TestBed.get(DaffMagentoCategoryTransformerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {
    
    it('should return a DaffCategory', () => {
      const categoryNodeInput: CategoryNode = {
        id: mockCategory.id,
        name: mockCategory.name,
        products: {
          total_count: mockCategory.total_products,
          items: [
            {
              id: parseInt(mockCategory.productIds[0], 10),
              name: 'name',
              sku: 'sku',
              url_key: 'url_key',
              image: null,
              price: null
            }
          ]
        },
        children_count: mockCategory.children_count
      }

      expect(service.transform(categoryNodeInput)).toEqual(mockCategory);
    });
  });
});
