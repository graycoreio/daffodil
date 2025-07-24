/* eslint-disable quote-props */
import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'daff-modal-content',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'daff-modal-content',
  },
})
export class DaffModalContentComponent {}
