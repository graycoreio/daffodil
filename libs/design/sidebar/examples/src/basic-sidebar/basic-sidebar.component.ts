import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-sidebar',
  templateUrl: './basic-sidebar.component.html',
  styles: ['daff-sidebar-viewport { height: 300px }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicSidebarComponent {

}
