import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { Product } from '@daffodil/core';
import { ModelFactory } from "../../factories/factory";

export class MockProduct implements Product {
  id = faker.random.number(10000).toString();
  price = faker.random.number(1000).toString();
  name = faker.commerce.productName();
  brand = faker.company.companyName();
  description = "Lorem ipsum dolor sit amet, accumsan ullamcorper ei eam. Sint appetere ocurreret no per, et cum lorem disputationi. Sit ut magna delenit, assum vidisse vocibus sed ut. In aperiri malorum accusamus sea, novum mediocritatem ius at. Duo agam probo honestatis ut. Nec regione splendide cu, unum graeco vivendum in duo."
}

@Injectable({
  providedIn: 'root'
})
export class DaffProductFactory extends ModelFactory<Product>{
  constructor(){
    super(MockProduct);
  }
}