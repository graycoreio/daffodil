import { Injectable } from '@angular/core';

import { ShippingOption } from '@daffodil/core';


@Injectable({
  providedIn: 'root'
})
export class ShippingFactory {

  createShippingOptions() : ShippingOption[] {
    return [
      new MockShippingOption("0"),
      new MockShippingOption("1")
    ]
  }
}

export class MockShippingOption implements ShippingOption {

  option: string;

  constructor(option:string) {
    this.option = option;
  }
  id: string = this.option;
  text: string = 'text' + this.option;
}