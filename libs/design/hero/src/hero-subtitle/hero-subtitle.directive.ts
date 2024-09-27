import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffHeroSubtitle]',
  standalone: true,
})

export class DaffHeroSubtitleDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-hero__subtitle') class = true;
}
