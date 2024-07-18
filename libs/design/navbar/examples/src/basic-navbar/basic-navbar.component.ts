import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-navbar',
  templateUrl: './basic-navbar.component.html',
  styleUrls: ['./basic-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicNavbarComponent {}
