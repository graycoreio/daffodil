import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffArticleEncapsulatedDirective } from '@daffodil/design';
import { DAFF_BASIC_BUTTON_COMPONENTS } from '@daffodil/design/button';
import { DAFF_NAVBAR_COMPONENTS } from '@daffodil/design/navbar';

@Component({
  selector: 'basic-navbar-example',
  templateUrl: './basic-navbar.component.html',
  styleUrls: ['./basic-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_NAVBAR_COMPONENTS,
    DAFF_BASIC_BUTTON_COMPONENTS,
  ],
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
  ],
})
export class BasicNavbarExampleComponent {}
