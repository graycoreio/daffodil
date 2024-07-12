import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffAccordionModule } from '@daffodil/design/accordion';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-accordion',
  templateUrl: './basic-accordion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffAccordionModule,
  ],
})
export class BasicAccordionComponent {}
