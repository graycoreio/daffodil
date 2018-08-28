import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar-view',
  templateUrl: './sidebar-view.component.html'
})
export class SidebarViewComponent implements OnInit {

  items: string[];

  ngOnInit() {
    this.items = [
      'women\'s',
      'men\'s',
      'accessories',
      'sale'
    ];
  }
}
