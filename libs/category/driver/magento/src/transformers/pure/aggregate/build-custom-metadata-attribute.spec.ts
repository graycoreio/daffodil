import { TestBed } from '@angular/core/testing';

import { DaffCategoryPageConfigurationState } from '@daffodil/category';
import { MagentoAggregation } from '@daffodil/category/driver/magento';
import { DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';

import { buildCustomMetadataAttribute } from './build-custom-metadata-attribute';

describe('Custom Metadata Attributes Methods', () => {

  const categoryPageMetadataFactory: DaffCategoryPageConfigurationStateFactory = new DaffCategoryPageConfigurationStateFactory();
  const stubCategoryPageConfigurationState: DaffCategoryPageConfigurationState = categoryPageMetadataFactory.create();
  delete stubCategoryPageConfigurationState.filter_requests;
  delete stubCategoryPageConfigurationState.applied_sort_direction;
  delete stubCategoryPageConfigurationState.applied_sort_option;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  describe('buildCustomMetadataAttribute', () => {

    it('should transform an aggregation into a custom metadata attribute', () => {
      const aggregate: MagentoAggregation = {
        attribute_code: stubCategoryPageConfigurationState.filters[0].name,
      };
      const expectedAttribute = {
        attribute_code: aggregate.attribute_code,
        entity_type: '4',
      };

      expect(buildCustomMetadataAttribute(aggregate)).toEqual(expectedAttribute);
    });
  });
});
