import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'fixed-and-over-sidebar',
  templateUrl: './fixed-and-over-sidebar.component.html',
  styleUrls: [
    'fixed-and-over-sidebar.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FixedAndOverSidebarComponent {
  overOpen = false;

  openOverSidebar(){
    this.overOpen = !this.overOpen;
  }

  closeOverSidebar(){
    this.overOpen = false;
  }
}
