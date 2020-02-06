import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  STATUS
} from 'angular-in-memory-web-api';
import * as faker from 'faker/locale/en_US';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendAuthService implements InMemoryDbService {
  constructor() {}

  private generateToken(): string {
    return faker.random.alphaNumeric(16);
  }

  createDb() {
    return {
      auth: {}
    };
  }

  post(reqInfo) {
    // TODO: verify that this is the correct way to check endpoint
    if (reqInfo.id === 'login') {
      return this.login(reqInfo);
    } else if (reqInfo.id === 'register') {
      return this.register(reqInfo);
    }
  }

  private login(reqInfo: any) {
    return reqInfo.utils.createResponse$(() => ({
      body: {
        token: this.generateToken()
      },
      status: STATUS.OK
    }));
  }

  private register(reqInfo) {
    const {
      customer,
    } = reqInfo.utils.getJsonBody(reqInfo.req);

    return reqInfo.utils.createResponse$(() => ({
      body: customer,
      status: STATUS.CREATED
    }))
  }
}
