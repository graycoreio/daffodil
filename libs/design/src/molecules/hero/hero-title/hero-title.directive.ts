import { Directive } from '@angular/core';

@Directive({
  selector: '[daffHeroTitle]',
  host: {
    'class': 'daff-hero__title'
  }
})
export class DaffHeroTitleDirective {}
