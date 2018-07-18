import { Injectable } from '@angular/core';
import { PaymentInfo } from '../../models/payment-info';

@Injectable()
export class PaymentFactory {
  
  create() : MockPaymentInfo {
    return {...new MockPaymentInfo()};
  }
}

export class MockPaymentInfo implements PaymentInfo {
  name: string = 'name';
  cardnumber: number = 1234123412341234;
  month: number = 10;
  year: number = 2021;
  securitycode: number = 123;
}
