import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[daffFeatureSubtitle]'
})
export class DaffFeatureSubtitleDirective {

  @HostBinding('class.daff-feature__subtitle') class = true;
}
