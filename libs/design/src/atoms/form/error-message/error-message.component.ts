import { Component, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'daff-error-message',
  template: '<ng-content></ng-content>',
  styleUrls: ['./error-message.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DaffErrorMessageComponent {
  
  @HostBinding('class.daff-error-message') class = true;
}
