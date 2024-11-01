import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import {
  BehaviorSubject,
  of,
} from 'rxjs';

import {
  DaffDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';
import { DaffRouterActivatedRoute } from '@daffodil/router';

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
        {
          provide: DaffRouterActivatedRoute,
          useValue: jasmine.createSpyObj('DaffioAssetFetchService', [], { route$: activatedRouteSpy }),
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
      expect(fetchAssetServiceSpy.fetch).toHaveBeenCalledWith('/assets/daffio//docs/packages/index.json');
      done();
    });
  });
});
