import { TestBed } from '@angular/core/testing';

import {
  DaffDocKind,
  DaffDocsNavList,
} from '@daffodil/docs-utils';

import { DaffioDocsIndexService } from './index.service';
import { DAFFIO_DOCS_INDEX_LOADERS } from './loaders.token';

describe('DaffioDocsIndexService', () => {
  let service: DaffioDocsIndexService;
  let packagesLoaderSpy: jasmine.Spy;
  let guidesLoaderSpy: jasmine.Spy;
  const packagesIndex: DaffDocsNavList = {
    id: 'packages',
    title: 'Packages',
    path: '/docs/packages',
    children: [
      {
        id: 'cart',
        title: 'Cart',
        path: '/docs/packages/cart',
        children: [],
      },
    ],
  };

  beforeEach(() => {
    packagesLoaderSpy = jasmine.createSpy('packagesLoader').and.resolveTo({ default: packagesIndex });
    guidesLoaderSpy = jasmine.createSpy('guidesLoader');

    TestBed.configureTestingModule({
      providers: [
        DaffioDocsIndexService,
        {
          provide: DAFFIO_DOCS_INDEX_LOADERS,
          useValue: {
            [DaffDocKind.PACKAGE]: packagesLoaderSpy,
            [DaffDocKind.GUIDE]: guidesLoaderSpy,
          },
        },
      ],
    });

    service = TestBed.inject(DaffioDocsIndexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load the index for the requested kind', (done) => {
    service.getListForKind(DaffDocKind.PACKAGE).subscribe((list) => {
      expect(list).toEqual(packagesIndex);
      expect(packagesLoaderSpy).toHaveBeenCalledWith();
      expect(guidesLoaderSpy).not.toHaveBeenCalled();
      done();
    });
  });
});
