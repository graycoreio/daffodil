import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffCalloutIcon]',
  standalone: true,
})

export class DaffCalloutIconDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-callout__icon') class = true;
}
