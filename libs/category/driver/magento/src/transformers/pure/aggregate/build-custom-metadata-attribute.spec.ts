import { TestBed } from '@angular/core/testing';

import { DaffCategoryPageMetadata } from '@daffodil/category';
import { MagentoAggregation } from '@daffodil/category/driver/magento';
import { DaffCategoryPageMetadataFactory } from '@daffodil/category/testing';

import { buildCustomMetadataAttribute } from './build-custom-metadata-attribute';

xdescribe('Custom Metadata Attributes Methods', () => {

  const categoryPageMetadataFactory: DaffCategoryPageMetadataFactory = new DaffCategoryPageMetadataFactory();
  const stubCategoryPageMetadata: DaffCategoryPageMetadata = categoryPageMetadataFactory.create();
  delete stubCategoryPageMetadata.filters;
  delete stubCategoryPageMetadata.applied_sort_direction;
  delete stubCategoryPageMetadata.applied_sort_option;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  describe('buildCustomMetadataAttribute', () => {

    it('should transform an aggregation into a custom metadata attribute', () => {
      const aggregate: MagentoAggregation = {
        attribute_code: stubCategoryPageMetadata.filters[0].name,
      };
      const expectedAttribute = {
        attribute_code: aggregate.attribute_code,
        entity_type: '4',
      };

      expect(buildCustomMetadataAttribute(aggregate)).toEqual(expectedAttribute);
    });
  });
});
