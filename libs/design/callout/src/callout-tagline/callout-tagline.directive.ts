import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffCalloutTagline]',
  standalone: true,
})

export class DaffCalloutTaglineDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-callout__tagline') class = true;
}
