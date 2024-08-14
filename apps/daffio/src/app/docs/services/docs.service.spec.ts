import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DaffioDocsService } from './docs.service';
import {
  DaffioAssetFetchService,
  DaffioAssetFetchServiceInterface,
} from '../../core/assets/fetch/service.interface';
import { DaffioDoc } from '../models/doc';
import { DaffioDocList } from '../models/doc-list';
import { DaffioDocsFactory } from '../testing/factories/docs.factory';
import { mockPackages } from '../testing/factories/packages-list.factory';

describe('DaffioDocsService', () => {
  let service: DaffioDocsService<DaffioDoc, DaffioDocList>;
  let fetchAssetServiceSpy: jasmine.SpyObj<DaffioAssetFetchServiceInterface>;
  let doc: DaffioDoc;
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

  it('should be able to retrieve a guide list', (done) => {
    fetchAssetServiceSpy.fetch.and.returnValue(of(mockGuideList));

    service.getPackageList().subscribe((guides) => {
      expect(guides).toEqual(mockGuideList);
      expect(fetchAssetServiceSpy.fetch).toHaveBeenCalledWith('/assets/daffio//docs/packages/index.json');
      done();
    });
  });
});
