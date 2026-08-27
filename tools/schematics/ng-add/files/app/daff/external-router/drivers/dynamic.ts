import {
  inject,
  Injectable,
  OnDestroy,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Apollo } from 'apollo-angular';
import {
  distinctUntilChanged,
  filter,
  Observable,
  Subject,
  Subscription,
} from 'rxjs';

import {
  DaffDevToolsConfigService,
  DaffDriverConfig,
} from '@daffodil/dev-tools';
import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
import {
  DaffExternalRouterDriver,
  DaffExternalRouterDriverInterface,
} from '@daffodil/external-router/driver';
import { DaffExternalRouterInMemoryDriver } from '@daffodil/external-router/driver/in-memory';
import { DaffShopifyExternalRouterDriver } from '@daffodil/external-router/driver/shopify';

import { FakeExternalRouterService } from './fake';

@Injectable({
  providedIn:'root',
})
export class DynamicExternalRouterDriver implements DaffExternalRouterDriverInterface, OnDestroy {
  private currentDriverService: DaffExternalRouterDriverInterface;
  private driverChange$ = new Subject<boolean>();

  public readonly driverChanged$ = this.driverChange$.asObservable();

  private inmemoryDriver = inject(DaffExternalRouterInMemoryDriver);
  private magentoDriver = inject<DaffExternalRouterDriverInterface>(DaffExternalRouterDriver);
  private shopifyDriver = inject(DaffShopifyExternalRouterDriver);
  private fakeDriver = inject(FakeExternalRouterService);

  private apollo = inject(Apollo);
  private devToolsConfig = inject(DaffDevToolsConfigService);

  constructor() {
    this.currentDriverService = this.inmemoryDriver;
    this.subscribeToDevToolsConfig();
  }

  ngOnDestroy(): void {
    this.driverChange$.complete();
  }

  switchDriver(driverType: string): void {
    if (driverType === 'in-memory') {
      this.currentDriverService = this.inmemoryDriver;
      this.driverChange$.next(true);
    } else if (driverType === 'fake') {
      this.currentDriverService = this.fakeDriver;
      this.driverChange$.next(true);
    } else if (driverType === 'magento' || driverType === 'mageos') {
      this.currentDriverService = this.magentoDriver;
      this.apollo.client.clearStore().then(() => {
        this.driverChange$.next(true);
      });
    } else if (driverType === 'shopify') {
      this.currentDriverService = this.shopifyDriver;
      this.apollo.use('shopify').client.clearStore().then(() => {
        this.driverChange$.next(true);
      });
    } else {
      return;
    }
  }

  private subscribeToDevToolsConfig(): Subscription | void {
    if (this.devToolsConfig) {
      return this.devToolsConfig
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

  resolve(url: string): Observable<DaffExternallyResolvableUrl> {
    return this.currentDriverService.resolve(url);
  }
}
