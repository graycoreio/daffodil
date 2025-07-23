/* eslint-disable quote-props */
import { Directive } from '@angular/core';

@Directive({
  selector: '[daffCardIcon]',
  host: {
    'class': 'daff-card__icon',
  },
})
export class DaffCardIconDirective {}
