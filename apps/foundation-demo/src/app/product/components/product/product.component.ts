import { Component, OnInit, Input } from '@angular/core';

import { Product } from '@daffodil/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
}
