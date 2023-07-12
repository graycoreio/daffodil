import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffToastSubtitle]',
})

export class DaffToastSubtitleDirective {

  @HostBinding('class.daff-toast__subtitle') class = true;
}
