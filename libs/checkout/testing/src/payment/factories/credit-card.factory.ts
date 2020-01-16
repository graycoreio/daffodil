import { Injectable } from '@angular/core';

import { DaffCreditCard } from '@daffodil/checkout';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCreditCard implements DaffCreditCard {
  name = 'name';
  cardnumber = '1234123412341234';
  month = '10';
  year = '2021';
  securitycode = '123';
}

@Injectable({
  providedIn: 'root'
})
export class DaffCreditCardFactory extends DaffModelFactory<DaffCreditCard> {
  constructor(){
    super(MockCreditCard);
  }
}
