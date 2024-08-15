import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DaffDocKind } from '@daffodil/docs-utils';

import { DaffioDocsIndexService } from './index.service';
import {
  DaffioAssetFetchService,
  DaffioAssetFetchServiceInterface,
} from '../../core/assets/fetch/service.interface';
import { DaffioDoc } from '../models/doc';
import { DaffioDocsFactory } from '../testing/factories/docs.factory';
import { mockPackages } from '../testing/factories/packages-list.factory';

describe('DaffioDocsIndexService', () => {
  let service: DaffioDocsIndexService;
  let fetchAssetServiceSpy: jasmine.SpyObj<DaffioAssetFetchServiceInterface>;
  let doc: DaffioDoc;
  const mockGuideList = mockPackages;

  beforeEach(() => {
    fetchAssetServiceSpy = jasmine.createSpyObj('DaffioAssetFetchService', ['fetch']);

    TestBed.configureTestingModule({
      providers: [
        DaffioDocsIndexService,
        {
          provide: DaffioAssetFetchService,
          useValue: fetchAssetServiceSpy,
        },
      ],
    });

    service = TestBed.inject(DaffioDocsIndexService);

    doc = TestBed.inject(DaffioDocsFactory).create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to retrieve a list', (done) => {
    fetchAssetServiceSpy.fetch.and.returnValue(of(mockGuideList));

    service.getList(DaffDocKind.PACKAGE).subscribe((guides) => {
      expect(guides).toEqual(mockGuideList);
      expect(fetchAssetServiceSpy.fetch).toHaveBeenCalledWith('/assets/daffio//docs/packages/index.json');
      done();
    });
  });
});
