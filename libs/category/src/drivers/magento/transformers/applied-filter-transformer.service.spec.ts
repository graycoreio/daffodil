import { TestBed } from '@angular/core/testing';

import { DaffMagentoAppliedFiltersTransformService } from './applied-filter-transformer.service';
import { MagentoCategoryFilters, MagentoCategoryFilterActionEnum } from '../models/requests/filters';
import { DaffCategoryFilterRequest } from '../../../models/requests/filter-request';
import { DaffCategoryFilterType } from '../../../models/category-filter-base';

describe('DaffMagentoAppliedFiltersTransformService', () => {

	let service: DaffMagentoAppliedFiltersTransformService;
	const categoryId = 'id';
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoAppliedFiltersTransformService
      ]
    });
    service = TestBed.get(DaffMagentoAppliedFiltersTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {

		it('should return only a category filter when there are no additional filters', () => {
			const expectedReturn: MagentoCategoryFilters = {
				category_id: {
					eq: 'id'
				}
			};

			expect(service.transform(categoryId, null)).toEqual(expectedReturn);
		});
		
		describe('when the filter type is Range', () => {
			
			it('should transform a format of ##-## into a valid magento FromTo filter', () => {
				const categoryFilterActions: DaffCategoryFilterRequest[] = [
					{
						type: DaffCategoryFilterType.Range,
						name: 'any',
						value: ['30-40']
					}
				];
				const expectedReturn: MagentoCategoryFilters = {
					category_id: {
						eq: 'id'
					},
					any: {
						[MagentoCategoryFilterActionEnum.From]: '30',
						[MagentoCategoryFilterActionEnum.To]: '40'
					}
				};

				expect(service.transform(categoryId, categoryFilterActions)).toEqual(expectedReturn);
			});

			it('should transform a format of *-## into a valid magento FromTo filter', () => {
				const categoryFilterActions: DaffCategoryFilterRequest[] = [
					{
						type: DaffCategoryFilterType.Range,
						name: 'any',
						value: ['*-30']
					}
				];
				const expectedReturn: MagentoCategoryFilters = {
					category_id: {
						eq: 'id'
					},
					any: {
						[MagentoCategoryFilterActionEnum.To]: '30'
					}
				};

				expect(service.transform(categoryId, categoryFilterActions)).toEqual(expectedReturn);
			});

			it('should transform a format of ##-* into a valid magento FromTo filter', () => {
				const categoryFilterActions: DaffCategoryFilterRequest[] = [
					{
						type: DaffCategoryFilterType.Range,
						name: 'any',
						value: ['30-*']
					}
				];
				const expectedReturn: MagentoCategoryFilters = {
					category_id: {
						eq: 'id'
					},
					any: {
						[MagentoCategoryFilterActionEnum.From]: '30'
					}
				};

				expect(service.transform(categoryId, categoryFilterActions)).toEqual(expectedReturn);
			});
		});

		describe('when the filter type is not Range', () => {
			
			it('should transform an array of DaffCategoryFilterRequest into a MagentoCategoryFilters', () => {
				const categoryFilterActions: DaffCategoryFilterRequest[] = [
					{
						type: DaffCategoryFilterType.Equal,
						name: 'name',
						value: ['value']
					},
					{
						type: DaffCategoryFilterType.Equal,
						name: 'name2',
						value: ['value2']
					}
				]
				const expectedReturn: MagentoCategoryFilters = {
					category_id: {
						eq: 'id'
					},
					name: {
						[MagentoCategoryFilterActionEnum.In]: ['value']
					},
					name2: {
						[MagentoCategoryFilterActionEnum.In]: ['value2']
					}
				}
				expect(service.transform(categoryId, categoryFilterActions)).toEqual(expectedReturn);
			});
		});
  });
});
