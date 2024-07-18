import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'disabled-quantity-field',
  templateUrl: './disabled-quantity-field.component.html',
  styleUrls: ['./disabled-quantity-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledQuantityFieldComponent {
  control = new UntypedFormControl({ value : '1', disabled: true });
}
