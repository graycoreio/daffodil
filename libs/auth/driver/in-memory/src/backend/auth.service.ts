import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';
import {
  InMemoryDbService,
  STATUS,
} from 'angular-in-memory-web-api';

import { DaffInMemorySingleRouteableBackend } from '@daffodil/driver/in-memory';

import { DAFF_AUTH_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';
import { DaffInMemoryDbCustomer } from '../models/db-customer.type';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendAuthService implements InMemoryDbService, DaffInMemorySingleRouteableBackend {
  readonly collectionName = DAFF_AUTH_IN_MEMORY_COLLECTION_NAME;

  customers: Record<DaffInMemoryDbCustomer['email'], DaffInMemoryDbCustomer> = {};

  private generateToken(): string {
    return faker.random.alphaNumeric(16);
  }

  createDb() {
    return {
      auth: this.customers,
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
    } else if (reqInfo.id === 'resetPassword') {
      return this.resetPassword(reqInfo);
    } else if (reqInfo.id === 'sendResetEmail') {
      return this.sendResetEmail(reqInfo);
    }
  }

  private login(reqInfo: any) {
    const {
      email,
      password,
    } = reqInfo.utils.getJsonBody(reqInfo.req);
    const customer = this.customers[email];

    if (password && customer?.password === password) {
      this.customers[email].token = this.generateToken();

      return reqInfo.utils.createResponse$(() => ({
        body: {
          token: customer.token,
        },
        status: STATUS.OK,
      }));
    }

    return reqInfo.utils.createResponse$(() => ({
      status: STATUS.UNAUTHORIZED,
    }));
  }

  private register(reqInfo) {
    const {
      email,
      password,
    } = reqInfo.utils.getJsonBody(reqInfo.req);

    this.customers[email] = {
      email,
      password,
    };

    return reqInfo.utils.createResponse$(() => ({
      status: STATUS.CREATED,
    }));
  }

  private logout(reqInfo) {
    const {
      email,
    } = reqInfo.utils.getJsonBody(reqInfo.req);

    if (this.customers[email]) {
      this.customers[email].token = null;
    }

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

  private resetPassword(reqInfo) {
    const {
      email,
      password,
    } = reqInfo.utils.getJsonBody(reqInfo.req);

    if (this.customers[email]) {
      this.customers[email].password = password;

      return reqInfo.utils.createResponse$(() => ({
        status: STATUS.OK,
      }));
    }

    return reqInfo.utils.createResponse$(() => ({
      status: STATUS.UNAUTHORIZED,
    }));
  }

  private sendResetEmail(reqInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: {},
      status: STATUS.OK,
    }));
  }
}
