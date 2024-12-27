import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffNativeSelectModule } from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-native-select',
  templateUrl: './basic-native-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DaffNativeSelectModule],
})
export class BasicNativeSelectComponent {

}
