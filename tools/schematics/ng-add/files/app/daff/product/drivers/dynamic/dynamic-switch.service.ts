import {
  Injectable,
  Optional,
  OnDestroy,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductServiceInterface,
  DaffProductDriverResponse,
} from '@daffodil/product/driver';
import { DaffInMemoryProductService } from '@daffodil/product/driver/in-memory';
import { DaffMagentoProductService } from '@daffodil/product/driver/magento';
import { DaffShopifyProductService } from '@daffodil/product/driver/shopify';

import { FakeProductDriverService } from '../fake/fake-product-driver.service';

@Injectable({
  providedIn: 'root',
})
export class DynamicSwitchDriverService implements DaffProductServiceInterface, OnDestroy {
  private currentDriverService: DaffProductServiceInterface;
  private configSubscription?: Subscription;
  private driverChange$ = new Subject<boolean>();

  public readonly driverChanged$ = this.driverChange$.asObservable();

  constructor(
    private fakeProductDriver: FakeProductDriverService,
    private inMemoryProductDriver: DaffInMemoryProductService,
    private magentoDriver: DaffMagentoProductService,
    private shopifyDriver: DaffShopifyProductService,
    private apollo: Apollo,
    @Optional() private devToolsConfig?: DaffDevToolsConfigService,
  ) {
    this.currentDriverService = this.fakeProductDriver;
    this.subscribeToDevToolsConfig();
  }

  ngOnDestroy(): void {
    this.driverChange$.complete();
  }

  switchDriver(driverType: string): void {
    if (driverType === 'in-memory') {
      this.currentDriverService = this.inMemoryProductDriver;
      this.driverChange$.next(true);
    } else if (driverType === 'fake') {
      this.currentDriverService = this.fakeProductDriver;
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

  getAll(): Observable<DaffProduct[]> {
    return this.driverChange$.pipe(
      startWith(false),
      switchMap(() => this.currentDriverService.getAll(),
      ),
    );
  }

  get(productId: string): Observable<DaffProductDriverResponse<DaffProduct>> {
    return this.driverChange$.pipe(
      startWith(false),
      switchMap(() => this.currentDriverService.get(productId)),
    );
  }

  getByUrl(url: string): Observable<DaffProductDriverResponse<DaffProduct>> {
    return this.driverChange$.pipe(
      startWith(false),
      switchMap(() => this.currentDriverService.getByUrl(url)),
    );
  }
}
