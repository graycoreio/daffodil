import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'icon-list',
  templateUrl: './icon-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconListComponent {
  faInfoCircle = faInfoCircle;
}
