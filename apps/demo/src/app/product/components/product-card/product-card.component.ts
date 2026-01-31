import {
  Component,
  Input,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { DaffProduct } from '@daffodil/product';

@Component({
  selector: 'demo-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  imports: [
    RouterLink,
  ],
})
export class ProductCardComponent {

  @Input() product: DaffProduct;
}
