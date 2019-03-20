import { Injectable } from '@angular/core';

import { ShippingOption } from '@daffodil/checkout';

@Injectable({
  providedIn: 'root'
})
export class ShippingOptionsFactory {

  constructor() {}
  
  create() : ShippingOption[] {
    return [
      { id: '0',
        text: 'Standard' },
      { id: '1',
        text: 'Two Day' },
      { id: '2',
        text: 'One Day' }
    ];
  }
}
