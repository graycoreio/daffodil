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
  faTimes = faTimes;

  @HostBinding('class.daff-sidebar-header') class = true;

  /** Whether or not a sidebar header displays the close icon */
  @Input() @HostBinding('class.dismissible') dismissible = false;

  /**
   * Output event triggered when the close icon is clicked.
   */
  @Output() closeSidebar: EventEmitter<void> = new EventEmitter();

  onCloseSidebar(event: Event) {
    this.closeSidebar.emit();
  }
}
