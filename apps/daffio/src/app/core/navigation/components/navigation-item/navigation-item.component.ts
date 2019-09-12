import { Component, OnInit, Input } from '@angular/core';
import { DaffioNavigationTree } from '../../navigation-tree';

@Component({
  selector: 'daffio-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss']
})
export class DaffioNavigationItemComponent {
  @Input() tree: DaffioNavigationTree = { id: '', title: '', children: []};

  @Input() level: number = 0;

  get nextLevel() {
    return this.level + 1;
  }
}
