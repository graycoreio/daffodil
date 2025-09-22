import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faEnvelope,
  faInfo,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import {
  DaffMenuComponent,
  DaffMenuModule,
} from '@daffodil/design/menu';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'menu-with-template-ref',
  templateUrl: './menu-with-template-ref.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FaIconComponent,
    DaffMenuModule,
  ],
})
export class MenuWithTemplateRefComponent {
  @ViewChild('menu', { read: DaffMenuComponent, static: true }) menu;

  faUser = faUser;
  faInfo = faInfo;
  faEnvelope = faEnvelope;
}
