import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { cold } from 'jasmine-marbles';
import {
  Observable,
  of,
  throwError,
} from 'rxjs';

import { DaffioApiReference } from '../models/api-reference';
import { DaffioApiServiceInterface } from '../services/api-service.interface';
import { DaffioApiService } from '../services/api.service';
import { DaffioApiListResolver } from './api-list-resolver.service';

describe('DaffioApiListResolver', () => {
  let resolver: DaffioApiListResolver;
  let apiService: DaffioApiService;
  let router: Router;

  const stubApiService: DaffioApiServiceInterface = {
    list: (): Observable<DaffioApiReference[]> => of([]),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        { provide: DaffioApiService, useValue: stubApiService },
      ],
    });

    router = TestBed.inject(Router);
    apiService = TestBed.inject(DaffioApiService);
    resolver = TestBed.inject(DaffioApiListResolver);
  });

  it('should be created', () => {
    const service: DaffioApiListResolver = TestBed.inject(DaffioApiListResolver);
    expect(service).toBeTruthy();
  });

  it('should complete with a doc', () => {
    const expected = cold('(a|)', { a: []});
    expect(resolver.resolve()).toBeObservable(expected);
  });

  describe('if the api doesn\'t exist (the api service errors)', () => {
    beforeEach(() => {
      spyOn(apiService, 'list').and.returnValue(throwError('error'));
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
