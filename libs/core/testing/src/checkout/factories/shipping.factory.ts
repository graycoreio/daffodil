import { Injectable } from '@angular/core';

import { DaffCoreTestingModule } from '../../testing.module';
import { ShippingOption, Address } from '@daffodil/core';


@Injectable({
  providedIn: 'root'
})
export class ShippingFactory {

  createShippingOptions() : ShippingOption[] {
    return [
      new MockShippingOption(0),
      new MockShippingOption(1)
    ]
  }
}

export class MockShippingOption implements ShippingOption {

  option: number;

  constructor(option:number) {
    this.option = option;
  }
  id: number = this.option;
  text: string = 'text' + this.option;
}