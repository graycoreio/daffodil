import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import {
  DaffRovingTabIndexBoundaryDirective,
  DaffRovingTabIndexDirective,
} from '@daffodil/design';

@Component({
  selector: 'rti-nested-groups-example',
  templateUrl: './nested-groups.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffRovingTabIndexDirective,
    DaffRovingTabIndexBoundaryDirective,
  ],
})
export class NestedGroupsRtiExampleComponent {}
