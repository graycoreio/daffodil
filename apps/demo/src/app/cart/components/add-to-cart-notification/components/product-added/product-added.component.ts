import {
  Component,
  Input,
} from '@angular/core';

import { DaffProduct } from '@daffodil/product';

@Component({
  selector: 'demo-product-added',
  templateUrl: './product-added.component.html',
  styleUrls: ['./product-added.component.scss'],
  standalone: false,
})
export class ProductAddedComponent {

  @Input() qty: number;
  @Input() product: DaffProduct;
}
