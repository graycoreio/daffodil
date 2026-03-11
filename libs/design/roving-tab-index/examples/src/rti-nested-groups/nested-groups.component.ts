import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffRovingTabIndexDirective } from '@daffodil/design/roving-tab-index';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'rti-nested-groups',
  templateUrl: './nested-groups.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffRovingTabIndexDirective,
  ],
})
export class NestedGroupsRtiComponent {}
