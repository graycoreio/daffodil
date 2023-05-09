import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  faEnvelope,
  faInfo,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'menu-content',
  templateUrl: './menu-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuContentComponent {
  faUser = faUser;
  faInfo = faInfo;
  faEnvelope = faEnvelope;
}
