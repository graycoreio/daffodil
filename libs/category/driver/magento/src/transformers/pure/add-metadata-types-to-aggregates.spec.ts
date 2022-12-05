import { TestBed } from '@angular/core/testing';

import { MagentoGetCategoryAndProductsResponse } from '@daffodil/category/driver/magento';
import { MagentoProductGetFilterTypesResponse } from '@daffodil/product/driver/magento';

import { addMetadataTypesToProductsResponse } from './add-metadata-types-to-aggregates';

describe('@daffodil/category/driver/magento | Custom Metadata Attributes Methods', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  describe('addMetadataTypesToAggregates', () => {
    let initialCategoryResponse: MagentoGetCategoryAndProductsResponse;
    let outputCategoryResponse: MagentoGetCategoryAndProductsResponse;
    let attributeResponse: MagentoProductGetFilterTypesResponse;

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

      expect(addMetadataTypesToProductsResponse(attributeResponse, initialCategoryResponse)).toEqual(outputCategoryResponse);
    });
  });
});
