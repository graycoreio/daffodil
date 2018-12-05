import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '@daffodil/product';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product: Product;

  constructor(
    private router: Router
  ) { }

  navigateToProduct() {
    this.router.navigateByUrl('product/' + this.product.id);
  }
}
