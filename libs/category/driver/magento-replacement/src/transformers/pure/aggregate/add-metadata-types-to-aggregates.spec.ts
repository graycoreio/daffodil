import { TestBed } from '@angular/core/testing';

import {
  MagentoGetCategoryAggregationsResponse,
  MagentoGetCategoryFilterTypesResponse,
} from '@daffodil/category/driver/magento';

import { addMetadataTypesToAggregates } from './add-metadata-types-to-aggregates';

describe('Custom Metadata Attributes Methods', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  describe('addMetadataTypesToAggregates', () => {
    let initialCategoryResponse: MagentoGetCategoryAggregationsResponse;
    let outputCategoryResponse: MagentoGetCategoryAggregationsResponse;
    let attributeResponse: MagentoGetCategoryFilterTypesResponse;

    it('should add the attribute types to the aggregates', () => {
      initialCategoryResponse = {
        products: {
          aggregations: [],
          sort_fields: null,
        },
      };
      attributeResponse = {
        __type: {
          inputFields: [],
        },
      };;

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
