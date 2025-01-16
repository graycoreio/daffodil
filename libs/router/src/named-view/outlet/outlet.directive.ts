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
  BehaviorSubject,
  Observable,
  Subject,
  combineLatest,
  distinctUntilChanged,
  map,
  takeUntil,
} from 'rxjs';

import { DaffRouterNamedViews } from '../models/public_api';
import { DaffRouterNamedViewService } from '../service/named-view.service';

/**
 * Renders a named view of the current route.
 * The named view should be defined in the route configuration
 * according to the {@link DaffRouteWithNamedViews} type.
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[daffRouterNamedViewOutlet]',
  standalone: false,
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
    private namedViewService: DaffRouterNamedViewService,
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
    this._namedViews$ = this.namedViewService.namedViews$;

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
