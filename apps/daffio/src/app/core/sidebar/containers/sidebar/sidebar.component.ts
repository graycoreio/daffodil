import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'daffio-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class DaffioSidebarContainer {

  links: any[] = [
    {path: '/developers', title: 'Developers'},
    {path: '/solutions', title: 'Solutions'},
    {path: '/documentation', title: 'Documentation'},
    {path: '/support', title: 'Support'}
  ];

  @Output() close: EventEmitter<any> = new EventEmitter();

  onClose() {
    this.close.emit();
  }
}
