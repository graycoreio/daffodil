/* eslint-disable quote-props */
import { Directive } from '@angular/core';

@Directive({
  selector: '[daffHeroIcon]',
  host: {
    'class': 'daff-hero__icon',
  },
})

export class DaffHeroIconDirective {}
