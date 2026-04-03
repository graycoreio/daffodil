import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { AsyncPipe } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import {
  select,
  Store,
} from '@ngrx/store';
import {
  combineLatest,
  map,
  Observable,
  of,
  switchMap,
} from 'rxjs';

import { DaffDocsFacade } from '@daffodil/docs/state';
import {
  DaffSearchIncremental,
  DaffSearchIncrementalFacade,
  DaffSearchPageFacade,
} from '@daffodil/search/state';
import {
  DAFF_SEARCH_DOCS_RESULT_KIND,
  DaffSearchDocsResult,
} from '@daffodil/search-docs';

import { DAFF_DOCS_SEARCH_RESULT_ICONS } from '../../constants/result-icons.const';
import { DaffioDocsSearchResultItemDirective } from '../../directives/search-result-item/search-result-item.directive';
import { DaffDocsSearchStoreResult } from '../../state/actions';
import { DaffioDocsSearchStateFeatureSlice } from '../../state/reducers';
import { selectDaffioDocsSearchRecentResultsSelector } from '../../state/selectors';
import { DaffioDocsSearchFieldComponent } from '../search-field/search-field.component';
import { DaffioDocsSearchFooterComponent } from '../search-footer/search-footer.component';

@Component({
  selector: 'daffio-docs-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'daffio-docs-search-modal',
    '(keydown)': 'onKeydown($event)',
  },
  imports: [
    DaffioDocsSearchFieldComponent,
    DaffioDocsSearchResultItemDirective,
    DaffioDocsSearchFooterComponent,
    FaIconComponent,
    AsyncPipe,
    RouterLink,
  ],
})

export class DaffioDocsSearchModalComponent implements AfterViewInit, OnInit {
  readonly faClockRotateLeft = faClockRotateLeft;
  readonly RESULT_ICONS = DAFF_DOCS_SEARCH_RESULT_ICONS;

  @ViewChildren(DaffioDocsSearchResultItemDirective) items: QueryList<DaffioDocsSearchResultItemDirective>;

  recentQueries$: Observable<Array<DaffSearchDocsResult>>;
  docsResults$: Observable<Array<DaffSearchDocsResult>>;
  loading$: Observable<boolean>;

  readonly formControl = new FormControl<string>('');

  private keyManager: ActiveDescendantKeyManager<DaffioDocsSearchResultItemDirective>;

  constructor(
    private incrementalFacade: DaffSearchIncrementalFacade,
    private docsFacade: DaffDocsFacade<DaffSearchDocsResult>,
    private store: Store<DaffioDocsSearchStateFeatureSlice>,
    private facade: DaffSearchPageFacade,
    private destroyRef: DestroyRef,
  ) {}

  onClick(id: DaffSearchDocsResult['id']): void {
    this.facade.dispatch(new DaffDocsSearchStoreResult(id));
  }

  ngOnInit(): void {
    this.loading$ = this.incrementalFacade.loading$;
    this.recentQueries$ = this.store.pipe(
      select(selectDaffioDocsSearchRecentResultsSelector),
      switchMap((ids) => this.docsFacade.docsEntities$.pipe(
        map((entities) => ids?.map((id) => entities[id]) || []),
      )),
    );
    this.docsResults$ = combineLatest([
      this.incrementalFacade.searchResultIds$,
      this.formControl.valueChanges,
    ]).pipe(
      switchMap(([ids, query]) =>
        query
          ? this.docsFacade.docsEntities$.pipe(
            map((entities) => ids[DAFF_SEARCH_DOCS_RESULT_KIND]?.map((id) => entities[id]) || []),
          )
          : of([]),
      ),
    );
    this.formControl.valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe((val) => this.onInput(val));
  }

  ngAfterViewInit() {
    this.keyManager = new ActiveDescendantKeyManager(this.items).withWrap();

    this.items.changes.subscribe(() => {
      if (this.items.length > 0) {
        this.keyManager.setFirstItemActive();
      }
    });

    if (this.items.length > 0) {
      this.keyManager.setFirstItemActive();
    }
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const activeItem = this.keyManager.activeItem;
      if (activeItem) {
        activeItem.navigate();
      }
    } else {
      this.keyManager.onKeydown(event);
    }
  }

  onInput(query: string) {
    if (query) {
      this.facade.dispatch(new DaffSearchIncremental(query));
    }
  }
}
