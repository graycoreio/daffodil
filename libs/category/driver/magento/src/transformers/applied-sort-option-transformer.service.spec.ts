import { TestBed } from '@angular/core/testing';

import {
  MagentoSortFieldAction,
  MagentoSortDirectionEnum,
} from '@daffodil/category/driver/magento';
import { DaffSortDirectionEnum } from '@daffodil/core/state';


import { DaffMagentoAppliedSortOptionTransformService } from './applied-sort-option-transformer.service';

describe('DaffMagentoAppliedSortOptionTransformService', () => {

  let service: DaffMagentoAppliedSortOptionTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoAppliedSortOptionTransformService,
      ],
    });
    service = TestBed.inject(DaffMagentoAppliedSortOptionTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {

    it('should return a MagentoSortOptionAction', () => {
      const expectedReturn: MagentoSortFieldAction = {
        sortOption: MagentoSortDirectionEnum.Ascending,
      };
      expect(service.transform('sortOption', DaffSortDirectionEnum.Ascending)).toEqual(expectedReturn);
    });
  });
});
