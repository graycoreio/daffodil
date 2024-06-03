import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DaffioApiService } from './api.service';
import {
  DaffioAssetFetchServiceInterface,
  DaffioAssetFetchService,
} from '../../../core/assets/fetch/service.interface';

describe('DaffioApiService', () => {
  let fetchAssetServiceSpy: jasmine.SpyObj<DaffioAssetFetchServiceInterface>;
  let service: DaffioApiService;

  beforeEach(() => {
    fetchAssetServiceSpy = jasmine.createSpyObj('DaffioAssetFetchService', ['fetch']);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: DaffioAssetFetchService,
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
