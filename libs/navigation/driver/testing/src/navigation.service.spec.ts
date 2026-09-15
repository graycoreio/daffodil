import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';

import { DaffTestingNavigationService } from './navigation.service';

describe('Driver | Testing | Navigation | NavigationService', () => {
  let navigationService;
  let scheduler: TestScheduler;
  const navigationTreeFactory: DaffNavigationTreeFactory = new DaffNavigationTreeFactory();
  const navigation = navigationTreeFactory.create();
  const mockNavigationFactory = jasmine.createSpyObj('DaffNavigationTreeFactory', ['create']);
  mockNavigationFactory.create.and.returnValue(navigation);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DaffNavigationTreeFactory, useValue: mockNavigationFactory },
        DaffTestingNavigationService,
      ],
    });
    navigationService = TestBed.inject(DaffTestingNavigationService);
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(navigationService).toBeTruthy();
  });

  describe('get', () => {

    it('should return a single navigation', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(navigationService.get('1')).toBe('(a|)', { a: navigation });
      });
    });
  });
});
