/* eslint-disable quote-props */
import { Directive } from '@angular/core';

@Directive({
  selector: '[daffToastMessage]',
  host: {
    'class': 'daff-toast__message',
  },
})

export class DaffToastMessageDirective {}
