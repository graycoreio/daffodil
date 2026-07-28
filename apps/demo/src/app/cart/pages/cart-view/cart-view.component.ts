import { AsyncPipe } from '@angular/common';
import {
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import { DaffCartFacade } from '@daffodil/cart/state';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import { DAFF_SPINNER_COMPONENTS } from '@daffodil/design/spinner';

import { CartComponent } from '../../components/cart/cart.component';

@Component({
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss'],
  imports: [
    AsyncPipe,
    DAFF_SPINNER_COMPONENTS,
    DAFF_CONTAINER_COMPONENTS,
    CartComponent,
  ],
})
export class DemoCartViewComponent implements OnInit {

  cart$: Observable<DaffCart>;
  loading$: Observable<boolean>;

  constructor(private cartFacade: DaffCartFacade) {}

  ngOnInit() {
    this.cart$ = this.cartFacade.cart$;
    this.loading$ = this.cartFacade.loading$;
  }
}
