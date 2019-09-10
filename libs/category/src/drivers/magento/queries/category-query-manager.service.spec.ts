import { TestBed } from '@angular/core/testing';

import { DaffMagentoCategoryGraphQlQueryManagerService } from './category-query-manager.service';

describe('DaffMagentoCategoryGraphQlQueryManagerService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: DaffMagentoCategoryGraphQlQueryManagerService = TestBed.get(DaffMagentoCategoryGraphQlQueryManagerService);
        expect(service).toBeTruthy();
    });
});
