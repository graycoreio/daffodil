import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  DaffTreeData,
  DAFF_TREE_COMPONENTS,
} from '@daffodil/design/tree';

@Component({
  selector: 'basic-tree-example',
  templateUrl: './basic-tree.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_TREE_COMPONENTS,
    RouterLink,
  ],
})
export class BasicTreeExampleComponent {
  tree: DaffTreeData<unknown> = {
    title: 'Shop',
    items: [
      {
        title: 'Men',
        items: [
          {
            title: 'Clothing',
            items: [
              { title: 'Shirts', url: '#', id: '', items: [], data: {}},
              { title: 'Pants', url: '#', id: '', items: [], data: {}},
              { title: 'Outerwear', url: '#', id: '', items: [], data: {}},
            ],
            url: '#',
            id: '',
            data: {},
          },
          { title: 'Shoes', url: '#', id: '', items: [], data: {}},
          { title: 'Accessories', url: '#', id: '', items: [], data: {}},
        ],
        url: '#',
        id: '',
        data: {},
      },
      {
        title: 'Women',
        items: [
          {
            title: 'Clothing',
            items: [
              { title: 'Dresses', url: '#', id: '', items: [], data: {}},
              { title: 'Tops', url: '#', id: '', items: [], data: {}},
              { title: 'Skirts', url: '#', id: '', items: [], data: {}},
            ],
            url: '#',
            id: '',
            data: {},
          },
          { title: 'Shoes', url: '#', id: '', items: [], data: {}},
          { title: 'Bags', url: '#', id: '', items: [], data: {}},
        ],
        url: '#',
        id: '',
        data: {},
      },
      {
        title: 'Sale',
        items: [],
        url: '#',
        id: '',
        data: {},
      },
    ],
    url: '',
    id: '',
    data: {},
  };
}
