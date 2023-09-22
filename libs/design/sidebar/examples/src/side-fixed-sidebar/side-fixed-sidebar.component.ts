import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'side-fixed-sidebar',
  templateUrl: './side-fixed-sidebar.component.html',
  styleUrls: ['side-fixed-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideFixedSidebarComponent {
  overOpen = false;

  openOverSidebar(){
    this.overOpen = !this.overOpen;
  }

  closeOverSidebar(){
    this.overOpen = false;
  }
}
