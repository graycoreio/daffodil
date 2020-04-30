import { TestBed } from '@angular/core/testing';

import { DaffAuthStorageService } from './auth-storage.service';

describe('DaffAuthStorageService', () => {
  let service: DaffAuthStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({

    });

    service = TestBed.get(DaffAuthStorageService);
  });

  afterEach(() => {
    service.removeAuthToken();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to persist and retrieve the auth token', () => {
    service.setAuthToken('id');
    expect(service.getAuthToken()).toEqual('id');

    service.setAuthToken('bob');
    expect(service.getAuthToken()).toEqual('bob');
  });

  it('should be able to persist a auth token', () => {
    service.setAuthToken('id');
    expect(service.getAuthToken()).toEqual('id');
  });

  it('should be able to remove a auth token', () => {
    service.removeAuthToken();
    expect(service.getAuthToken()).toEqual(null);
  });
});
