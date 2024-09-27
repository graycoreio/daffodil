import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffCalloutBody]',
  standalone: true,
})

export class DaffCalloutBodyDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-callout__body') class = true;
}
