import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffHeroIcon]',
})

export class DaffHeroIconDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-hero__icon') class = true;
}
