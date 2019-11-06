import { Component, Input } from '@angular/core';

import { DaffProduct } from '@daffodil/product';

@Component({
  selector: 'demo-product-added',
  templateUrl: './product-added.component.html',
  styleUrls: ['./product-added.component.scss']
})
export class ProductAddedComponent {

  /**
   * The number of products added to the cart.
   */
  @Input() qty: number;

  /**
   * The product added to the cart
   * TODO(damienwebdev) change to CartItem
   */
  @Input() product: DaffProduct;
}
