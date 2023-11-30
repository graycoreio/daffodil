import { TestBed } from '@angular/core/testing';

import { DaffNavigationTree } from '@daffodil/navigation';
import { DAFF_NAVIGATION_IN_MEMORY_SEED_DATA_PROVIDER } from '@daffodil/navigation/driver/in-memory';
import {
  DaffNavigationTreeFactory,
  isNavigation,
} from '@daffodil/navigation/testing';

import { DaffInMemoryBackendNavigationService } from './navigation.service';

describe('@daffodil/navigation/driver/in-memory | DaffInMemoryBackendNavigationService', () => {
  let navigationTestingService: DaffInMemoryBackendNavigationService;
  let navigationFactory: DaffNavigationTreeFactory;
  let navigationTree: DaffNavigationTree;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryBackendNavigationService,
        {
          provide: DAFF_NAVIGATION_IN_MEMORY_SEED_DATA_PROVIDER,
          useFactory: () => {
            navigationFactory = TestBed.inject(DaffNavigationTreeFactory);
            navigationTree = navigationFactory.create();
            return () => navigationTree;
          },
        },
      ],
    });

    navigationTestingService = TestBed.inject(DaffInMemoryBackendNavigationService);
  });

  it('should be created', () => {
    expect(navigationTestingService).toBeTruthy();
  });

  it('should seed the navigation tree from the provider', () => {
    expect(navigationTestingService.navigationTree).toEqual(navigationTree);
  });

  describe('createDb', () => {
    let result;

    beforeEach(() => {
      result = navigationTestingService.createDb();
    });

    it('should return an object with a NavigationTree', () => {
      expect(isNavigation(result.navigation[0])).toBeTruthy();
    });
  });
});
