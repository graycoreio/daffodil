import {
  Injectable,
  Optional,
  OnDestroy,
} from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  Observable,
  Subject,
  Subscription,
} from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  startWith,
  switchMap,
} from 'rxjs/operators';

import {
  DaffDevToolsConfigService,
  DaffDriverConfig,
} from '@daffodil/dev-tools';
import { DaffNavigationTree } from '@daffodil/navigation';
import {
  DaffNavigationServiceInterface,
} from '@daffodil/navigation/driver';
import { DaffInMemoryNavigationService } from '@daffodil/navigation/driver/in-memory';
import { DaffMagentoNavigationService } from '@daffodil/navigation/driver/magento';
import { DaffShopifyNavigationService } from '@daffodil/navigation/driver/shopify';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class DynamicSwitchNavigationService implements DaffNavigationServiceInterface<DaffNavigationTree>, OnDestroy {
  private currentDriverService: DaffNavigationServiceInterface<DaffNavigationTree>;
  private configSubscription?: Subscription;
  private driverChange$ = new Subject<boolean>();

  public readonly driverChanged$ = this.driverChange$.asObservable();

  constructor(
    private inMemoryNavigationDriver: DaffInMemoryNavigationService,
    private magentoDriver: DaffMagentoNavigationService,
    private shopifyDriver: DaffShopifyNavigationService,
    private apollo: Apollo,
    @Optional() private devToolsConfig?: DaffDevToolsConfigService,
  ) {
    this.currentDriverService = this.inMemoryNavigationDriver;
    this.subscribeToDevToolsConfig();
  }

  ngOnDestroy(): void {
    this.driverChange$.complete();
  }

  switchDriver(driverType: string): void {
    if (driverType === 'in-memory' || driverType === 'fake') {
      this.currentDriverService = this.inMemoryNavigationDriver;
      this.driverChange$.next(true);
    } else if (driverType === 'magento' || driverType === 'mageos') {
      this.apollo.client.clearStore().then(() => {
        this.currentDriverService = this.magentoDriver;
        this.driverChange$.next(true);
      });
    } else if (driverType === 'shopify') {
      this.apollo.use('shopify').client.clearStore().then(() => {
        this.currentDriverService = this.shopifyDriver;
        this.driverChange$.next(true);
      });
    } else {
      return;
    }
  }

  private subscribeToDevToolsConfig(): void {
    if (this.devToolsConfig) {
      this.configSubscription = this.devToolsConfig
        .getDriverConfig('@daffodil/driver')
        .pipe(
          filter((config): config is DaffDriverConfig => !!config),
          distinctUntilChanged(),
          takeUntilDestroyed(),
        )
        .subscribe((config: DaffDriverConfig) => {
          this.switchDriver(config.currentDriver);
        });
    }
  }

  getTree(): Observable<DaffNavigationTree> {
    return this.driverChange$.pipe(
      startWith(false),
      switchMap(() => this.currentDriverService.getTree()),
    );
  }

  get(categoryId: string): Observable<DaffNavigationTree> {
    return this.driverChange$.pipe(
      startWith(false),
      switchMap(() => this.currentDriverService.get(categoryId)),
    );
  }
}
