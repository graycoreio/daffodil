import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[daffHeroTitle]',
})

export class DaffHeroTitleDirective {
  
  @HostBinding('class.daff-hero__title') class = true;
}
