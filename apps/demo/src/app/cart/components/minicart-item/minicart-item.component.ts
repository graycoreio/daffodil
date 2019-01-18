import { Component, Input } from '@angular/core';
import { CartItem } from '@daffodil/core';
import { Router } from '@angular/router';

@Component({
  selector: 'demo-minicart-item',
  host: {'class': 'minicart-item'},
  templateUrl: './minicart-item.component.html',
  styleUrls: ['./minicart-item.component.scss'],
})
export class MiniCartItemComponent {

  @Input() item: CartItem;

  constructor(
    private router: Router
  ) { }

  redirectToProduct() {
    this.router.navigateByUrl('/product/' + this.item.product_id);
  }
}
