import {
  Component,
  Input,
} from '@angular/core';

import { DaffNavigationTree } from '@daffodil/navigation';

@Component({
  selector: 'demo-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.scss'],
  standalone: false,
})
export class SidebarListComponent {
  @Input() tree: DaffNavigationTree;

  @Input() level = 0;

  get nextLevel() {
    return this.level + 1;
  }
}
