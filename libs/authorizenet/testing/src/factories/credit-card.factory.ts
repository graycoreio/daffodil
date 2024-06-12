import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffAuthorizeNetCreditCard } from '@daffodil/authorizenet';
import { DaffModelFactory } from '@daffodil/core/testing';

/**
 * Mock class for {@link DaffAuthorizeNetCreditCard}.
 */
export class MockDaffAuthorizeNetCreditCard implements DaffAuthorizeNetCreditCard {
  cardnumber = faker.finance.creditCardNumber();
  month = faker.date.month();
  year = faker.date.future().getFullYear().toString();
  securitycode = faker.finance.creditCardCVV();
};

/**
 * Model factory for {@link DaffAuthorizeNetCreditCard}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffAuthorizeNetCreditCardFactory extends DaffModelFactory<DaffAuthorizeNetCreditCard, typeof MockDaffAuthorizeNetCreditCard>{
  constructor() {
    super(MockDaffAuthorizeNetCreditCard);
  }
}
