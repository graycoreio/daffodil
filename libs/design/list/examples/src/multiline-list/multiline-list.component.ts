import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_LIST_COMPONENTS } from '@daffodil/design/list';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'multiline-list',
  templateUrl: './multiline-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_LIST_COMPONENTS,
  ],
})
export class MultilineListComponent {}
