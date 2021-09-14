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

import { DaffioGuideList } from '../../../docs/models/guide-list';

const visit = (guide: DaffioGuideList): DaffTreeData<unknown> => ({
  id: guide.id,
  title: guide.title,
  url: guide.path,
  items: [],
  data: {},
});

@Component({
  selector: 'daffio-guides-nav',
  templateUrl: './guides-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioGuidesNavComponent {

  _guideList: DaffioGuideList;
  /**
   * The guide list to render
   */
  @Input()
  get guideList(): DaffioGuideList {
    return this._guideList;
  };
  set guideList(val: DaffioGuideList) {
    if(this._guideList !== val) {
      this._tree = daffTransformTreeInPlace(val, visit, 'children');
    }
    this._guideList = val;
  }

  _tree: DaffTreeData<unknown>;

  activeRouterLinkConfiguration: RouterLinkActive['routerLinkActiveOptions'] = {
    exact: true,
  };
}
