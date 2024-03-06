import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffProgressBarLabel]',
})
export class DaffProgressBarLabelDirective {
  @HostBinding('class.daff-progress-bar__label') class = true;
}
