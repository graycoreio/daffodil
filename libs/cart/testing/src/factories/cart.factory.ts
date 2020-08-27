import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCart, DaffCartTotalTypeEnum } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCart implements DaffCart {
  id = faker.random.number({min: 1, max: 1000});
  subtotal = 10000;
  grand_total = 15000;
  coupons = [];
  items = [];
  billing_address = null;
  shipping_address = null;
  shipping_information = null;
  totals = [
		{
			name: DaffCartTotalTypeEnum.grandTotal,
			value: 1000,
			label: 'Grand Total'
		},
		{
			name: DaffCartTotalTypeEnum.subtotalExcludingTax,
			value: 900,
			label: 'Subtotal Excluding Tax'
		},
		{
			name: DaffCartTotalTypeEnum.subtotalIncludingTax,
			value: 950,
			label: 'Subtotal Including Tax'
		},
		{
			name: DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax,
			value: 850,
			label: ''
		},
		{
			name: DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax,
			value: 900,
			label: ''
		},
		{
			name: DaffCartTotalTypeEnum.tax,
			value: 50,
			label: ''
		},
		{
			name: DaffCartTotalTypeEnum.discount,
			value: 50,
			label: ''
		}
	];
  payment = null;
  available_shipping_methods = [];
  available_payment_methods = [];
};


@Injectable({
  providedIn: 'root'
})
export class DaffCartFactory extends DaffModelFactory<DaffCart>{
  constructor(){
    super(MockCart);
  }
}
