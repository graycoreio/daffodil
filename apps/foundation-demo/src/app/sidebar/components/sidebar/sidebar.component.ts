import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  }
})
export class SidebarComponent {

  @Input() showSidebar: boolean;
  @Output() toggleShowSidebar: EventEmitter<any> = new EventEmitter();

  onClick(event) {
    if(this.showSidebar && !this.isSidebarElement(event)) {
      this.toggleShowSidebar.emit();
    }
  }

  private isSidebarElement(event) {
    return event.path[0].classList[0].includes('sidebar');
  }

  onToggleShowSidebar() {
    this.toggleShowSidebar.emit()
  }
}
