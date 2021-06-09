import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffOrder } from '@daffodil/order';

export class MockOrder implements DaffOrder {
  id = faker.datatype.uuid();
  customer_id = faker.datatype.uuid();
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
  providedIn: 'root',
})
export class DaffOrderFactory extends DaffModelFactory<DaffOrder>{
  constructor() {
    super(MockOrder);
  }
}
