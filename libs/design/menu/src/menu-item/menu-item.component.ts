/* eslint-disable quote-props */
import {
  Component,
  ChangeDetectionStrategy,
  ContentChild,
} from '@angular/core';

import { DaffPrefixDirective } from '@daffodil/design';

@Component({
  selector:
    'a[daff-menu-item]' + ',' +
    'button[daff-menu-item]',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  host: {
    'class': 'daff-menu-item',
    'role': 'menuitem',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffMenuItemComponent {
  /**
   * @docs-private
   */
  @ContentChild(DaffPrefixDirective) _prefix: DaffPrefixDirective;
}
