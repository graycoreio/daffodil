import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'daffio-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class DaffioSidebarContainer {

  links: any[] = [
    {path: '/why-pwa', title: 'Why PWA'},
  ];

  @Output() close: EventEmitter<any> = new EventEmitter();

  onClose() {
    this.close.emit();
  }
}
