import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'daff-modal-actions',
  template: '<ng-content></ng-content>',
  styleUrls: ['./modal-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffModalActionsComponent { }
