import {
  Component,
  HostBinding,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffArticleEncapsulatedDirective } from '@daffodil/design';

/**
 * @deprecated Deprecated in version 0.92.0. Will be removed in version 0.95.0.
 *
 * DaffLinkSetComponent is a component for displaying a two or more links.
 */
@Component({
  selector: 'daff-link-set',
  template: '<ng-content></ng-content>',
  styleUrls: ['./link-set.component.scss'],
  hostDirectives: [{
    directive: DaffArticleEncapsulatedDirective,
  }],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DaffLinkSetComponent {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-link-set') class = true;
}
