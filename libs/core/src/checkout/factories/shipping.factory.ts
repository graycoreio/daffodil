import { Injectable } from '@angular/core';
import { ShippingOption } from '../models/shipping-option';

@Injectable()
export class ShippingFactory {

  createShippingOptions() : ShippingOption[] {
    return [
      new MockShippingOption('1'),
      new MockShippingOption('2')
    ]
  }
}

export class MockShippingOption implements ShippingOption {

  option: string;

  constructor(option:string) {
    this.option = option;
  }
  id: string = 'id' + this.option;
  text: string = 'text' + this.option;
}
