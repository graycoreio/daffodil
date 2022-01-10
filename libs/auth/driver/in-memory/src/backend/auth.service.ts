import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';
import {
  InMemoryDbService,
  STATUS,
} from 'angular-in-memory-web-api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendAuthService implements InMemoryDbService {
  constructor() {}

  private generateToken(): string {
    return faker.random.alphaNumeric(16);
  }

  private generateId(): string {
    return faker.datatype.uuid();
  }

  createDb() {
    return {
      auth: {},
    };
  }

  post(reqInfo) {
    if (reqInfo.id === 'login') {
      return this.login(reqInfo);
    } else if (reqInfo.id === 'register') {
      return this.register(reqInfo);
    } else if (reqInfo.id === 'logout') {
      return this.logout(reqInfo);
    } else if (reqInfo.id === 'check') {
      return this.check(reqInfo);
    }
  }

  private login(reqInfo: any) {
    return reqInfo.utils.createResponse$(() => ({
      body: {
        token: this.generateToken(),
      },
      status: STATUS.OK,
    }));
  }

  private register(reqInfo) {
    const {
      customer,
      password,
    } = reqInfo.utils.getJsonBody(reqInfo.req);

    return reqInfo.utils.createResponse$(() => ({
      body: {
        email: customer.email,
        password,
      },
      status: STATUS.CREATED,
    }));
  }

  private logout(reqInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: { success: true },
      status: STATUS.OK,
    }));
  }

  private check(reqInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: {},
      status: STATUS.OK,
    }));
  }
}
