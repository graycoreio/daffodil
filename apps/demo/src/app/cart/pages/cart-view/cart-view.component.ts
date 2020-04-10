import { Component, OnInit } from '@angular/core';
import { DaffCart, DaffCartFacade } from '@daffodil/cart';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class DemoCartViewComponent implements OnInit {

	cart$: Observable<DaffCart>;
	loading$: Observable<boolean>;

	constructor(private cartFacade: DaffCartFacade<DaffCart>) {}

	ngOnInit() {
		this.cart$ = this.cartFacade.cart$;
		this.loading$ = this.cartFacade.loading$;
	}
}
