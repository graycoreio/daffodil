import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'contained-navbar',
  templateUrl: './contained-navbar.component.html',
  styleUrls: ['./contained-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainedNavbarComponent {}
