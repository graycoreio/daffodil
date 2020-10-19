import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[daffCardTitle]'
})
export class DaffCardTitleDirective {

  @HostBinding('class.daff-card__title') private class = true;
}
