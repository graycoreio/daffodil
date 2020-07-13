import { daffAdd, daffSubtract, daffMultiply, daffDivide } from './long-arithmetic';

describe('Core | Utils | Long Arithmetic', () => {

	describe('daffAdd', () => {
		
		it('should add long decimals and return the expected value', () => {
			expect(1.005 + 0.99 + 0.002).not.toEqual(1.997);
			expect(daffAdd(1.005, 0.99, 0.002)).toEqual(1.997);
		});
	});

	describe('daffSubtract', () => {
		
		it('should subtract long decimals and return the expected value', () => {
			expect(1.005 - 0.99 - 0.002).not.toEqual(0.013);
			expect(daffSubtract(1.005, 0.99, 0.002)).toEqual(0.013);
		});
	});

	describe('daffMultiply', () => {
		
		it('should multiply long decimals and return the expected value', () => {
			expect(1.005 * 0.99 * 0.002).not.toEqual(0.0019899);
			expect(daffMultiply(1.005, 0.99, 0.002)).toEqual(0.0019899);
		});
	});

	describe('daffDivide', () => {
		
		it('should divide long decimals and return the expected value', () => {
			expect(1.005 / 5 / 0.001).not.toEqual(201);
			expect(daffDivide(1.005, 5, 0.001)).toEqual(201);
		});
	});
});
