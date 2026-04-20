import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

/**
 * @deprecated Deprecated in version 0.92.0. Will be removed in version 0.95.0.
 */
@Component ({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'a[daff-link-set-item]',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DaffLinkSetItemComponent {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-link-set__item') class = true;
}
