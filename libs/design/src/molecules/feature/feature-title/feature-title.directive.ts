import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[daffFeatureTitle]'
})
export class DaffFeatureTitleDirective {

  @HostBinding('class.daff-feature__title') private class = true;
}
