import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[daffHeroSubtitle]'
})

export class DaffHeroSubtitleDirective {

  @HostBinding('class.daff-hero__subtitle') class = true;
}
