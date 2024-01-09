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
  RouterEvent,
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
  tap,
} from 'rxjs';

import { daffioRouterNamedViewsCollect } from '../helpers/collect-named-views';
import { DaffioRouterNamedViews } from '../models/named-views.type';

/**
 * Renders a named view of the current route.
 * The named view should be defined in the route configuration
 * according to the {@link RouteWithNamedViews} type.
 */
@Directive({
  selector: '[daffioRouterNamedViewOutlet]',
})
export class DaffioRouterNamedViewOutletDirective implements OnInit, OnChanges, OnDestroy {
  private _destroyed = new Subject<boolean>();
  /**
   * The outlet, mirrored from `daffioRouterNamedViewOutlet`.
   * Its much simpler to have a single value that we can observe
   * to decide when to render instead of trying to render in response
   * to the synchronous `ngOnChanges` or the async `component$`.
   */
  private outlet$ = new BehaviorSubject<string>('');
  private namedViews$: Observable<DaffioRouterNamedViews>;

  /**
   * The router named view to attempt to render.
   */
  @Input() daffioRouterNamedViewOutlet: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private viewRef: ViewContainerRef,
  ) {}

  ngOnDestroy(): void {
    this._destroyed.next(true);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.daffioRouterNamedViewOutlet) {
      this.outlet$.next(changes.daffioRouterNamedViewOutlet.currentValue);
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
     * in time to catch router events.
     * On subsequent route changes, `route.url` will not change (why????)
     * so we use router events instead.
     */
    this.namedViews$ = merge(
      this.router.events.pipe(
        filter((e) => e instanceof NavigationEnd),
      ),
      this.route.url,
    ).pipe(
      map(() => this.route.snapshot),
      map(daffioRouterNamedViewsCollect),
    );
    combineLatest([
      this.namedViews$,
      this.outlet$,
    ]).pipe(
      map(([namedViews, outlet]) => namedViews?.[outlet]),
      distinctUntilChanged(),
      takeUntil(this._destroyed),
    ).subscribe((component) => {
      this.viewRef.clear();
      if (component) {
        this.viewRef.createComponent(component);
      }
    });
  }
}
