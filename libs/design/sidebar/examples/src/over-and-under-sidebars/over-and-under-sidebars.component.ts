import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'over-and-under-sidebars',
  templateUrl: './over-and-under-sidebars.component.html',
  styleUrls: ['over-and-under-sidebars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverandUnderSidebarsComponent {
  open = false;

  sideControl: FormControl = new FormControl('left');
  modeControl: FormControl = new FormControl('over');

  openSidebar() {
    this.open = !this.open;
  }

  closeSidebar() {
    this.open = false;
  }
}
