import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'daff-error-message',
  template: '<ng-content></ng-content>',
  styleUrls: ['./error-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class DaffErrorMessageComponent {
  @HostBinding('class.daff-error-message') class = true;
}
