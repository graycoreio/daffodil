import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'hero-with-grid',
  templateUrl: './hero-with-grid.component.html',
  styleUrls: ['./hero-with-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroWithGridComponent {
  faMobile = faMobile;
}
