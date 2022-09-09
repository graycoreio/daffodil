import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'under-sidebar',
  templateUrl: './under-sidebar.component.html',
  styleUrls: [
    'under-sidebar.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnderSidebarComponent {
  openLeft = false;
  openRight = false;

  openLeftSidebar(){
    this.openLeft = !this.openLeft;
  }

  openRightSidebar(){
    this.openRight = !this.openRight;
  }

  closeSidebar(){
    this.openLeft = false;
    this.openRight = false;
  }
}
