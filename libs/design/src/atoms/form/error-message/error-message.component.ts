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
})
export class DaffErrorMessageComponent {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-error-message') class = true;

  /**
   * @docs-private
   *
   * Sets the aria-live of an error message to polite.
   */
  @HostBinding('attr.aria-live') ariaLive = 'polite';
}
