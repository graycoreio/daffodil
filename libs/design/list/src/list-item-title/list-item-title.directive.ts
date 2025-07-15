import { Directive } from '@angular/core';

/* eslint-disable quote-props */
@Directive({
  selector: '[daffListItemTitle]',
  host: {
    'class': 'daff-list-item__title',
  },
})

export class DaffListItemTitleDirective {}
