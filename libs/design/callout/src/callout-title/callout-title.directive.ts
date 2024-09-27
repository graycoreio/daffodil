import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffCalloutTitle]',
  standalone: true,
})

export class DaffCalloutTitleDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-callout__title') class = true;
}
