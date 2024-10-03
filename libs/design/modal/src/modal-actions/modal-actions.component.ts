import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'daff-modal-actions',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DaffModalActionsComponent {
  @HostBinding('class.daff-modal-actions') class = true;
}
