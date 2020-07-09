import { Inject, OnInit, Injectable } from '@angular/core';

import { DAFF_PRICE_DECIMAL_CONFIG_NOT_INTEGER_ERROR } from '../errors/price-decimal-config-error';
import { DaffPriceDecimalConfig } from '../tokens/price-decimal-config.token';

/**
 * A service to transform prices into integers to avoid javascript "long" arithmetic.
 */
@Injectable({
	providedIn: 'root'
})
export class DaffPriceDecimalTransformer implements OnInit {

	constructor(
		@Inject(DaffPriceDecimalConfig) private decimalConfig: number
	) {}

	ngOnInit() {
		if(!Number.isInteger(this.decimalConfig)) {
			throw Error(DAFF_PRICE_DECIMAL_CONFIG_NOT_INTEGER_ERROR)
		}
	}

	/**
	 * Transforms a long number into an equivalent integer value.
	 * @param price The price to be transformed into an integer.
	 */
	transformLongToInt(price: number): number {
		return Math.round(Math.pow(10, this.decimalConfig) * price);
	}

	/**
	 * Transforms an integer into an equivalent long value.
	 * @param price The price to be transformed into an integer.
	 */
	transformIntToLong(price: number): number {
		return price / Math.pow(10, this.decimalConfig);
	}
}