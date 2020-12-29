import { TestBed } from '@angular/core/testing';

import { isNavigation } from '@daffodil/navigation/testing';

import { DaffInMemoryBackendNavigationService } from './navigation.service';

describe('Driver | InMemory | Navigation | DaffInMemoryBackendNavigationService', () => {
  let navigationTestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffInMemoryBackendNavigationService]
    });

    navigationTestingService = TestBed.inject(DaffInMemoryBackendNavigationService);
  });

  it('should be created', () => {
    expect(navigationTestingService).toBeTruthy();
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
