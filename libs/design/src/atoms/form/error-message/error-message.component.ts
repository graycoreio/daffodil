import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'daff-error-message',
  template: '<ng-content></ng-content>',
  styleUrls: ['./error-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffErrorMessageComponent {}
