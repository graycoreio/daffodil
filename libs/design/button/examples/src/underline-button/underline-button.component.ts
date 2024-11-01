import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { DaffUnderlineButtonComponent } from '@daffodil/design/button';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'underline-button',
  templateUrl: './underline-button.component.html',
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffUnderlineButtonComponent,
    FaIconComponent,
  ],
})
export class UnderlineButtonComponent {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
}
