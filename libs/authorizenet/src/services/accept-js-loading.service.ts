import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { AcceptType } from '../models/acceptJs/accept';
import { DaffAuthorizeNetConfig, DaffAuthorizeNetConfigToken } from '../drivers/public_api';

const ACCEPT_JS_SANDBOX_URL = 'https://jstest.authorize.net/v1/Accept.js';
const ACCEPT_JS_PRODUCTION_URL = 'https://js.authorize.net/v1/Accept.js';

export declare var Accept: AcceptType;

@Injectable({
	providedIn: 'root'
})
export class DaffAcceptJsLoadingService {

  constructor(
		@Inject(DaffAuthorizeNetConfigToken) private config: DaffAuthorizeNetConfig,
		@Inject(DOCUMENT) private doc
	){}

	load(): void {
		if(typeof Accept === 'undefined') {
			const acceptJsScript = this.doc.createElement('script');
			acceptJsScript.async = true;
			acceptJsScript.setAttribute('type', 'text/javascript');
			acceptJsScript.setAttribute('src', this.config.production ? ACCEPT_JS_PRODUCTION_URL : ACCEPT_JS_SANDBOX_URL);
			acceptJsScript.setAttribute('charset', 'utf-8');
			this.doc.body.appendChild(acceptJsScript);
		}
	}

	getAccept(): AcceptType {
		return Accept;
	}
}