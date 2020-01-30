import { TestBed } from '@angular/core/testing';

import { DaffMagentoAuthGraphQlQueryManagerService } from './auth-query-manager.service';

describe('DaffMagentoAuthGraphQlQueryManagerService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: DaffMagentoAuthGraphQlQueryManagerService = TestBed.get(DaffMagentoAuthGraphQlQueryManagerService);
        expect(service).toBeTruthy();
    });
});
