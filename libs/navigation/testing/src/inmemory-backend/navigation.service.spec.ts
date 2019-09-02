import { TestBed } from '@angular/core/testing';

import { DaffInMemoryBackendNavigationService } from './navigation.service';

import { isNavigation } from '../helpers/navigation-helper';

describe('Driver | InMemory | Navigation | DaffInMemoryBackendNavigationService', () => {
  let navigationTestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffInMemoryBackendNavigationService]
    });

    navigationTestingService = TestBed.get(DaffInMemoryBackendNavigationService);
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
      expect(isNavigation(result.navigationTree)).toBeTruthy();
    });
  });
});
