import {
  Component,
  Input,
  HostBinding,
} from '@angular/core';
import { Router } from '@angular/router';

import { DaffCartItem } from '@daffodil/cart';

@Component({
  selector: 'demo-minicart-item',
  templateUrl: './minicart-item.component.html',
  styleUrls: ['./minicart-item.component.scss'],
  standalone: false,
})
export class MiniCartItemComponent {
  @HostBinding('class.demo-minicart-item') class = true;

  @Input() item: DaffCartItem;

  constructor(
    private router: Router,
  ) { }

  redirectToProduct() {
    this.router.navigateByUrl('/product/' + this.item.product_id);
  }
}
