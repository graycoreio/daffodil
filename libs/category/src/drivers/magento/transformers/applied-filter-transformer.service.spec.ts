import { TestBed } from '@angular/core/testing';

import { DaffMagentoAppliedFiltersTransformService } from './applied-filter-transformer.service';
import { MagentoCategoryFilters } from '../models/requests/filters';
import { DaffCategoryFilterAction } from '../../../models/requests/filter-action';

describe('DaffMagentoAppliedFiltersTransformService', () => {

	let service: DaffMagentoAppliedFiltersTransformService;
	const categoryId = 'id';
	const categoryFilterActions: DaffCategoryFilterAction[] = [
		{
			action: 'action',
			name: 'name',
			value: 'value'
		},
		{
			action: 'action2',
			name: 'name2',
			value: 'value2'
		}
	]
  
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
    
    it('should transform an array of DaffCategoryFilterAction into a MagentoCategoryFilters', () => {
			const expectedReturn: MagentoCategoryFilters = {
				category_id: {
					eq: 'id'
				},
				name: {
					action: 'value'
				},
				name2: {
					action2: 'value2'
				}
			}
      expect(service.transform(categoryId, categoryFilterActions)).toEqual(expectedReturn);
    });
  });
});
