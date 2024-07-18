import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'raised-button',
  templateUrl: './raised-button.component.html',
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaisedButtonComponent {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
}
