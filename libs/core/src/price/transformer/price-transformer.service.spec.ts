import { TestBed } from '@angular/core/testing';

import { DaffPriceDecimalTransformer } from './price-transformer.service';
import { DaffPriceDecimalConfig } from '../tokens/price-decimal-config.token';
import { DAFF_PRICE_DECIMAL_CONFIG_NOT_INTEGER_ERROR } from '../errors/price-decimal-config-error';

describe('DaffPriceDecimalTransformer - valid configuration', () => {
	let service: DaffPriceDecimalTransformer;

	beforeEach(() => {
    TestBed.configureTestingModule({
			providers: [
				{ provide: DaffPriceDecimalConfig, useValue: 2 },
				DaffPriceDecimalTransformer
			]
		});

		service = TestBed.get(DaffPriceDecimalTransformer);
  });

	describe('transformLongToInt', () => {
		
		it('should transform a long number to the expected integer', () => {
			expect(service.transformLongToInt(2.124)).toEqual(212);
		});
	});

	describe('transformIntToLong', () => {
		
		it('should transform an integer number to the expected long number', () => {
			expect(service.transformIntToLong(215)).toEqual(2.15);
		});
	});
});

describe('DaffPriceDecimalTransformer - invalid configuration', () => {
	let service: DaffPriceDecimalTransformer;

	beforeEach(() => {
    TestBed.configureTestingModule({
			providers: [
				{ provide: DaffPriceDecimalConfig, useValue: 2.12 },
				DaffPriceDecimalTransformer
			]
		});

		service = TestBed.get(DaffPriceDecimalTransformer);
  });

		
	it('should throw an error', () => {
		expect(() => {
			service.ngOnInit();
		}).toThrowError(DAFF_PRICE_DECIMAL_CONFIG_NOT_INTEGER_ERROR);
	});
});