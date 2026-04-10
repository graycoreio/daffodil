import {
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  daffTransformTree,
  DaffTreeData,
  DAFF_TREE_COMPONENTS,
} from '@daffodil/design/tree';
import { DaffNavigationTree } from '@daffodil/navigation';

const transformNavigationTree = (node: DaffNavigationTree): DaffTreeData<unknown> => ({
  id: node.id,
  title: node.name,
  url: node.url,
  items: [],
  data: {},
});

@Component({
  selector: 'demo-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.scss'],
  imports: [
    RouterModule,
    DAFF_TREE_COMPONENTS,
  ],
})
export class SidebarListComponent implements OnChanges {
  @Input() tree: DaffNavigationTree;

  treeData: DaffTreeData<unknown>;

  ngOnChanges(): void {
    if (this.tree) {
      this.treeData = daffTransformTree(this.tree, transformNavigationTree, 'children');
    }
  }
}
