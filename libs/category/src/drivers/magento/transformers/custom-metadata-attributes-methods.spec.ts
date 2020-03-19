import { TestBed } from '@angular/core/testing';

import { DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';

import { buildCustomMetadataAttribute, addMetadataTypesToAggregates } from './custom-metadata-attributes-methods';
import { DaffCategoryPageConfigurationState } from '../../../models/category-page-configuration-state';
import { MagentoCustomAttributeMetadataResponse } from '../models/custom-attribute-metadata-response';
import { MagentoAggregation } from '../models/aggregation';
import { MagentoGetCategoryAggregationsResponse } from '../models/get-category-aggregations-response';

describe('Custom Metadata Attributes Methods', () => {

  const categoryPageConfigurationStateFactory: DaffCategoryPageConfigurationStateFactory = new DaffCategoryPageConfigurationStateFactory();
  const stubCategoryPageConfigurationState: DaffCategoryPageConfigurationState = categoryPageConfigurationStateFactory.create();
  delete stubCategoryPageConfigurationState.filter_requests;
  delete stubCategoryPageConfigurationState.applied_sort_direction;
  delete stubCategoryPageConfigurationState.applied_sort_option;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

	describe('buildCustomMetadataAttribute', () => {
		
		it('should transform an aggregation into a custom metadata attribute', () => {
			const aggregate: MagentoAggregation = {
				attribute_code: stubCategoryPageConfigurationState.filters[0].name
			};
			const expectedAttribute = {
				attribute_code: aggregate.attribute_code,
				entity_type: '4'
			}

			expect(buildCustomMetadataAttribute(aggregate)).toEqual(expectedAttribute);
		});
	});

  describe('addMetadataTypesToAggregates', () => {
		let initialCategoryResponse: MagentoGetCategoryAggregationsResponse;
		let outputCategoryResponse: MagentoGetCategoryAggregationsResponse;
		let attributeResponse: MagentoCustomAttributeMetadataResponse;

    it('should add the attribute types to the aggregates', () => {
			initialCategoryResponse = {
				products: {
					aggregations: [{
						attribute_code: stubCategoryPageConfigurationState.filters[0].name,
						label: stubCategoryPageConfigurationState.filters[0].label,
						options: [
							{
								value: stubCategoryPageConfigurationState.filters[0].options[0].value,
								count: stubCategoryPageConfigurationState.filters[0].options[0].count,
								label: stubCategoryPageConfigurationState.filters[0].options[0].label
							},
							{
								value: stubCategoryPageConfigurationState.filters[0].options[1].value,
								count: stubCategoryPageConfigurationState.filters[0].options[1].count,
								label: stubCategoryPageConfigurationState.filters[0].options[1].label
							}
						]
					}],
					sort_fields: null
				}
			};
			attributeResponse = {
				customAttributeMetadata: {
					items: [{
						attribute_code: stubCategoryPageConfigurationState.filters[0].name,
						attribute_type: 'int',
						input_type: 'select'
					}]
				}
			}

			outputCategoryResponse = {
				products: {
					aggregations: [{
						attribute_code: stubCategoryPageConfigurationState.filters[0].name,
						label: stubCategoryPageConfigurationState.filters[0].label,
						type: 'select',
						options: [
							{
								value: stubCategoryPageConfigurationState.filters[0].options[0].value,
								count: stubCategoryPageConfigurationState.filters[0].options[0].count,
								label: stubCategoryPageConfigurationState.filters[0].options[0].label
							},
							{
								value: stubCategoryPageConfigurationState.filters[0].options[1].value,
								count: stubCategoryPageConfigurationState.filters[0].options[1].count,
								label: stubCategoryPageConfigurationState.filters[0].options[1].label
							}
						]
					}],
					sort_fields: null,
				}
			}

      expect(addMetadataTypesToAggregates(attributeResponse, initialCategoryResponse)).toEqual(outputCategoryResponse);
		});
  });
});
