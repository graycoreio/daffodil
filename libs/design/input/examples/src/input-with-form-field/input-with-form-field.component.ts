import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faUser,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

import {
  DaffFormFieldModule,
  DaffInputComponent,
  DaffPrefixSuffixModule,
} from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input-with-form-field',
  templateUrl: './input-with-form-field.component.html',
  styles: [`
    daff-form-field {
      max-width: 320px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffFormFieldModule,
    DaffInputComponent,
    FaIconComponent,
    DaffPrefixSuffixModule,
  ],
})
export class InputWithFormFieldComponent {
  faUser = faUser;
  faCircleXmark = faCircleXmark;
}
