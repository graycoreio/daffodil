import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DaffDoc } from '@daffodil/docs-utils';

import { DaffioDocsDesignIndexService } from './index.service';
import {
  DaffioAssetFetchServiceInterface,
  DaffioAssetFetchService,
} from '../../../core/assets/fetch/service.interface';
import { DaffioDocsFactory } from '../../testing/factories/docs.factory';
import { mockPackages } from '../../testing/factories/packages-list.factory';

describe('DaffioDocsDesignIndexService', () => {
  let service: DaffioDocsDesignIndexService;
  let fetchAssetServiceSpy: jasmine.SpyObj<DaffioAssetFetchServiceInterface>;
  let doc: DaffDoc;
  const mockGuideList = mockPackages;

  beforeEach(() => {
    fetchAssetServiceSpy = jasmine.createSpyObj('DaffioAssetFetchService', ['fetch']);

    TestBed.configureTestingModule({
      providers: [
        DaffioDocsDesignIndexService,
        {
          provide: DaffioAssetFetchService,
          useValue: fetchAssetServiceSpy,
        },
      ],
    });

    service = TestBed.inject(DaffioDocsDesignIndexService);

    doc = TestBed.inject(DaffioDocsFactory).create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to retrieve a list', (done) => {
    fetchAssetServiceSpy.fetch.and.returnValue(of(mockGuideList));

    service.getList().subscribe((guides) => {
      expect(guides).toEqual(mockGuideList);
      expect(fetchAssetServiceSpy.fetch).toHaveBeenCalledWith('/assets/daffio//docs/design/index.json');
      done();
    });
  });
});
