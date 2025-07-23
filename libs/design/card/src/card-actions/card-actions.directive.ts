/* eslint-disable quote-props */
import { Directive } from '@angular/core';

@Directive({
  selector: '[daffCardActions]',
  host: {
    'class': 'daff-card__actions',
  },
})
export class DaffCardActionsDirective {}
