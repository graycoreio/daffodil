import { TestBed } from '@angular/core/testing';

import { DaffLocalStorageService } from './localstorage/localstorage.service';
import {
  DaffPersistenceServiceToken as Token,
  DaffPersistenceService,
} from './persistence.interface';

describe('DaffPersistenceServiceToken', () => {
  let defaultPersistenceService: DaffPersistenceService;

  beforeEach(() => {
    defaultPersistenceService = TestBed.inject(Token);
  });

  it('should inject a DaffLocalStorageService', () => {
    expect(defaultPersistenceService instanceof DaffLocalStorageService).toEqual(true);
  });
});
