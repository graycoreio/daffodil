import { Component, Input } from '@angular/core';

import { DaffSpecificNavigationTree } from '@daffodil/navigation';

@Component({
  selector: 'demo-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.scss']
})
export class SidebarListComponent {
  @Input() tree: DaffSpecificNavigationTree;

  @Input() level = 0;

  get nextLevel() {
    return this.level + 1;
  }

  getNavigationPath(path: string) {
    return '/' + path;
  }
}
