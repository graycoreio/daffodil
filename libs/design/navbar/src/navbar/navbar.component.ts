import {
  Component,
  Input,
  HostBinding,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DaffNavbarComponent {

  @Input() raised = false;

  /**
   * @docs-private
   */
  @HostBinding('class.daff-navbar--raised') get raisedClass() {
    return this.raised;
  };

  /**
   * @docs-private
   */
  @HostBinding('class.daff-navbar') hostClass = true;
}
