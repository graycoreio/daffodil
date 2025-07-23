/* eslint-disable quote-props */
import { Directive } from '@angular/core';

@Directive({
  selector: '[daffCardContent]',
  host: {
    'class': 'daff-card__content',
  },
})
export class DaffCardContentDirective {}
