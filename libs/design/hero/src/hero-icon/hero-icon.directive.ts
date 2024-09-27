import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffHeroIcon]',
  standalone: true,
})

export class DaffHeroIconDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-hero__icon') class = true;
}
