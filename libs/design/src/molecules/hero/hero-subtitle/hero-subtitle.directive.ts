import { Directive } from '@angular/core';

@Directive({
  selector: '[daffHeroSubtitle]',
  host: {
    'class': 'daff-hero__subtitle'
  }
})
export class DaffHeroSubtitleDirective {}
