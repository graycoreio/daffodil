import { Injectable } from '@angular/core';

import { DaffCart, DaffCartItem } from '@daffodil/cart';

import { DaffCartFactory } from '../factories/public_api';

/**
 * A service for sharing common data across all cart inmemory services.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryCartDataService {

  private cart: DaffCart;

  constructor(
		private cartFactory: DaffCartFactory
  ) {
		this.cart = this.cartFactory.create();
	}

	get(): DaffCart {
		return this.cart;
	}

	getId(): string | number {
		return this.cart.id;
	}

	getItems(): DaffCartItem[] {
		return this.cart.items;
	}

	getItem(index: number): DaffCartItem {
		return this.cart.items[index];
	}

	setItem(index: number, item: DaffCartItem) {
		this.cart.items[index] = item;
	}

	removeItem(index: number) {
		this.cart.items = this.cart.items.splice(index + 1, this.cart.items.length);
	}
}
