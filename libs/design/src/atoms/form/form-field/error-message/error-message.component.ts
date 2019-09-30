import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'daff-error-message',
  template: '<ng-content></ng-content>',
  styleUrls: ['./error-message.component.scss'],
  host: {
    'class': 'daff-error-message'
  },
  encapsulation: ViewEncapsulation.None
})
export class DaffErrorMessageComponent {}
