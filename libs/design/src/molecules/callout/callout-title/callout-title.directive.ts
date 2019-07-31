import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[daffCalloutTitle]',
  host: {'class': 'daff-callout__title'}
})

export class DaffCalloutTitleDirective {

  @HostBinding('class.daff-callout__title') class = true;
}
