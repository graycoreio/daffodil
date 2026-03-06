import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faArrowDown,
  faArrowTurnDown,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';

import { DAFF_IMAGE_COMPONENTS } from '@daffodil/design/image';

@Component({
  selector: 'daffio-docs-search-footer',
  templateUrl: './search-footer.component.html',
  styleUrl: './search-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FaIconComponent,
    DAFF_IMAGE_COMPONENTS,
  ],
})

export class DaffioDocsSearchFooterComponent {
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faArrowTurnDown = faArrowTurnDown;

  @HostBinding('class.daffio-docs-search-footer') private class = true;
}
