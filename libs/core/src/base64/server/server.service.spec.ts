/* eslint-disable no-restricted-globals */
import {
  ɵPLATFORM_SERVER_ID,
  ɵPLATFORM_BROWSER_ID,
} from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DaffServerBase64Service } from './server.service';

describe('DaffServerBase64Service', () => {
  describe('In the broswer', () => {
    beforeEach(() =>
      TestBed.configureTestingModule({
        providers: [{ provide: PLATFORM_ID, useValue: ɵPLATFORM_BROWSER_ID }],
      }),
    );

    it('should throw an error in a non-sever context', () => {
      expect(() => TestBed.inject(DaffServerBase64Service)).toThrowError();
    });
  });

  describe('On the server', () => {
    let service: DaffServerBase64Service;

    let ascii: string;
    let base64: string;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [{ provide: PLATFORM_ID, useValue: ɵPLATFORM_SERVER_ID }],
      });

      service = TestBed.inject(DaffServerBase64Service);

      (<typeof globalThis><unknown>window).Buffer = jasmine.createSpyObj('Buffer', ['from']);
      (<jasmine.Spy>(<typeof globalThis><unknown>window).Buffer.from).and.returnValue({ toString: () => {} });
      ascii = 'test ascii string';
      base64 = 'dGVzdCBhc2NpaSBzdHJpbmc=';
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should invoke Buffer with the ASCII string', () => {
      service.encode(ascii);
      expect(<jasmine.Spy>(<typeof globalThis><unknown>window).Buffer.from).toHaveBeenCalledWith(ascii);
    });

    it('should invoke Buffer with the base64 string', () => {
      service.decode(base64);
      expect(<jasmine.Spy>(<typeof globalThis><unknown>window).Buffer.from).toHaveBeenCalledWith(base64, 'base64');
    });
  });
});
