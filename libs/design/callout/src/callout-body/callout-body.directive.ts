/* eslint-disable quote-props */
import { Directive } from '@angular/core';

@Directive({
  selector: '[daffCalloutBody]',
  host: {
    'class': 'daff-callout__body',
  },
})

export class DaffCalloutBodyDirective {}
