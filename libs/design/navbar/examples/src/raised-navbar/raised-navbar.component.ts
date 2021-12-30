import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'raised-navbar',
  templateUrl: './raised-navbar.component.html',
  styleUrls: ['./raised-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaisedNavbarComponent {}
