import { Component } from '@angular/core';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'callout-with-grid',
  templateUrl: './callout-with-grid.component.html',
  styleUrls: ['./callout-with-grid.component.scss'],
})
export class CalloutWithGridComponent {
  faMobile = faMobile;
}
