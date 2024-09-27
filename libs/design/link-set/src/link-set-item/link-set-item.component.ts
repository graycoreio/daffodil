import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

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
