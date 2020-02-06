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
  users = {};

  constructor() {}

  private generateToken(): string {
    return faker.random.alphaNumeric(16);
  }

  private setUserInfo(email, password) {
    this.users[email] = {password};
  }

  createDb(): any {
    return {
      auth: this.users
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
    const {
      email,
      password
    } = reqInfo.utils.getJsonBody();
    const user = this.users[email];

    return reqInfo.utils.createResponse$(() => {
      if (user) {
        return user.password === password
          ? {
            body: {
              token: this.generateToken()
            },
            status: STATUS.OK
          }
          : Error('Incorrect password');
      } else {
        return Error('User does not exist');
      }
    });
  }

  private register(reqInfo) {
    const {
      customer,
      password
    } = reqInfo.utils.getJsonBody();
    const user = this.users[customer.email];

    return reqInfo.utils.createResponse$(() => {
      if (user) {
        return Error('User already exists');
      } else {
        this.setUserInfo(customer.email, password);

        return {
          body: customer,
          status: STATUS.CREATED
        };
      }
    })
  }
}
