import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import {
  DaffPrefixDirective,
  DaffSuffixDirective,
} from '@daffodil/design';
import { DaffButtonComponent } from '@daffodil/design/button';

@Component({
  selector: 'basic-button-example',
  templateUrl: './basic-button.component.html',
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffButtonComponent,
    DaffPrefixDirective,
    DaffSuffixDirective,
    FaIconComponent,
  ],
})
export class BasicButtonExampleComponent {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
}
