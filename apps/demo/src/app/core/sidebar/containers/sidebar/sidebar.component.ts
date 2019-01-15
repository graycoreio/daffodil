import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'demo-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarContainer {

  @Output() close: EventEmitter<any> = new EventEmitter();

  onClose() {
    this.close.emit();
  }
}
