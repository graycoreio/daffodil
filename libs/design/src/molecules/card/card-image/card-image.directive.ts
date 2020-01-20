import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[daffCardImage]'
})
export class DaffCardImageDirective {
  
  @HostBinding('class.daff-card__image') class = true;
}