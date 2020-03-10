import { TestBed } from '@angular/core/testing';

import { DaffMagentoAppliedFiltersTransformService } from './applied-filter-transformer.service';
import { MagentoCategoryFilters, MagentoCategoryFilterActionEnum } from '../models/requests/filters';
import { DaffCategoryFilterAction, DaffCategoryFilterActionEnum } from '../../../models/requests/filter-action';

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
		
		describe('when the filter action is FromTo', () => {
			
			it('should transform into a valid magento FromTo filter', () => {
				const categoryFilterActions: DaffCategoryFilterAction[] = [
					{
						action: DaffCategoryFilterActionEnum.FromTo,
						name: 'any',
						value: '30-40'
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
		});

		describe('when the filter action is not FromTo', () => {
			
			it('should transform an array of DaffCategoryFilterAction into a MagentoCategoryFilters', () => {
				const categoryFilterActions: DaffCategoryFilterAction[] = [
					{
						action: DaffCategoryFilterActionEnum.Equal,
						name: 'name',
						value: 'value'
					},
					{
						action: DaffCategoryFilterActionEnum.Equal,
						name: 'name2',
						value: 'value2'
					}
				]
				const expectedReturn: MagentoCategoryFilters = {
					category_id: {
						eq: 'id'
					},
					name: {
						[MagentoCategoryFilterActionEnum.Equal]: 'value'
					},
					name2: {
						[MagentoCategoryFilterActionEnum.Equal]: 'value2'
					}
				}
				expect(service.transform(categoryId, categoryFilterActions)).toEqual(expectedReturn);
			});
		});
  });
});
