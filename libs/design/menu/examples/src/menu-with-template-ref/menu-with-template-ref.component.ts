import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  faEnvelope,
  faInfo,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { DaffMenuComponent } from '@daffodil/design/menu';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'menu-with-template-ref',
  templateUrl: './menu-with-template-ref.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuWithTemplateRefComponent {
  @ViewChild('menu', { read: DaffMenuComponent, static: true }) menu;

  faUser = faUser;
  faInfo = faInfo;
  faEnvelope = faEnvelope;
}
