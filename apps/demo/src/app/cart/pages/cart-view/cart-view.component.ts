import { Component } from '@angular/core';
import { DaffCartFacade, DaffCartItemAdd, DaffCartClear, DaffCartItemUpdate, DaffCartLoad, DaffCartCreate, DaffCartItemDelete } from '@daffodil/cart';

@Component({
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class DemoCartViewComponent {
	constructor(private cartFacade: DaffCartFacade) {}

	itemIds;

	ngOnInit() {
		this.cartFacade.cart$.subscribe(cart => {
			console.log(cart)
			if(cart) {
				this.itemIds = cart.items.map(item => item.item_id);
				console.log(this.itemIds);
			}
		});

		this.cartFacade.dispatch(new DaffCartCreate());
		this.cartFacade.dispatch(new DaffCartLoad());
		// this.cartFacade.dispatch(new DaffCartItemAdd({ productId: "24-MB04", qty: 2}));
	}

	updateQty() {
		this.cartFacade.dispatch(new DaffCartItemUpdate(this.itemIds[0], {qty: 1}));

	}

	addToCart() {
		this.cartFacade.dispatch(new DaffCartItemAdd({ productId: "24-MB04", qty: 2}));
	}

	removeFirstItem() {
		this.cartFacade.dispatch(new DaffCartItemDelete(this.itemIds[0]));
	}

	clearCart() {
		this.cartFacade.dispatch(new DaffCartClear());
	}
}
