import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_ACCORDION_COMPONENTS } from '@daffodil/design/accordion';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-accordion',
  templateUrl: './basic-accordion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_ACCORDION_COMPONENTS,
  ],
})
export class BasicAccordionComponent {}
