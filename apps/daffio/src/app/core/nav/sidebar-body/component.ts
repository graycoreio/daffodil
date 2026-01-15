import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Type,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  map,
  Observable,
} from 'rxjs';

import {
  DaffTreeData,
  DAFF_TREE_COMPONENTS,
} from '@daffodil/design/tree';
import {
  DAFF_DOCS_DESIGN_PATH,
  DAFF_DOCS_PATH,
  DAFF_DOCS_STOREFRONT_PATH,
} from '@daffodil/docs-utils';
import { DaffRouterDataService } from '@daffodil/router';

import { DaffioRouteWithNavLinks } from '../link/route.type';
import { DaffioNavLink } from '../link/type';

const isComponent = (link: DaffioNavLink | Type<unknown>): link is Type<unknown> =>
  typeof link === 'function';

@Component({
  selector: 'daffio-nav-links-sidebar-body',
  templateUrl: './component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    RouterLink,
    DAFF_TREE_COMPONENTS,
  ],
})
export class DaffioNavSidebarBodyComponent implements OnInit {
  tree$: Observable<DaffTreeData<unknown>>;

  constructor(
    private routerData: DaffRouterDataService<DaffioRouteWithNavLinks['data']>,
  ) {}

  ngOnInit(): void {
    this.tree$ = this.routerData.data$.pipe(
      map((data) => this.buildTree(data.daffioNavLinks)),
    );
  }

  private buildTree(links: Array<DaffioNavLink | Type<unknown>>): DaffTreeData<unknown> {
    return {
      title: '',
      url: '',
      id: 'root',
      data: {},
      items: links.map((link, index) => {
        if (isComponent(link)) {
          return {
            title: 'Design',
            url: `/${DAFF_DOCS_PATH}/${DAFF_DOCS_DESIGN_PATH}`,
            id: `design`,
            data: {},
            items: [
              {
                title: 'Components',
                url: `/${DAFF_DOCS_PATH}/${DAFF_DOCS_DESIGN_PATH}`,
                id: 'design-components',
                data: {},
                items: [],
              },
              {
                title: 'Storefront UI',
                url: `/${DAFF_DOCS_PATH}/${DAFF_DOCS_STOREFRONT_PATH}`,
                id: 'design-storefront-ui',
                data: {},
                items: [],
              },
            ],
          };
        }
        return {
          title: link.title,
          url: link.url,
          id: `link-${index}`,
          data: { external: link.external },
          items: [],
        };
      }),
    };
  }
}
