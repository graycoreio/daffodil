import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input-with-form-field',
  templateUrl: './input-with-form-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputWithFormFieldComponent {

}
