import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import {
  DAFF_FORM_FIELD_COMPONENTS,
  DaffNativeSelectModule,
} from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'native-select-disabled',
  templateUrl: './native-select-disabled.component.html',
  styles: [`
    daff-form-field {
      max-width: 25rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DaffNativeSelectModule,
  ],
})
export class NativeSelectDisabledComponent {
}
