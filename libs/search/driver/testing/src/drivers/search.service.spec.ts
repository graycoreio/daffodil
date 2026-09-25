import { TestBed } from '@angular/core/testing';

import { runMarbles } from '@daffodil/jasmine';

import { DaffTestingSearchDriver } from './search.service';

describe('@daffodil/driver/testing | DaffTestingSearchDriver', () => {
  let service: DaffTestingSearchDriver;

  beforeEach(() => {
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
      runMarbles(({ expectObservable }) => {
        expectObservable(service.search('query')).toBe('(a|)', { a: jasmine.notEmpty() });
      });
    });
  });

  describe('incremental', () => {
    it('should return a DaffSearchResultCollection', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(service.incremental('query')).toBe('(a|)', { a: jasmine.notEmpty() });
      });
    });
  });
});
