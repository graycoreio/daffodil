import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import {
  BehaviorSubject,
  of,
} from 'rxjs';

import {
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
  DAFF_DOCS_PATH,
  DaffDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DaffioDocsIndexService } from './index.service';
import {
  DaffioAssetFetchService,
  DaffioAssetFetchServiceInterface,
} from '../../core/assets/fetch/service.interface';
import { DaffioRoute } from '../../core/router/route.type';
import { DaffioDocsFactory } from '../testing/factories/docs.factory';
import { mockPackages } from '../testing/factories/packages-list.factory';

describe('DaffioDocsIndexService', () => {
  let service: DaffioDocsIndexService;
  let fetchAssetServiceSpy: jasmine.SpyObj<DaffioAssetFetchServiceInterface>;
  let activatedRouteSpy: BehaviorSubject<ActivatedRoute>;
  let doc: DaffDoc;
  const mockGuideList = mockPackages;

  beforeEach(() => {
    fetchAssetServiceSpy = jasmine.createSpyObj('DaffioAssetFetchService', ['fetch']);
    activatedRouteSpy = new BehaviorSubject(null);

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

  it('should be able to retrieve a list with a kind', (done) => {
    fetchAssetServiceSpy.fetch.and.returnValue(of(mockGuideList));
    activatedRouteSpy.next(<ActivatedRoute>{
      data: of<DaffioRoute['data']>({
        docKind: DaffDocKind.PACKAGE,
      }),
    });

    service.getListForKind(DaffDocKind.PACKAGE).subscribe((guides) => {
      expect(guides).toEqual(mockGuideList);
      expect(fetchAssetServiceSpy.fetch).toHaveBeenCalledWith('/assets/daffio//docs/packages/index.json', `${DAFF_DOCS_PATH}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.PACKAGE]}/index`);
      done();
    });
  });
});
