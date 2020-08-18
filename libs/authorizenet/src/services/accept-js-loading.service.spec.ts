import { TestBed } from '@angular/core/testing';

import { DaffAcceptJsLoadingService } from './accept-js-loading.service';
import { DaffAuthorizeNetConfig, DaffAuthorizeNetConfigToken } from '../drivers/public_api';

describe('DaffAcceptJsLoadingService', () => {
  let service: DaffAcceptJsLoadingService;
	const stubConfig: DaffAuthorizeNetConfig = {
		clientKey: 'clientKey',
		apiLoginID: 'apiLoginID',
		production: false
	}

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffAcceptJsLoadingService,
				{ provide: DaffAuthorizeNetConfigToken, useValue: stubConfig }
			]
    });

    service = TestBed.get(DaffAcceptJsLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
	});
		
	it(`throws an error when acceptJs has not been loaded
			should load the acceptJs library into the document`, () => {
		expect(() => {
			service.getAccept()
		}).toThrowError();

		service.load();
		setTimeout(() => {
			const scripts = document.getElementsByTagName('script');
			expect(scripts[scripts.length-1].src).toEqual('https://jstest.authorize.net/v1/Accept.js');
		});
		expect(true).toBeTruthy();
	});
});
