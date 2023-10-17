import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'card-orientation',
  templateUrl: './card-orientation.component.html',
  styleUrls: ['./card-orientation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardOrientationComponent {
  faMapMarked = faMapMarked;

  orientationControl: UntypedFormControl = new UntypedFormControl('');

  options = [
    { value: '', label: 'Default' },
    { value: 'vertical', label: 'Vertical' },
    { value: 'horizontal', label: 'Horizontal' },
  ];
}
