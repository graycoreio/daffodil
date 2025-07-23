/* eslint-disable quote-props */
import { Directive } from '@angular/core';

@Directive({
  selector: '[daffHeroBody]',
  host: {
    'class': 'daff-hero__body',
  },
})

export class DaffHeroBodyDirective {}
