import { Component, Output, EventEmitter } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'demo-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarContainer {
  faTimes = faTimes;

  @Output() close: EventEmitter<any> = new EventEmitter();

  onClose() {
    this.close.emit();
  }
}
