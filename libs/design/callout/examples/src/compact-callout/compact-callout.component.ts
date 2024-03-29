import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'compact-callout',
  templateUrl: './compact-callout.component.html',
  styleUrls: ['./compact-callout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompactCalloutComponent {
  faMobile = faMobile;
}
