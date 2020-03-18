import { TestBed } from '@angular/core/testing';

import { DaffErrorStorageService } from './error.service';

describe('DaffErrorStorageService', () => {
  let service: DaffErrorStorageService;

  beforeEach(() => {
    service = TestBed.get(DaffErrorStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setItem | throwing an error', () => {
    it('should throw an error', () => {
      expect(service.setItem.bind(service)).toThrowError('The DaffErrorStorageService always throws an error.')
    });
  });

  describe('getItem | throwing an error', () => {
    it('should throw an error', () => {
      expect(service.getItem.bind(service)).toThrowError('The DaffErrorStorageService always throws an error.')
    });
  });

  describe('removeItem | throwing an error', () => {
    it('should throw an error', () => {
      expect(service.removeItem.bind(service)).toThrowError('The DaffErrorStorageService always throws an error.')
    });
  });

  describe('clear | throwing an error', () => {
    it('should throw an error', () => {
      expect(service.clear.bind(service)).toThrowError('The DaffErrorStorageService always throws an error.')
    });
  });
});
