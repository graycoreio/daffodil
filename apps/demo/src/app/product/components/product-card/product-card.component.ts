import {
  Component,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';

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
