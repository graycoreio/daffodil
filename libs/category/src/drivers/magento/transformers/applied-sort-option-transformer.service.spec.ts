import { TestBed } from '@angular/core/testing';

import { DaffMagentoAppliedSortOptionTransformService } from './applied-sort-option-transformer.service';
import { MagentoSortFieldAction } from '../models/outputs/sort';

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
				sortOption: 'ASCE'
			}
      expect(service.transform('sortOption', 'ASCE')).toEqual(expectedReturn);
    });
  });
});
