import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

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
      const expected = cold('(a|)', { a: jasmine.notEmpty() });
      expect(service.search('query')).toBeObservable(expected);
    });
  });
});
