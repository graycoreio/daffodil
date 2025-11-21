import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  DAFF_TREE_COMPONENTS,
  DaffTreeData,
} from '@daffodil/design/tree';

@Component({
  selector: 'deep-tree-example',
  templateUrl: './deep-tree.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_TREE_COMPONENTS,
    RouterLink,
  ],
})
export class DeepTreeExampleComponent {
  tree: DaffTreeData<unknown> = {
    title: 'Root',
    items: [
      {
        title: 'Example Children',
        items: [
          {
            title: 'Example Child',
            url: '#',
            id: '',
            items: [
              {
                title: 'Nested Child',
                url: '#',
                id: '',
                items: [],
                data: {},
              },
            ],
            data: {},
          },
        ],
        url: '#',
        id: '',
        data: {},
      },
      {
        title: 'Example Link',
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
