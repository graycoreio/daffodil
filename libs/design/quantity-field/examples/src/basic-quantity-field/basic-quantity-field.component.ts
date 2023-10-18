import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-quantity-field',
  templateUrl: './basic-quantity-field.component.html',
  styleUrls: ['./basic-quantity-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicQuantityFieldComponent {
  control = new UntypedFormControl(1);
}
