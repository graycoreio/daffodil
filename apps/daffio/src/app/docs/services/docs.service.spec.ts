import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DaffDoc } from '@daffodil/docs-utils';

import { DaffioDocsService } from './docs.service';
import {
  DaffioAssetFetchService,
  DaffioAssetFetchServiceInterface,
} from '../../core/assets/fetch/service.interface';
import { DaffioDocsFactory } from '../testing/factories/docs.factory';
import { mockPackages } from '../testing/factories/packages-list.factory';

describe('DaffioDocsService', () => {
  let service: DaffioDocsService;
  let fetchAssetServiceSpy: jasmine.SpyObj<DaffioAssetFetchServiceInterface>;
  let doc: DaffDoc;
  const mockGuideList = mockPackages;

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

    service = TestBed.inject(DaffioDocsService);

    doc = TestBed.inject(DaffioDocsFactory).create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to retrieve a doc', (done) => {
    fetchAssetServiceSpy.fetch.and.returnValue(of(doc));

    service.get('docs/my/path').subscribe((apiDoc) => {
      expect(apiDoc).toEqual(doc);
      expect(fetchAssetServiceSpy.fetch).toHaveBeenCalledWith('/assets/daffio//docs/my/path.json');
      done();
    });
  });
});
