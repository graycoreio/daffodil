import { PipeTransform } from '@angular/core';
/**
 * @docs
 * A mock CurrencyPipe that does nothing to a given input.
 * This pipe is useful for asserting that a CurrencyPipe is in use via a spy,
 * but ignoring the actual underlying implementation
 */
export declare class DaffMockCurrencyPipe implements PipeTransform {
    transform(value: number): void;
}
