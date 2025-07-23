/* eslint-disable quote-props */
import { Directive } from '@angular/core';

@Directive({
  selector: '[daffCalloutTagline]',
  host: {
    'class': 'daff-callout__tagline',
  },
})

export class DaffCalloutTaglineDirective {}
