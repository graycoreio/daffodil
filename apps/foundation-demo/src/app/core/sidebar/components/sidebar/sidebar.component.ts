import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {

  @Input() showSidebar: boolean;
  @Output() toggleSidebarVisibility: EventEmitter<any> = new EventEmitter();

  onClick(event) {
    if(this.showSidebar && !this.isSidebarElement(event)) {
      this.toggleSidebarVisibility.emit();
    }
  }

  private isSidebarElement(event) {
    return event.path[0].classList[0].includes('sidebar');
  }

  onToggleSidebarVisibility() {
    this.toggleSidebarVisibility.emit()
  }
}
