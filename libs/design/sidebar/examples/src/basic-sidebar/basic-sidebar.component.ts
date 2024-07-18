import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-sidebar',
  templateUrl: './basic-sidebar.component.html',
  styleUrls: ['./basic-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicSidebarComponent {

}
