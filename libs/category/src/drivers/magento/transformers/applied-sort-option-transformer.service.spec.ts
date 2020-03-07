import { TestBed } from '@angular/core/testing';

import { DaffMagentoAppliedSortOptionTransformService } from './applied-sort-option-transformer.service';
import { MagentoSortFieldAction, MagentoSortDirectionEnum } from '../models/requests/sort';
import { DaffSortDirectionEnum } from '../../../models/requests/category-request';

describe('DaffMagentoAppliedSortOptionTransformService', () => {

  let service: DaffMagentoAppliedSortOptionTransformService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoAppliedSortOptionTransformService
      ]
    });
    service = TestBed.get(DaffMagentoAppliedSortOptionTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {
    
    it('should return a MagentoSortOptionAction', () => {
			const expectedReturn: MagentoSortFieldAction = {
				sortOption: MagentoSortDirectionEnum.Ascending
			}
      expect(service.transform('sortOption', DaffSortDirectionEnum.Ascending)).toEqual(expectedReturn);
    });
  });
});
