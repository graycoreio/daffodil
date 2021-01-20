import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterStateSnapshot, Router } from '@angular/router';
import { of, Observable, throwError } from 'rxjs';
import { cold } from 'jasmine-marbles';

import { DocResolver } from './doc-resolver.service';
import { DaffioDocService } from '../services/docs.service';
import { DaffioDocFactory } from '../../testing/factories/doc.factory';
import { DaffioDocServiceInterface } from '../services/docs-service.interface';
import { DaffioDoc } from '../models/doc';
import { DaffioGuideList } from '../models/guide-list';

describe('DocResolver', () => {
  let resolver: DocResolver<DaffioDoc, DaffioGuideList>;
  let docService: DaffioDocService<DaffioDoc, DaffioGuideList>;
  let router: Router;

  const doc = new DaffioDocFactory().create();
  const stubDocService: DaffioDocServiceInterface<DaffioDoc, DaffioGuideList> = {
    get(path: string): Observable<DaffioDoc> {
      return of(doc);
    },
    getGuideList(){
      return of();
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: DaffioDocService, useValue: stubDocService }
      ]
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
    expect(resolver.resolve(null, { url: 'my/path' } as RouterStateSnapshot)).toBeObservable(expected);
  });

  describe('if the doc doesn\'t exist (the doc service errors)', () => {
    beforeEach(() => {
      spyOn(docService, 'get').and.returnValue(throwError('error'));
      spyOn(router, 'navigate');
    });

    it('should resolve with an empty observable', () => {
      const expected = cold('(|)');
      expect(resolver.resolve(null, { url: 'my/path' } as RouterStateSnapshot)).toBeObservable(expected);
    });

    it('should redirect to the 404 page', () => {
      resolver.resolve(null, { url: 'my/path' } as RouterStateSnapshot).subscribe();
      expect(router.navigate).toHaveBeenCalledWith(['/404']);
    });
  });
});
