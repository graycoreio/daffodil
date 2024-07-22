import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import {
  BehaviorSubject,
  Observable,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs';

import {
  DaffTreeData,
  DaffTreeModule,
  daffTransformTree,
} from '@daffodil/design/tree';

import { DaffioDocList } from '../../models/doc-list';

const visit = (guide: DaffioDocList): DaffTreeData<unknown> => ({
  id: guide.id,
  title: guide.title,
  url: guide.path || '',
  items: [],
  data: {},
});

@Component({
  selector: 'daffio-docs-list',
  templateUrl: './docs-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    DaffTreeModule,
  ],
})
export class DaffioDocsListComponent implements OnInit {
  private _list$ = new BehaviorSubject<DaffioDocList>(null);

  /**
   * The guide list to render
   */
  @Input()
  set list(val: DaffioDocList) {
    this._list$.next(val);
  }

  tree$: Observable<DaffTreeData<unknown>>;
  readonly activeRouterLinkConfiguration: RouterLinkActive['routerLinkActiveOptions'] = {
    exact: true,
  };

  ngOnInit(): void {
    this.tree$ = this._list$.pipe(
      filter((list) => !!list),
      distinctUntilChanged(),
      map((list) => daffTransformTree(list, visit, 'children')),
    );
  }
}
