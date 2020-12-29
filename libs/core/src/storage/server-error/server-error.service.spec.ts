import { TestBed } from '@angular/core/testing';

import { DaffServerErrorStorageService } from './server-error.service';

describe('DaffServerErrorStorageService', () => {
  let service: DaffServerErrorStorageService;

  const errorMessage = 'The DaffServerErrorStorageService always throws an error.';

  beforeEach(() => {
    service = TestBed.inject(DaffServerErrorStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setItem | throwing an error', () => {
    it('should throw an error', () => {
      expect(service.setItem.bind(service)).toThrowError(errorMessage)
    });
  });

  describe('getItem | throwing an error', () => {
    it('should throw an error', () => {
      expect(service.getItem.bind(service)).toThrowError(errorMessage)
    });
  });

  describe('removeItem | throwing an error', () => {
    it('should throw an error', () => {
      expect(service.removeItem.bind(service)).toThrowError(errorMessage)
    });
  });

  describe('clear | throwing an error', () => {
    it('should throw an error', () => {
      expect(service.clear.bind(service)).toThrowError(errorMessage)
    });
  });
});
