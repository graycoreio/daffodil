/* eslint-disable quote-props */
import { Directive } from '@angular/core';

@Directive({
  selector: '[daffCalloutIcon]',
  host: {
    'class': 'daff-callout__icon',
  },
})

export class DaffCalloutIconDirective {}
