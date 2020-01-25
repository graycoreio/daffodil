import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffPaypalTokenResponse } from '@daffodil/paypal';

export class MockPaypalTokenResponse implements DaffPaypalTokenResponse {
  token = 'tokenstring';
  urls = {
		start: faker.internet.url(),
		edit: faker.internet.url()
	};
}

@Injectable({
  providedIn: 'root'
})
export class DaffPaypalTokenResponseFactory extends DaffModelFactory<DaffPaypalTokenResponse>{
  constructor(){
    super(MockPaypalTokenResponse);
  }
}
