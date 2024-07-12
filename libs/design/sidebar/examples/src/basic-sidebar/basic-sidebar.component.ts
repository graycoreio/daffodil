import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffSidebarModule } from '@daffodil/design/sidebar';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-sidebar',
  templateUrl: './basic-sidebar.component.html',
  styleUrls: ['./basic-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DaffSidebarModule],
})
export class BasicSidebarComponent {

}
