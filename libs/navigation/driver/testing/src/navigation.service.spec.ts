import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';

import { DaffTestingNavigationService } from './navigation.service';

describe('Driver | Testing | Navigation | NavigationService', () => {
  let navigationService;
  const navigationTreeFactory: DaffNavigationTreeFactory = new DaffNavigationTreeFactory();
  const navigation = navigationTreeFactory.create();
  const mockNavigationFactory = jasmine.createSpyObj('DaffNavigationTreeFactory', ['create']);
  mockNavigationFactory.create.and.returnValue(navigation);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DaffNavigationTreeFactory, useValue: mockNavigationFactory },
        DaffTestingNavigationService
      ]
    });
    navigationService = TestBed.inject(DaffTestingNavigationService);
  });

  it('should be created', () => {
    expect(navigationService).toBeTruthy();
  });

  describe('get', () => {

    it('should return a single navigation', () => {
      const expected = cold('(a|)', { a: navigation });
      expect(navigationService.get('1')).toBeObservable(expected);
    });
  });
});
