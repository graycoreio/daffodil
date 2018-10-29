import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { DaffCoreTestingModule } from '../../testing.module';

import { Cart, CartItem, CartAddress, CartPayment, CartShippingRate} from '@daffodil/core';


@Injectable({
  providedIn: 'root'
})
export class CartFactory {
  
  create() : Cart {
    return {...new MockCart()};
  }

  createCartItem() : CartItem {
    return new MockCartItem();
  }
}

export class MockCart implements Cart {
  id = faker.random.number(1000).toString();
  created_at: Date = new Date();
  updated_at: Date = new Date();
  store_to_base_rate: number = faker.random.number(1000);
  grand_total: number = faker.random.number(1000);
  checkout_method: string = 'card';
  customer_id: number = faker.random.number(1000);
  coupon_code: string = faker.random.number(100000).toString();
  subtotal: number = faker.random.number(1000);
  subtotal_with_discount: number = faker.random.number(1000);
  items: CartItem[] = [];
  addresses: CartAddress[] = [new MockCartAddress()];
  payment: CartPayment = new MockCartPayment();
};

export class MockCartItem implements CartItem {
  item_id: number = faker.random.number(1000);
  quote_id: number = faker.random.number(1000);
  created_at: Date = new Date();
  updated_at: Date = new Date();
  product_id: number = faker.random.number(1000);
  parent_item_id: number = faker.random.number(1000);
  sku: string = 'sku';
  name: string = 'Product Name';
  description: string = 'description';
  weight: number = faker.random.number(1000);
  qty: number = faker.random.number({min:1, max:11});
  price: number = faker.random.number(1000);
  discount_percent: number = faker.random.number(10);
  discount_amount: number = faker.random.number(100);
  tax_percent: number = faker.random.number(10);
  tax_amount: number = faker.random.number(10);
  row_total: number = faker.random.number(1000);
  row_total_with_discount: number = faker.random.number(1000);
  row_weight: number = faker.random.number(100);
  tax_before_discount: number = faker.random.number(100);
}

export class MockCartAddress implements CartAddress {
  address_id: number = faker.random.number(1000);
  quote_id: number = faker.random.number(1000);
  created_at: Date = new Date();
  updated_at: Date = new Date();
  customer_id: number = faker.random.number(1000);
  customer_address_id: number = faker.random.number(1000);
  address_type: string = 'apartment';
  email: string = 'email@email.com';
  prefix: string = 'prefix';
  firstname: string = 'first';
  middlename: string = 'middle';
  lastname: string = 'last';
  suffix: string = 'suffix';
  company: string = 'company';
  street: string = 'street';
  city: string = 'city';
  region: string = 'region';
  region_id: number = faker.random.number(1000);
  postcode: string = 'postcode';
  country_id: string = 'ISO';
  telephone: string = 'telephone';
  fax: string = 'fax';
  shipping_method: string = 'swallow';
  shipping_description: string = 'flight';
  shipping_rate: CartShippingRate = new MockCartShippingRate();
}

export class MockCartShippingRate implements CartShippingRate {
  rate_id: number = faker.random.number(1000);
  address_id: number = faker.random.number(1000);
  created_at: Date = new Date();
  updated_at: Date = new Date();
  carrier: string = 'Birds Inc.';
  carrier_title: string = 'laden';
  code: string = 'code';
  method: string = 'swallow';
  method_description: string = 'efficient';
  price: number = faker.random.number(1000);
  error_message: string = 'error message';
  method_title: string = 'laden';
}

export class MockCartPayment implements CartPayment {
  payment_id: number = faker.random.number(1000);
  quote_id: number = faker.random.number(1000);
  created_at: Date = new Date();
  updated_at: Date = new Date();
  method: string = 'card';
  cc_type: string = 'visa';
  cc_number_enc: string = faker.random.number(1000).toString();
  cc_last4: string = faker.random.number(1000).toString();
  cc_cid_enc: string = faker.random.number(1000).toString();
  cc_owner: string = 'owner';
  cc_exp_month: string = 'month';
  cc_exp_year: string = 'year';
  cc_ss_owner: string = 'owner';
  cc_ss_start_month: string = 'start month';
  cc_ss_start_year: string = 'start year';
  po_number: string = 'po';
  cc_ss_issue: string = 'issue';
}
