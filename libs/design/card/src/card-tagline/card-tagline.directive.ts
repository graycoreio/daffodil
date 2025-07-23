/* eslint-disable quote-props */
import { Directive } from '@angular/core';

@Directive({
  selector: '[daffCardTagline]',
  host: {
    'class': 'daff-card__tagline',
  },
})
export class DaffCardTaglineDirective {}
