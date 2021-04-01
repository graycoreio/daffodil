import { TestBed } from '@angular/core/testing';

import {
  MagentoGetCategoryAggregationsResponse,
  MagentoCustomAttributeMetadataResponse,
} from '@daffodil/category/driver/magento';

import { addMetadataTypesToAggregates } from './add-metadata-types-to-aggregates';

describe('Custom Metadata Attributes Methods', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  describe('addMetadataTypesToAggregates', () => {
    let initialCategoryResponse: MagentoGetCategoryAggregationsResponse;
    let outputCategoryResponse: MagentoGetCategoryAggregationsResponse;
    let attributeResponse: MagentoCustomAttributeMetadataResponse;

    it('should add the attribute types to the aggregates', () => {
      initialCategoryResponse = {
        products: {
          aggregations: [],
          sort_fields: null,
        },
      };
      attributeResponse = {
        customAttributeMetadata: {
          items: [],
        },
      };

      outputCategoryResponse = {
        products: {
          aggregations: [],
          sort_fields: null,
        },
      };

      expect(addMetadataTypesToAggregates(attributeResponse, initialCategoryResponse)).toEqual(outputCategoryResponse);
    });
  });
});
