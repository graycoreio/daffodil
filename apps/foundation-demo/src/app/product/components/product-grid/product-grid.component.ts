import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { Product } from '@daffodil/core';

@Component({
  selector: 'product-grid',
  host: {'class': 'product-grid'},
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductGridComponent {
  @Input() products: Product[];
}
