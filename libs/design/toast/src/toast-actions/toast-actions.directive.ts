/* eslint-disable quote-props */
import { Directive } from '@angular/core';

@Directive({
  selector: '[daffToastActions]',
  host: {
    'class': 'daff-toast__actions',
  },
})

export class DaffToastActionsDirective {}
