import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import {
  DaffFormFieldModule,
  DaffNativeSelectModule,
} from '@daffodil/design';


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'native-select-with-form-field',
  templateUrl: './native-select-with-form-field.component.html',
  styles: [`
    daff-form-field {
      max-width: 320px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DaffFormFieldModule, DaffNativeSelectModule, FontAwesomeModule],
})
export class NativeSelectWithFormFieldComponent {
  faUser = faUser;
}
