import {
  Injectable,
  inject,
} from '@angular/core';
import {
  Observable,
  Subject,
  merge,
  EMPTY,
} from 'rxjs';
import {
  map,
  startWith,
  catchError,
  switchMap,
  filter,
  distinctUntilChanged,
} from 'rxjs/operators';

import {
  DaffDevToolsConfigService,
  DaffDriverConfig,
} from '@daffodil/dev-tools';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductDriver,
  DaffProductServiceInterface,
} from '@daffodil/product/driver';

export interface ProductListState {
  data: DaffProduct[];
  error: any;
  loading: boolean;
}

@Injectable()
export class ProductListStateService {
  private productDriver: DaffProductServiceInterface = inject(DaffProductDriver);
  private retryTrigger$ = new Subject<void>();
  private devToolsConfig = inject(DaffDevToolsConfigService, { optional: true });

  readonly state$: Observable<ProductListState> = this.createStateObservable();

  private createStateObservable(): Observable<ProductListState> {
    const driverChanges$ = this.devToolsConfig
      ? this.devToolsConfig.getDriverConfig('@daffodil/driver').pipe(
        filter((config): config is DaffDriverConfig => !!config),
        distinctUntilChanged((a, b) => a.currentDriver === b.currentDriver),
      )
      : EMPTY;

    const triggers$ = merge(
      driverChanges$,
      this.retryTrigger$,
    ).pipe(startWith(null));

    return triggers$.pipe(
      switchMap(() =>
        this.productDriver.getAll().pipe(
          map((products) => ({ data: products, error: null, loading: false })),
          catchError((error) => [{ data: [], error, loading: false }]),
          startWith({ data: [], error: null, loading: true }),
        ),
      ),
    );
  }

  retry(): void {
    this.retryTrigger$.next();
  }
}
