import {
  Component,
  Input,
} from '@angular/core';

import { DaffProduct } from '@daffodil/product';

@Component({
  selector: 'demo-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: false,
})
export class ProductCardComponent {

  @Input() product: DaffProduct;
}
