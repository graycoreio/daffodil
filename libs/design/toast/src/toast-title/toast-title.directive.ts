import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffToastTitle]',
  standalone: true,
})

export class DaffToastTitleDirective {

  @HostBinding('class.daff-toast__title') class = true;
}
