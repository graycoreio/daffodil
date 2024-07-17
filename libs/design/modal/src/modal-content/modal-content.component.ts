import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'daff-modal-content',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffModalContentComponent {
  @HostBinding('class.daff-modal-content') class = true;
}
