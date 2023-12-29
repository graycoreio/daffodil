import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  ContentChild,
} from '@angular/core';

import { DaffPrefixDirective } from '@daffodil/design';

@Component({
  selector:
    'a[daff-menu-item]' + ',' +
    'button[daff-menu-item]',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffMenuItemComponent {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-menu-item') class = true;

  /**
   * Sets the role of the component to menuitem.
   *
   * @docs-private
   */
  @HostBinding('attr.role') role = 'menuitem';

  /**
   * @docs-private
   */
  @ContentChild(DaffPrefixDirective) _prefix: DaffPrefixDirective;
}
