import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { DaffProduct } from '@daffodil/product';

@Component({
  selector: 'demo-product-added',
  templateUrl: './product-added.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./product-added.component.scss'],
})
export class ProductAddedComponent {

  @Input() qty: number;
  @Input() product: DaffProduct;
}
