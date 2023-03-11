import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffOrderPayment } from '@daffodil/checkout';
import { DaffModelFactory } from '@daffodil/core/testing';

/**
 * @deprecated
 */
export class MockOrderPayment implements DaffOrderPayment {
  id = faker.datatype.number({ min: 1, max: 1000 });
  payment_id = this.id;
  quote_id = faker.datatype.number({ min: 1, max: 1000 });
  created_at = new Date();
  updated_at = new Date();
  method = 'card';
  cc_type = 'visa';
  cc_number_enc = faker.datatype.number({ min: 1000, max: 9999 }).toString();
  cc_last4 = faker.datatype.number({ min: 1000, max: 9999 }).toString();
  cc_cid_enc = faker.datatype.number({ min: 1, max: 1000 }).toString();
  cc_owner = 'owner';
  cc_exp_month = 'month';
  cc_exp_year = 'year';
  cc_ss_owner = 'owner';
  cc_ss_start_month = 'start month';
  cc_ss_start_year = 'start year';
  po_number = 'po';
  cc_ss_issue = 'issue';
}

/**
 * @deprecated
 */
@Injectable({
  providedIn: 'root',
})
export class DaffOrderPaymentFactory extends DaffModelFactory<DaffOrderPayment>{
  constructor(){
    super(MockOrderPayment);
  }
}
