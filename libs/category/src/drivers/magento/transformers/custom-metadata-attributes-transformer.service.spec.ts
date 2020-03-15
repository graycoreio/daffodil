import { TestBed } from '@angular/core/testing';

import { DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';

import { DaffMagentoCustomMetadataAttributeTransformerService } from './custom-metadata-attributes-transformer.service';
import { DaffCategoryPageConfigurationState } from '../../../models/category-page-configuration-state';
import { MagentoCompleteCategoryResponse } from '../models/complete-category-response';
import { MagentoCustomAttributeMetadataResponse } from '../models/custom-attribute-metadata-response';
import { MagentoAggregation } from '../models/aggregation';

describe('DaffMagentoCustomMetadataAttributeTransformerService', () => {

  let service: DaffMagentoCustomMetadataAttributeTransformerService;
  const categoryPageConfigurationStateFactory: DaffCategoryPageConfigurationStateFactory = new DaffCategoryPageConfigurationStateFactory();
  const stubCategoryPageConfigurationState: DaffCategoryPageConfigurationState = categoryPageConfigurationStateFactory.create();
  delete stubCategoryPageConfigurationState.applied_filters;
  delete stubCategoryPageConfigurationState.applied_sort_direction;
  delete stubCategoryPageConfigurationState.applied_sort_option;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCustomMetadataAttributeTransformerService
      ]
    });
    service = TestBed.get(DaffMagentoCustomMetadataAttributeTransformerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

	describe('transform', () => {
		
		it('should transform an aggregation into a custom metadata attribute', () => {
			const aggregate: MagentoAggregation = {
				attribute_code: stubCategoryPageConfigurationState.filters[0].name
			};
			const expectedAttribute = {
				attribute_code: aggregate.attribute_code,
				entity_type: '4'
			}

			expect(service.transform(aggregate)).toEqual(expectedAttribute);
		});
	});

  describe('addTypesToAggregates', () => {
		let initialCategoryResponse: MagentoCompleteCategoryResponse;
		let outputCategoryResponse: MagentoCompleteCategoryResponse;
		let attributeResponse: MagentoCustomAttributeMetadataResponse;

    it('should add the attribute types to the aggregates', () => {
			initialCategoryResponse = {
				category: null,
				page_info: null,
				products: null,
				sort_fields: null,
				total_count: null,
				aggregates: [{
					attribute_code: stubCategoryPageConfigurationState.filters[0].name,
					count: stubCategoryPageConfigurationState.filters[0].items_count,
					label: stubCategoryPageConfigurationState.filters[0].label,
					options: [
						{
							value: stubCategoryPageConfigurationState.filters[0].options[0].value,
							count: stubCategoryPageConfigurationState.filters[0].options[0].items_count,
							label: stubCategoryPageConfigurationState.filters[0].options[0].label
						},
						{
							value: stubCategoryPageConfigurationState.filters[0].options[1].value,
							count: stubCategoryPageConfigurationState.filters[0].options[1].items_count,
							label: stubCategoryPageConfigurationState.filters[0].options[1].label
						}
					]
				}]
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
				category: null,
				aggregates: [{
					attribute_code: stubCategoryPageConfigurationState.filters[0].name,
					count: stubCategoryPageConfigurationState.filters[0].items_count,
					label: stubCategoryPageConfigurationState.filters[0].label,
					type: 'select',
					options: [
						{
							value: stubCategoryPageConfigurationState.filters[0].options[0].value,
							count: stubCategoryPageConfigurationState.filters[0].options[0].items_count,
							label: stubCategoryPageConfigurationState.filters[0].options[0].label
						},
						{
							value: stubCategoryPageConfigurationState.filters[0].options[1].value,
							count: stubCategoryPageConfigurationState.filters[0].options[1].items_count,
							label: stubCategoryPageConfigurationState.filters[0].options[1].label
						}
					]
				}],
				page_info: null,
				products: null,
				sort_fields: null,
				total_count: null
			}

      expect(service.addTypesToAggregates(attributeResponse, initialCategoryResponse)).toEqual(outputCategoryResponse);
		});
  });
});
