import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { DaffStrokedButtonComponent } from '@daffodil/design/button';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'stroked-button',
  templateUrl: './stroked-button.component.html',
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
    DaffStrokedButtonComponent,
    FaIconComponent,
  ],
})
export class StrokedButtonComponent {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
}
