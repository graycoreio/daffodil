import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { DaffFlatButtonComponent } from '@daffodil/design/button';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'flat-button',
  templateUrl: './flat-button.component.html',
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
    DaffFlatButtonComponent,
    FaIconComponent,
  ],
})
export class FlatButtonComponent {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
}
