import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffListModule } from '@daffodil/design/list';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-list',
  templateUrl: './basic-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DaffListModule],
})
export class BasicListComponent {}
