/* eslint-disable quote-props */
import { Directive } from '@angular/core';

@Directive({
  selector: '[daffHeroTagline]',
  host: {
    'class': 'daff-hero__tagline',
  },
})

export class DaffHeroTaglineDirective {}
