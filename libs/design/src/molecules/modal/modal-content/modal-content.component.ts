import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'daff-modal-content',
  template: '<ng-content></ng-content>',
  styleUrls: ['./modal-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffModalContentComponent {}
