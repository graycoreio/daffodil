import {
  ɵPLATFORM_SERVER_ID,
  ɵPLATFORM_BROWSER_ID,
} from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DaffBrowserBase64Service } from './browser.service';

describe('DaffBrowserBase64Service', () => {
  describe('On the server', () => {
    beforeEach(() =>
      TestBed.configureTestingModule({
        providers: [{ provide: PLATFORM_ID, useValue: ɵPLATFORM_SERVER_ID }],
      }),
    );

    it('should throw an error in a non-browser context', () => {
      expect(() => TestBed.inject(DaffBrowserBase64Service)).toThrowError();
    });
  });

  describe('in the browser', () => {
    let service: DaffBrowserBase64Service;

    let ascii: string;
    let base64: string;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [{ provide: PLATFORM_ID, useValue: ɵPLATFORM_BROWSER_ID }],
      });

      service = TestBed.inject(DaffBrowserBase64Service);

      ascii = 'test ascii string';
      base64 = 'dGVzdCBhc2NpaSBzdHJpbmc=';
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should encode the ASCII string into base64', () => {
      expect(service.encode(ascii)).toEqual(base64);
    });

    it('should decode the base64 string into ASCII', () => {
      expect(service.decode(base64)).toEqual(ascii);
    });
  });
});
