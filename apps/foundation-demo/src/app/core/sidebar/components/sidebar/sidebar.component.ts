import { Component, Output, EventEmitter } from '@angular/core';
import { DaffSidebarComponent } from '../../../../design/molecules/sidebar/sidebar/sidebar.component';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})
export class SidebarComponent extends DaffSidebarComponent {
  @Output() close: EventEmitter<void> = new EventEmitter();

  _onCloseClick() : void {
    this.close.emit();
  }
}
