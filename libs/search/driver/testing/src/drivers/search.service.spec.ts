import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { DaffTestingSearchDriver } from './search.service';

describe('@daffodil/driver/testing | DaffTestingSearchDriver', () => {
  let service: DaffTestingSearchDriver;

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    TestBed.configureTestingModule({
      providers: [
        DaffTestingSearchDriver,
      ],
    });

    service = TestBed.inject(DaffTestingSearchDriver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('search', () => {
    it('should return a DaffSearchResultCollection', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.search('query')).toBe('(a|)', { a: jasmine.notEmpty() });
      });
    });
  });

  describe('incremental', () => {
    it('should return a DaffSearchResultCollection', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.incremental('query')).toBe('(a|)', { a: jasmine.notEmpty() });
      });
    });
  });
});
