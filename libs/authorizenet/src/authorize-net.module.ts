import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffAuthorizeNetStateModule } from './authorize-net-state.module';

const ACCEPT_LIBRARY = 'https://jstest.authorize.net/v1/Accept.js';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    DaffAuthorizeNetStateModule
  ]
})
export class DaffAuthorizeNetModule { 
	constructor() {
		const acceptJsScript = document.createElement('script');
		acceptJsScript.async = true;
		acceptJsScript.setAttribute('type', 'text/javascript');
		acceptJsScript.setAttribute('src', ACCEPT_LIBRARY);
		acceptJsScript.setAttribute('charset', 'utf-8');
		document.body.appendChild(acceptJsScript);
	}
}
