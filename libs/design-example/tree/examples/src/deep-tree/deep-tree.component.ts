import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  DaffTreeData,
  DaffTreeModule,
} from '@daffodil/design/tree';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'deep-tree',
  templateUrl: './deep-tree.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DaffTreeModule, RouterLink],
})
export class DeepTreeComponent {
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
