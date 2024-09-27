import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffCardTagline]',
  standalone: true,
})
export class DaffCardTaglineDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-card__tagline') class = true;
}
