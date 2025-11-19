import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_LIST_COMPONENTS } from '@daffodil/design/list';

@Component({
  selector: 'basic-list-example',
  templateUrl: './basic-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_LIST_COMPONENTS,
  ],
})
export class BasicListExampleComponent {}
