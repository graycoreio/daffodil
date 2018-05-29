import { Component, OnInit, Input } from '@angular/core';

import { Product } from '@daffodil/core';

@Component({
  selector: 'product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent {
  @Input() products: Product[];
}
