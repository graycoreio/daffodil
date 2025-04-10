import { NgIf } from '@angular/common';
import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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
  imports: [
    FaIconComponent,
    NgIf,
  ],
})
export class DaffSidebarHeaderComponent {
  /**
   * @docs-private
   */
  faTimes = faTimes;

  /**
   * @docs-private
   */
  @HostBinding('class.daff-sidebar-header') class = true;

  /** Whether or not a sidebar header should display the close icon. */
  @Input() @HostBinding('class.dismissible') dismissible = false;

  /**
   * Output event triggered when the close icon is clicked.
   */
  @Output() closeSidebar: EventEmitter<void> = new EventEmitter();

  /**
   * @docs-private
   */
  onCloseSidebar(event: Event) {
    this.closeSidebar.emit();
  }
}
