import { TestBed } from '@angular/core/testing';
import {
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { cold } from 'jasmine-marbles';
import {
  of,
  Observable,
  throwError,
} from 'rxjs';

import { DocsResolver } from './docs-resolver.service';
import { DaffioDoc } from '../models/doc';
import { DaffioDocList } from '../models/doc-list';
import { DaffioDocsServiceInterface } from '../services/docs-service.interface';
import { DaffioDocsService } from '../services/docs.service';
import { DaffioDocsFactory } from '../testing/factories/docs.factory';

describe('DocsResolver', () => {
  let resolver: DocsResolver<DaffioDoc, DaffioDocList>;
  let docsService: DaffioDocsService<DaffioDoc, DaffioDocList>;
  let router: Router;

  const doc = new DaffioDocsFactory().create();
  const stubDocService: DaffioDocsServiceInterface<DaffioDoc, DaffioDocList> = {
    get: (path: string): Observable<DaffioDoc> => of(doc),
    getPackageList: () => of(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        { provide: DaffioDocsService, useValue: stubDocService },
      ],
    });

    router = TestBed.inject(Router);
    docsService = TestBed.inject(DaffioDocsService);
    resolver = TestBed.inject(DocsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should complete with a doc', () => {
    const expected = cold('(a|)', { a: doc });
    expect(resolver.resolve(null, <RouterStateSnapshot>{ url: 'my/path' })).toBeObservable(expected);
  });

  describe('if the doc doesn\'t exist (the doc service errors)', () => {
    beforeEach(() => {
      spyOn(docsService, 'get').and.returnValue(throwError('error'));
      spyOn(router, 'navigate');
    });

    it('should resolve with an empty observable', () => {
      const expected = cold('(|)');
      expect(resolver.resolve(null, <RouterStateSnapshot>{ url: 'my/path' })).toBeObservable(expected);
    });

    it('should redirect to the 404 page', () => {
      resolver.resolve(null, <RouterStateSnapshot>{ url: 'my/path' }).subscribe();
      expect(router.navigate).toHaveBeenCalledWith(['/404'], { skipLocationChange: true });
    });
  });
});
