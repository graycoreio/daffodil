import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffProduct, DaffProductTypeEnum } from '@daffodil/product';
import { DaffModelFactory } from '@daffodil/core/testing';

/**
 * Mocked DaffProduct object.
 */
export class MockProduct implements DaffProduct {
	private stubPrice = faker.random.number(1500);
	private stubDiscount = faker.random.number({min: 0, max: this.stubPrice - 1});

	type = DaffProductTypeEnum.Simple;
	id = faker.random.number(10000).toString();
	url = faker.random.alphaNumeric(16);
	price = this.stubPrice.toString();
	discount = {
		amount: this.stubDiscount,
		percent: this.stubDiscount/this.stubPrice
	}
  name = faker.commerce.productName();
  brand = faker.company.companyName();
  description = 'Lorem ipsum dolor sit amet, accumsan ullamcorper ei eam. Sint appetere ocurreret no per, et cum lorem disputationi. Sit ut magna delenit, assum vidisse vocibus sed ut. In aperiri malorum accusamus sea, novum mediocritatem ius at. Duo agam probo honestatis ut. Nec regione splendide cu, unum graeco vivendum in duo.'
}

/**
 * Factory for creating DaffProducts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffProductFactory extends DaffModelFactory<DaffProduct>{
  constructor(){
    super(MockProduct);
  }
}