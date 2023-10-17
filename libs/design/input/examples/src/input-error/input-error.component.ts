import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  Validators,
} from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input-error',
  templateUrl: './input-error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputErrorComponent {
  control: UntypedFormControl = new UntypedFormControl('test@example.com', [
    Validators.email,
    Validators.required,
  ]);
}
