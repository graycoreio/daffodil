import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'daffio-feature-comparison',
  templateUrl: './feature-comparison.component.html',
  styleUrls: ['./feature-comparison.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class DaffioFeatureComparisonComponent {
  faCheck = faCheck;
  faTimes = faTimes;
}
