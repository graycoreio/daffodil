import {
  Component,
  Inject,
  Input,
  OnInit,
} from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

import { DaffCartItem } from '@daffodil/cart';
import {
  DaffCartFacade,
  DaffCartItemDelete,
  DaffCartItemUpdate,
} from '@daffodil/cart/state';
import {
  DaffBase64Service,
  DaffBase64ServiceToken,
} from '@daffodil/core';

@Component({
  selector: 'demo-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  standalone: false,
})
export class CartItemComponent implements OnInit {

  @Input() item: DaffCartItem;
  quantity: UntypedFormControl;

  constructor(
    private router: Router,
    private facade: DaffCartFacade,
    private formBuilder: UntypedFormBuilder,
    @Inject(DaffBase64ServiceToken) private base64: DaffBase64Service,
  ) { }

  ngOnInit() {
    this.quantity = this.formBuilder.control(this.item.qty);
  }

  get quantityId() {
    return `cart-quantity-${this.base64.encode(this.item.id)}`;
  }

  redirectToProduct() {
    this.router.navigateByUrl('/product/' + this.item.product_id);
  }

  removeItem() {
    this.facade.dispatch(new DaffCartItemDelete(this.item.item_id));
  }
}
