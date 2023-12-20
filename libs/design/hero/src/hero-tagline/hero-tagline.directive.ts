import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffHeroTagline]',
})

export class DaffHeroTaglineDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-hero__tagline') class = true;
}
