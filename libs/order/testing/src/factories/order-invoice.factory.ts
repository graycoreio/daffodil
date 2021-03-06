import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffOrderInvoice } from '@daffodil/order';

export class MockOrderInvoice implements DaffOrderInvoice {
  items = [];
  totals = [];
  billing_address = null;
  shipping_address = null;
  payment = null;
  shipping_method = null;
};


@Injectable({
  providedIn: 'root',
})
export class DaffOrderInvoiceFactory extends DaffModelFactory<DaffOrderInvoice> {
  constructor() {
    super(MockOrderInvoice);
  }
}
