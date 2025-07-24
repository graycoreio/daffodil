/* eslint-disable quote-props */
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'daff-modal-actions',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'daff-modal-actions',
  },
})
export class DaffModalActionsComponent {}
