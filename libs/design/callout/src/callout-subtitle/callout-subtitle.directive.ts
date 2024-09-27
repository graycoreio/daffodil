import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffCalloutSubtitle]',
  standalone: true,
})

export class DaffCalloutSubtitleDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-callout__subtitle') class = true;
}
