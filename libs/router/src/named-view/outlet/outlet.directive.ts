import {
  ViewContainerRef,
  Directive,
  OnChanges,
  Input,
  OnInit,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
} from '@angular/router';
import {
  BehaviorSubject,
  Observable,
  Subject,
  combineLatest,
  distinctUntilChanged,
  filter,
  map,
  merge,
  takeUntil,
} from 'rxjs';

import { daffRouterNamedViewsCollect } from '../helpers/collect-named-views';
import { DaffRouterNamedViews } from '../models/public_api';

/**
 * Renders a named view of the current route.
 * The named view should be defined in the route configuration
 * according to the {@link DaffRouteWithNamedViews} type.
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[daffRouterNamedViewOutlet]',
})
export class DaffRouterNamedViewOutletDirective implements OnInit, OnChanges, OnDestroy {
  private _destroyed = new Subject<boolean>();
  /**
   * The outlet, mirrored from `daffRouterNamedViewOutlet`.
   * Its much simpler to have a single value that we can observe.
   */
  private _outlet$ = new BehaviorSubject<string>('');
  private _namedViews$!: Observable<DaffRouterNamedViews>;

  /**
   * The router named view to attempt to render.
   */
  @Input() daffRouterNamedViewOutlet!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private viewRef: ViewContainerRef,
  ) {}

  ngOnDestroy(): void {
    this._destroyed.next(true);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['daffRouterNamedViewOutlet']) {
      this._outlet$.next(changes['daffRouterNamedViewOutlet'].currentValue);
    }
  }

  ngOnInit(): void {
    /**
     * Because data won't reemit for route changes and
     * the top-level data probably won't have named views
     * anyway, use `url` and router events to listen for route changes
     * and pull named views from nested data in the snapshot.
     *
     * On first page load, this directive will likely not be instantiated
     * in time to catch router events so route.url emits for this case.
     * On subsequent route changes, `route.url` will not change (why????)
     * so we use router events instead.
     */
    this._namedViews$ = merge(
      this.router.events.pipe(
        filter((e) => e instanceof NavigationEnd),
      ),
      this.route.url,
    ).pipe(
      map(() => this.route.snapshot),
      map(daffRouterNamedViewsCollect),
    );
    combineLatest([
      this._namedViews$,
      this._outlet$,
    ]).pipe(
      map(([namedViews, outlet]) => namedViews?.[outlet]),
      distinctUntilChanged(),
      takeUntil(this._destroyed),
    ).subscribe((component) => {
      this.viewRef.clear();
      if (component) {
        const ref = this.viewRef.createComponent(component);
        ref.changeDetectorRef.markForCheck();
      }
    });
  }
}