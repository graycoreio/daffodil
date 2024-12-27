import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import {
  DaffFormFieldModule,
  DaffNativeSelectModule,
} from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'native-select-disabled',
  templateUrl: './native-select-disabled.component.html',
  styles: [`
    daff-form-field {
      max-width: 320px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DaffFormFieldModule, DaffNativeSelectModule],
})
export class NativeSelectDisabledComponent {
  isDisabled = true;
}
