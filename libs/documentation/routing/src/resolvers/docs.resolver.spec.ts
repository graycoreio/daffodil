import {
  Injector,
  runInInjectionContext,
} from '@angular/core';
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

import {
  DaffDoc,
  DaffDocsList,
} from '@daffodil/docs-utils';
import {
  DaffDocsAssetService,
  DaffDocsAssetServiceInterface,
} from '@daffodil/documentation';
import { DaffDocsFactory } from '@daffodil/documentation/testing';

import {
  daffDocsResolve,
  daffDocsResolve as resolver,
} from './docs.resolver';

describe('@daffodil/documentation | daffDocsResolve', () => {
  let docsService: DaffDocsAssetService<DaffDoc, DaffDocsList>;
  let router: Router;

  const doc = new DaffDocsFactory().create();
  const stubDocService: DaffDocsAssetServiceInterface<DaffDoc, DaffDocsList> = {
    get: (path: string): Observable<DaffDoc> => of(doc),
    getPackageList: () => of(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        { provide: DaffDocsAssetService, useValue: stubDocService },
      ],
    });

    router = TestBed.inject(Router);
    docsService = TestBed.inject(DaffDocsAssetService);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should complete with a doc', () => {
    const expected = cold('(a|)', { a: doc });
    expect(runInInjectionContext(TestBed.inject(Injector), () => resolver(null, <RouterStateSnapshot>{ url: 'my/path' }))).toBeObservable(expected);
  });

  describe('if the doc doesn\'t exist (the doc service errors)', () => {
    beforeEach(() => {
      spyOn(docsService, 'get').and.returnValue(throwError('error'));
      spyOn(router, 'navigate');
    });

    it('should resolve with an empty observable', () => {
      const expected = cold('(|)');
      expect(runInInjectionContext(TestBed.inject(Injector), () => resolver(null, <RouterStateSnapshot>{ url: 'my/path' }))).toBeObservable(expected);
    });

    it('should redirect to the 404 page', () => {
      runInInjectionContext(TestBed.inject(Injector), () => resolver(null, <RouterStateSnapshot>{ url: 'my/path' })).subscribe();
      expect(router.navigate).toHaveBeenCalledWith(['/404'], { skipLocationChange: true });
    });
  });
});
