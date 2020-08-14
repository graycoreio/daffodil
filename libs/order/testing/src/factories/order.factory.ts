import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffOrder } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockOrder implements DaffOrder {
  id = faker.random.number({min: 1, max: 1000});
  customer_id = faker.random.number({min: 1, max: 1000});
  created_at = faker.date.past().toString();
  updated_at = faker.date.past().toString();
  status = faker.random.word();
  totals = [];
  applied_codes = [];
  items = [];
  billing_addresses = [];
  shipping_addresses = [];
  shipments = [];
  payment = null;
  invoices = [];
  credits = [];
};


@Injectable({
  providedIn: 'root'
})
export class DaffOrderFactory extends DaffModelFactory<DaffOrder>{
  constructor() {
    super(MockOrder);
  }
}
