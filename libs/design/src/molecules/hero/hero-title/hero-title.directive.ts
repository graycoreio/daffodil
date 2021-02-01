import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffHeroTitle]',
})

export class DaffHeroTitleDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-hero__title') class = true;
}
