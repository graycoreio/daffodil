import {
  Component,
  Input,
} from '@angular/core';

import { DaffProduct } from '@daffodil/product';

@Component({
  selector: 'demo-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
  standalone: false,
})
export class ProductGridComponent {
  @Input() products: DaffProduct[];
}
