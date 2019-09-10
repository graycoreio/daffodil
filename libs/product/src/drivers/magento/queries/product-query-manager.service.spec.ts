import { TestBed } from '@angular/core/testing';

import { DaffMagentoProductGraphQlQueryManagerService } from './product-query-manager.service';

describe('DaffMagentoProductTransformerService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: DaffMagentoProductGraphQlQueryManagerService = TestBed.get(DaffMagentoProductGraphQlQueryManagerService);
        expect(service).toBeTruthy();
    });
});
