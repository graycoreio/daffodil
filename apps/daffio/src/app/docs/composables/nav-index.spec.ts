import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import {
  BehaviorSubject,
  Observable,
  of,
} from 'rxjs';

import { DaffDocsNavList } from '@daffodil/docs-utils';
import { runMarbles } from '@daffodil/jasmine';
import { DaffRouterDataService } from '@daffodil/router';

import { useDaffioNavList } from './nav-index';

describe('useDaffioNavList', () => {
  let dataSpy: BehaviorSubject<any>;
  let list: Observable<DaffDocsNavList>;

  const stubNavList: DaffDocsNavList = {
    id: 'root',
    title: 'Root',
    children: [],
  };

  beforeEach(() => {
    dataSpy = new BehaviorSubject({});

    TestBed.configureTestingModule({
      providers: [
        {
          provide: DaffRouterDataService,
          useValue: jasmine.createSpyObj('DaffRouterDataService', [], { data$: dataSpy }),
        },
        {
          provide: ActivatedRoute,
          useValue: { data: of({}) },
        },
      ],
    });

    list = TestBed.runInInjectionContext(() => useDaffioNavList().list);
  });

  describe('when the merged router data contains an index resolved on an ancestor route', () => {
    it('should emit that index', () => {
      runMarbles(({ expectObservable }) => {
        dataSpy.next({ index: stubNavList });
        expectObservable(list).toBe('a', { a: stubNavList });
      });
    });
  });

  describe('when the merged router data has no index', () => {
    it('should not emit', () => {
      runMarbles(({ expectObservable }) => {
        dataSpy.next({});
        expectObservable(list).toBe('');
      });
    });
  });

  describe('when the router data emits a falsy value', () => {
    it('should not emit', () => {
      runMarbles(({ expectObservable }) => {
        dataSpy.next(null);
        expectObservable(list).toBe('');
      });
    });
  });

  describe('when navigation causes a new index to be resolved', () => {
    const secondNavList: DaffDocsNavList = {
      id: 'second',
      title: 'Second',
      children: [],
    };

    it('should re-emit with the updated index', () => {
      runMarbles(({ expectObservable }) => {
        dataSpy.next({ index: stubNavList });
        dataSpy.next({ index: secondNavList });
        expectObservable(list).toBe('a', { a: secondNavList });
      });
    });
  });
});
