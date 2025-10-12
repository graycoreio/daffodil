import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faEnvelope,
  faInfo,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { DaffMenuModule } from '@daffodil/design/menu';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'menu-content',
  templateUrl: './menu-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffMenuModule,
    FaIconComponent,
  ],
})
export class MenuContentComponent {
  faUser = faUser;
  faInfo = faInfo;
  faEnvelope = faEnvelope;
}
