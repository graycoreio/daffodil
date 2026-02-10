import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';

import { DaffManageContainerLayoutDirective } from '@daffodil/design';

/**
 * Navbar is a flexible and extensible component that provides a container for navigation elements.
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'nav[daff-navbar]',
  styleUrl: './navbar.component.scss',
  template: '<ng-content></ng-content>',
  hostDirectives: [
    { directive: DaffManageContainerLayoutDirective },
  ],
  host: {
    class: 'daff-navbar',
    '[class.elevated]': 'elevated()',
    '[class.blurred]': 'blurred()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffNavbarComponent {
  /**
   * Whether the navbar should have an elevated appearance with a shadow effect.
   */
  elevated = input(false);

  /**
   * Whether the navbar should have a blurred background effect.
   */
  blurred = input(false);
}
