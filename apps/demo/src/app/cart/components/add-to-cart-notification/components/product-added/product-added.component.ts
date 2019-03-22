import { Component, Input } from '@angular/core';

import { Product } from '@daffodil/product';

@Component({
  selector: 'demo-product-added',
  templateUrl: './product-added.component.html',
  styleUrls: ['./product-added.component.scss']
})
export class ProductAddedComponent {

  @Input() qty: number;
  @Input() product: Product;
}
