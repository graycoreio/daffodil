import { AsyncPipe } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffCart } from '@daffodil/cart';
import { DaffCartFacade } from '@daffodil/cart/state';

import { CartItemCountComponent } from '../cart-item-count/cart-item-count.component';
import { CartItemsComponent } from '../cart-items/cart-items.component';
import { CartSidebarComponent } from '../cart-sidebar/cart-sidebar.component';

@Component({
  selector: 'demo-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [
    AsyncPipe,
    CartItemsComponent,
    CartSidebarComponent,
    CartItemCountComponent,
  ],
})
export class CartComponent implements OnInit {

  @Input() cart: DaffCart;

  itemCount$: Observable<number>;
  isCartEmpty$: Observable<boolean>;

  constructor(
    private facade: DaffCartFacade,
  ) {}

  ngOnInit(): void {
    this.itemCount$ = this.facade.cart$.pipe(
      map((cart) => cart?.items.length),
    );
    this.isCartEmpty$ = this.facade.isCartEmpty$;
  }
}
