/* eslint-disable quote-props */
import { Directive } from '@angular/core';

@Directive({
  selector: '[daffToastTitle]',
  host: {
    'class': 'daff-toast__title',
  },
})

export class DaffToastTitleDirective {}
