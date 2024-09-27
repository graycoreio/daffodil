import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffHeroBody]',
  standalone: true,
})

export class DaffHeroBodyDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-hero__body') class = true;
}
