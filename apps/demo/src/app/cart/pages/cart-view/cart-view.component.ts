import {
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import { DaffCartFacade } from '@daffodil/cart/state';

@Component({
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss'],
  standalone: false,
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
