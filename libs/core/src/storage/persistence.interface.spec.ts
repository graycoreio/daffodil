import { Inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DaffPersistenceServiceToken as Token, DaffPersistenceService } from './persistence.interface'
import { DaffLocalStorageService } from './localstorage/localstorage.service';

class MockService {
  constructor(@Inject(Token) public service: DaffPersistenceService) {}
}

describe('DaffPersistenceServiceToken', () => {
  let mockService: MockService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockService
      ]
    });

    mockService = TestBed.get(MockService);
  });

  it('should inject a DaffLocalStorageService', () => {
    expect(mockService.service instanceof DaffLocalStorageService).toBeTruthy()
  });
});
