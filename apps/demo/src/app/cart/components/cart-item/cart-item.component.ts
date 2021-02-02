import {
  Component,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';

import { DaffCartItem } from '@daffodil/cart';
import {
  DaffCartFacade,
  DaffCartItemDelete,
  DaffCartItemUpdate,
} from '@daffodil/cart/state';

@Component({
  selector: 'demo-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {

  @Input() item: DaffCartItem;

  constructor(
		private router: Router,
		private facade: DaffCartFacade,
  ) { }

  redirectToProduct() {
    this.router.navigateByUrl('/product/' + this.item.product_id);
  }

  onQtyChanged(qty) {
    this.facade.dispatch(new DaffCartItemUpdate(this.item.item_id, { qty }));
  }

  removeItem() {
    this.facade.dispatch(new DaffCartItemDelete(this.item.item_id));
  }
}
