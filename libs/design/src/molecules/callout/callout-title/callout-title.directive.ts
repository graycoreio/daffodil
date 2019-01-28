import { Directive } from '@angular/core';

@Directive({
  selector: '[daffCalloutTitle]',
  host: {'class': 'daff-callout__title'}
})

export class DaffCalloutTitleDirective {}
