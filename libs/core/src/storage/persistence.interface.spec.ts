import { TestBed } from '@angular/core/testing';

import { DaffPersistenceServiceToken as Token, DaffPersistenceService } from './persistence.interface'
import { DaffLocalStorageService } from './localstorage/localstorage.service';

describe('DaffPersistenceServiceToken', () => {
  let defaultPersistenceService: DaffPersistenceService;

  beforeEach(() => {
		defaultPersistenceService = TestBed.get(Token);
  });

  it('should inject a DaffLocalStorageService', () => {
    expect(defaultPersistenceService instanceof DaffLocalStorageService).toBeTruthy()
  });
});
