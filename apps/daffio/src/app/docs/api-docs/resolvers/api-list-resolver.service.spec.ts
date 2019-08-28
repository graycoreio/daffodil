import { TestBed } from '@angular/core/testing';

import { DaffioApiListResolver } from './api-list-resolver.service';
import { Observable, of, throwError } from 'rxjs';
import { DaffioApiDocReference } from '../models/api-doc-reference';
import { DaffioApiDocServiceInterface } from '../services/api-doc-service.interface';
import { cold } from 'jasmine-marbles';
import { DaffioApiDocService } from '../services/api-doc.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('DaffioApiListResolver', () => {  
  let resolver: DaffioApiListResolver;
  let docService: DaffioApiDocService;
  let router: Router;

  const stubApiDocService: DaffioApiDocServiceInterface = {
    list(): Observable<DaffioApiDocReference[]> {
      return of([]);
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: DaffioApiDocService, useValue: stubApiDocService }
      ]
    });

    router = TestBed.get(Router);
    docService = TestBed.get(DaffioApiDocService);
    resolver = TestBed.get(DaffioApiListResolver);
  });

  it('should be created', () => {
    const service: DaffioApiListResolver = TestBed.get(DaffioApiListResolver);
    expect(service).toBeTruthy();
  });

  it('should complete with a doc', () => {
    const expected = cold('(a|)', { a: [] });
    expect(resolver.resolve()).toBeObservable(expected);
  });

  describe('if the doc doesn\'t exist (the doc service errors)', () => {    
    beforeEach(() => {
      spyOn(docService, 'list').and.returnValue(throwError('error'));
      spyOn(router, 'navigate');
    });

    it('should resolve with an empty observable', () => {
      const expected = cold('(|)');
      expect(resolver.resolve()).toBeObservable(expected);
    });

    it('should redirect to the 404 page', () => {
      resolver.resolve().subscribe();
      expect(router.navigate).toHaveBeenCalledWith(['/404']);
    });
  });
});
