import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffImageModule } from '@daffodil/design/image';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-image',
  templateUrl: './basic-image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DaffImageModule],
})
export class BasicImageComponent {

}
