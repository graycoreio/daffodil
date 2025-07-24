/* eslint-disable quote-props */
import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

import {
  DaffColorableDirective,
  DaffManageContainerLayoutDirective,
} from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'nav[daff-navbar]',
  styleUrls: ['./navbar.component.scss'],
  template: '<ng-content></ng-content>',
  hostDirectives: [
    { directive: DaffManageContainerLayoutDirective },
    {
      directive: DaffColorableDirective,
      inputs: ['color'],
    },
  ],
  host: {
    'class': 'daff-navbar',
    '[class.raised]': 'raised',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffNavbarComponent {
  @Input() raised = false;
}
