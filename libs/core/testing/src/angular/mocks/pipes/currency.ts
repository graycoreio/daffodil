import {
  Pipe,
  PipeTransform,
} from '@angular/core';

/**
 * @docs
 * A mock CurrencyPipe that does nothing to a given input.
 * This pipe is useful for asserting that a CurrencyPipe is in use via a spy,
 * but ignoring the actual underlying implementation
 */
@Pipe({
  name: 'currency',
  standalone: false,
})
export class DaffMockCurrencyPipe implements PipeTransform {
  transform(value: number) {};
}
