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

import { DaffioDocFactory } from '../../testing/factories/doc.factory';
import { DaffioDoc } from '../models/doc';
import { DaffioGuideList } from '../models/guide-list';
import { DaffioDocServiceInterface } from '../services/docs-service.interface';
import { DaffioDocService } from '../services/docs.service';
import { DocResolver } from './doc-resolver.service';

describe('DocResolver', () => {
  let resolver: DocResolver<DaffioDoc, DaffioGuideList>;
  let docService: DaffioDocService<DaffioDoc, DaffioGuideList>;
  let router: Router;

  const doc = new DaffioDocFactory().create();
  const stubDocService: DaffioDocServiceInterface<DaffioDoc, DaffioGuideList> = {
    get: (path: string): Observable<DaffioDoc> => of(doc),
    getGuideList: () => of(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        { provide: DaffioDocService, useValue: stubDocService },
      ],
    });

    router = TestBed.inject(Router);
    docService = TestBed.inject(DaffioDocService);
    resolver = TestBed.inject(DocResolver);
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
      spyOn(docService, 'get').and.returnValue(throwError('error'));
      spyOn(router, 'navigate');
    });

    it('should resolve with an empty observable', () => {
      const expected = cold('(|)');
      expect(resolver.resolve(null, <RouterStateSnapshot>{ url: 'my/path' })).toBeObservable(expected);
    });

    it('should redirect to the 404 page', () => {
      resolver.resolve(null, <RouterStateSnapshot>{ url: 'my/path' }).subscribe();
      expect(router.navigate).toHaveBeenCalledWith(['/404']);
    });
  });
});
