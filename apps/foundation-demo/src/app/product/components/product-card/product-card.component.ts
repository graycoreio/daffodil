import { Component, Input } from '@angular/core';
import { Product } from '@daffodil/core';
import { Router } from '@angular/router';

@Component({
  selector: 'demo-product-card',
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
