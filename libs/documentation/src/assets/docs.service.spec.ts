import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import {
  DaffDoc,
  DaffDocsList,
} from '@daffodil/docs-utils';
import {
  DaffDocsFactory,
  mockDaffDocsPackages,
} from '@daffodil/documentation/testing';

import { DaffDocsAssetService } from './docs.service';
import {
  DaffDocsAssetFetchService,
  DaffDocsAssetFetchServiceInterface,
} from './fetch/service.interface';

describe('@daffodil/documentation | DaffDocsAssetService', () => {
  let service: DaffDocsAssetService<DaffDoc, DaffDocsList>;
  let fetchAssetServiceSpy: jasmine.SpyObj<DaffDocsAssetFetchServiceInterface>;
  let doc: DaffDoc;
  const mockGuideList = mockDaffDocsPackages;

  beforeEach(() => {
    fetchAssetServiceSpy = jasmine.createSpyObj('DaffDocsAssetFetchService', ['fetch']);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: DaffDocsAssetFetchService,
          useValue: fetchAssetServiceSpy,
        },
      ],
    });

    service = TestBed.inject(DaffDocsAssetService);

    doc = TestBed.inject(DaffDocsFactory).create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to retrieve a doc', (done) => {
    fetchAssetServiceSpy.fetch.and.returnValue(of(doc));

    service.get('docs/my/path').subscribe((apiDoc) => {
      expect(apiDoc).toEqual(doc);
      expect(fetchAssetServiceSpy.fetch).toHaveBeenCalledWith('/docs/my/path.json');
      done();
    });
  });

  it('should be able to retrieve a guide list', (done) => {
    fetchAssetServiceSpy.fetch.and.returnValue(of(mockGuideList));

    service.getPackageList().subscribe((guides) => {
      expect(guides).toEqual(mockGuideList);
      expect(fetchAssetServiceSpy.fetch).toHaveBeenCalledWith('/docs/packages/index.json');
      done();
    });
  });
});
