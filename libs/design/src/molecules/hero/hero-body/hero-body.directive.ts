import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffHeroBody]',
})

export class DaffHeroBodyDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-hero__body') class = true;
}
