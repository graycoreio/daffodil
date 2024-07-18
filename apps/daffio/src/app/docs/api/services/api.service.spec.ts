import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import {
  DaffDocsAssetFetchServiceInterface,
  DaffDocsAssetFetchService,
} from '@daffodil/documentation';

import { DaffioApiService } from './api.service';
import { provideBrowserDocsPath } from '../../services/docs-path-browser';

describe('DaffioApiService', () => {
  let fetchAssetServiceSpy: jasmine.SpyObj<DaffDocsAssetFetchServiceInterface>;
  let service: DaffioApiService;

  beforeEach(() => {
    fetchAssetServiceSpy = jasmine.createSpyObj('DaffDocsAssetFetchService', ['fetch']);

    TestBed.configureTestingModule({
      providers: [
        provideBrowserDocsPath(),
        {
          provide: DaffDocsAssetFetchService,
          useValue: fetchAssetServiceSpy,
        },
      ],
    });

    service = TestBed.inject(DaffioApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getApiList', () => {

    it('should make a get request', (done) => {
      fetchAssetServiceSpy.fetch.and.returnValue(of([]));

      service.list().subscribe((docsList) => {
        expect(docsList).toEqual([]);
        expect(fetchAssetServiceSpy.fetch).toHaveBeenCalledWith('/assets/daffio/docs/api/api-list.json');
        done();
      });
    });
  });
});
