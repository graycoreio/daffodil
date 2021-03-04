import { ɵPLATFORM_SERVER_ID } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DaffServerSideStorageError } from '@daffodil/core';

import { DaffCartStorageService } from '../cart-storage.service';

describe('DaffCartStorageService | on the server', () => {
  let service: DaffCartStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: PLATFORM_ID, useValue: ɵPLATFORM_SERVER_ID }],
    });
  });

  beforeEach(() => {
    service = TestBed.inject(DaffCartStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should throw errors', () => {
    expect(() => service.getCartId()).toThrowMatching(
      e => e instanceof DaffServerSideStorageError,
    );
    expect(() => service.setCartId('test')).toThrowMatching(
      e => e instanceof DaffServerSideStorageError,
    );
    expect(() => service.removeCartId()).toThrowMatching(
      e => e instanceof DaffServerSideStorageError,
    );
  });
});
