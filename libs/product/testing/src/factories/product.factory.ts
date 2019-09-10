import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffProduct } from '@daffodil/product';
import { DaffModelFactory } from "@daffodil/core/testing";

/**
 * Mocked DaffProduct object.
 */
export class MockProduct implements DaffProduct {
  id = faker.random.number(10000).toString();
  price = faker.random.number(1500).toString();
  name = faker.commerce.productName();
  brand = faker.company.companyName();
  description = "Lorem ipsum dolor sit amet, accumsan ullamcorper ei eam. Sint appetere ocurreret no per, et cum lorem disputationi. Sit ut magna delenit, assum vidisse vocibus sed ut. In aperiri malorum accusamus sea, novum mediocritatem ius at. Duo agam probo honestatis ut. Nec regione splendide cu, unum graeco vivendum in duo."
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