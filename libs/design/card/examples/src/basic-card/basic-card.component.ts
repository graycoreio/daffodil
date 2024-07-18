import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicCardComponent {
  faMapMarked = faMapMarked;
}
