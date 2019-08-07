import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[daffCalloutTitle]'
})

export class DaffCalloutTitleDirective {

  @HostBinding('class.daff-callout__title') class = true;
}
