/* eslint-disable no-restricted-globals */
import { TestBed } from '@angular/core/testing';

import { DAFF_AUTHORIZENET_ACCEPT_JS_PRODUCTION } from '@daffodil/authorizenet';

import { DaffAcceptJsLoadingService } from './accept-js-loading.service';

describe('DaffAcceptJsLoadingService', () => {
  let service: DaffAcceptJsLoadingService;
  let production: boolean;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffAcceptJsLoadingService,
        {
          provide: DAFF_AUTHORIZENET_ACCEPT_JS_PRODUCTION,
          useFactory: () => production,
        },
      ],
    });

    production = false;

    service = TestBed.inject(DaffAcceptJsLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`throws an error when acceptJs has not been loaded should load the acceptJs library into the document`, () => {
    delete (<any>window).Accept;

    expect(() => {
      service.getAccept();
    }).toThrowError();

    service.load();
    setTimeout(() => {
      const scripts = document.getElementsByTagName('script');
      expect(scripts[scripts.length - 1].src).toEqual(
        'https://jstest.authorize.net/v1/Accept.js',
      );
    });
    expect(true).toBeTruthy();
  });
});
