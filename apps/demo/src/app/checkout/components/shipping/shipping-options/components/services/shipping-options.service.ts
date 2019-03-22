import { Injectable } from '@angular/core';

import { ShippingOption } from '@daffodil/checkout';

import { ShippingOptionsFactory } from '../factories/shipping-options.factory';

@Injectable({
  providedIn: 'root'
})
export class ShippingOptionsService {

  private shippingOptions: ShippingOption[];

  constructor(shippingOptionsFactory: ShippingOptionsFactory) {
    this.shippingOptions = shippingOptionsFactory.create();
  }
  
  getShippingOptions(): ShippingOption[] {
    return this.shippingOptions;
  }
}
