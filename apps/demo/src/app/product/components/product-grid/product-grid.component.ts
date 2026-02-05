import {
  Component,
  Input,
} from '@angular/core';

import { DaffProduct } from '@daffodil/product';

import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'demo-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
  imports: [
    ProductCardComponent,
  ],
})
export class ProductGridComponent {
  @Input() products: DaffProduct[];
}
