/* eslint-disable quote-props */
import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { DaffSidebarSide } from '../helper/sidebar-side';
import { DaffSidebarComponent } from '../sidebar/sidebar.component';

/**
 * Sidebar header is a child component of the sidebar that is used to display a header container,
 * positioned at the top of a sidebar. It includes an optional title (`[daffSidebarHeaderTitle]`)
 * slot and a slot to render any custom content.
 *
 * ```html
 * <daff-sidebar-header></daff-sidebar-header>
 * ```
 */
@Component({
  selector: 'daff-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'daff-sidebar-header',
    '[class.dismissible]': 'dismissible',
  },
  imports: [
    FaIconComponent,
  ],
})
export class DaffSidebarHeaderComponent {
  /**
   * @docs-private
   */
  faTimes = faTimes;

  /** Whether or not a sidebar header should display the close icon. */
  @Input() dismissible = false;

  /**
   * Output event triggered when the close icon is clicked.
   */
  @Output() closeSidebar: EventEmitter<DaffSidebarSide> = new EventEmitter();

  constructor(private sidebar: DaffSidebarComponent) {}

  /**
   * @docs-private
   */
  onCloseSidebar(event: Event) {
    this.closeSidebar.emit(this.sidebar.side);
  }
}
