import { TestBed } from '@angular/core/testing';

import {
  MagentoGetCategoryFilterTypesResponse,
  MagentoGetCategoryAndProductsResponse,
} from '@daffodil/category/driver/magento';

import { addMetadataTypesToAggregates } from './add-metadata-types-to-aggregates';

describe('Custom Metadata Attributes Methods', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  describe('addMetadataTypesToAggregates', () => {
    let initialCategoryResponse: MagentoGetCategoryAndProductsResponse;
    let outputCategoryResponse: MagentoGetCategoryAndProductsResponse;
    let attributeResponse: MagentoGetCategoryFilterTypesResponse;

    it('should add the attribute types to the aggregates', () => {
      initialCategoryResponse = {
        categoryList: [],
        products: {
          aggregations: [],
          sort_fields: null,
          items: [],
          page_info: null,
          total_count: 0,
        },
      };
      attributeResponse = {
        __type: {
          inputFields: [],
        },
      };;

      outputCategoryResponse = {
        categoryList: [],
        products: {
          aggregations: [],
          sort_fields: null,
          items: [],
          page_info: null,
          total_count: 0,
        },
      };

      expect(addMetadataTypesToAggregates(attributeResponse, initialCategoryResponse)).toEqual(outputCategoryResponse);
    });
  });
});
