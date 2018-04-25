import { Component, OnInit, Input } from '@angular/core';

import { Product } from '@daffodil/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products: Product[];
}
