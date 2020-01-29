import { TestBed } from '@angular/core/testing';

import { CartStorageService } from './cart-storage.service';

describe('CartStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartStorageService = TestBed.get(CartStorageService);
    expect(service).toBeTruthy();
  });
});
