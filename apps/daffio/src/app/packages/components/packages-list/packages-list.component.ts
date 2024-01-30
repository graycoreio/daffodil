import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { RouterLinkActive } from '@angular/router';

import {
  DaffTreeData,
  daffTransformTreeInPlace,
} from '@daffodil/design/tree';

import { DaffioPackagesList } from '../../../docs/models/packages-list';

const visit = (guide: DaffioPackagesList): DaffTreeData<unknown> => ({
  id: guide.id,
  title: guide.title,
  url: guide.path,
  items: [],
  data: {},
});

@Component({
  selector: 'daffio-docs-packages-list',
  templateUrl: './packages-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioDocsPackagesListComponent {

  _packagesList: DaffioPackagesList;
  /**
   * The guide list to render
   */
  @Input()
  get packagesList(): DaffioPackagesList {
    return this._packagesList;
  };
  set packagesList(val: DaffioPackagesList) {
    if(this._packagesList !== val) {
      this._tree = daffTransformTreeInPlace(val, visit, 'children');
    }
    this._packagesList = val;
  }

  _tree: DaffTreeData<unknown>;

  activeRouterLinkConfiguration: RouterLinkActive['routerLinkActiveOptions'] = {
    exact: true,
  };
}
