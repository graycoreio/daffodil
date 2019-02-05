import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'currency'})
export class DaffMockCurrencyPipe implements PipeTransform {
  transform(value: number) {};
}
