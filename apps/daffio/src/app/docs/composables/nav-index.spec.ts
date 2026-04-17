import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import {
  BehaviorSubject,
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { DaffDocsNavList } from '@daffodil/docs-utils';
import { DaffRouterDataService } from '@daffodil/router';

import { useDaffioNavList } from './nav-index';

describe('useDaffioNavList', () => {
  let scheduler: TestScheduler;
  let dataSpy: BehaviorSubject<any>;
  let list: Observable<DaffDocsNavList>;

  const stubNavList: DaffDocsNavList = {
    id: 'root',
    title: 'Root',
    children: [],
  };

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
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
      scheduler.run(({ expectObservable }) => {
        dataSpy.next({ index: stubNavList });
        expectObservable(list).toBe('a', { a: stubNavList });
      });
    });
  });

  describe('when the merged router data has no index', () => {
    it('should not emit', () => {
      scheduler.run(({ expectObservable }) => {
        dataSpy.next({});
        expectObservable(list).toBe('');
      });
    });
  });

  describe('when the router data emits a falsy value', () => {
    it('should not emit', () => {
      scheduler.run(({ expectObservable }) => {
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
      scheduler.run(({ expectObservable }) => {
        dataSpy.next({ index: stubNavList });
        dataSpy.next({ index: secondNavList });
        expectObservable(list).toBe('a', { a: secondNavList });
      });
    });
  });
});
