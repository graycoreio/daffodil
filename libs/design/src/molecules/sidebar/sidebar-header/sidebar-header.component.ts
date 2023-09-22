import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'daff-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class DaffSidebarHeaderComponent {
  faTimes = faTimes;

  @HostBinding('class.daff-sidebar-header') class = true;

  @HostBinding('class.hide-button') get hideClass() {
    return this.hideCloseButton;
  }

  @Input() hideCloseButton = false;

  @Output() closeSidebar: EventEmitter<void> = new EventEmitter();

  onCloseSidebar(event: Event) {
    this.closeSidebar.emit();
  }
}
