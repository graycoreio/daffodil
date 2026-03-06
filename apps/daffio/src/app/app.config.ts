import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  APP_ID,
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
  withRouterConfig,
} from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EffectsModule } from '@ngrx/effects';
import {
  FullRouterStateSerializer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { DAFF_THEME_INITIALIZER } from '@daffodil/design';
import { provideDaffRouterDataServiceConfig } from '@daffodil/router';
import { DaffSearchIncrementalStateModule } from '@daffodil/search/state';
import { DaffSearchDocsStateModule } from '@daffodil/search-docs/state';
import { provideDaffSeoRouterSchema } from '@daffodil/seo/router';

import { appRoutes } from './app.routes';
import { environment } from '../environments/environment';
import { daffioRouterDataServiceConfig } from './core/router/data-service-config';
import { provideScrollOffset } from './core/scrolling/provide-scroll-offset';
import { provideDaffioSidebarFeature } from './core/sidebar/provider';
import { provideDaffioDocsSearchStoreResult } from './docs/search/state/provider';
import { provideDaffioAlgolia } from './drivers/algolia.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection(
      {
        eventCoalescing: true,
      },
    ),
    provideAnimations(),
    importProvidersFrom(
      StoreModule.forRoot({}),
      EffectsModule.forRoot(),
      StoreRouterConnectingModule.forRoot({ serializer: FullRouterStateSerializer,
        /*
					They stateKey defines the name of the state used by the router-store reducer.
					This matches the key defined in the map of reducers
				*/
        stateKey: 'router' }),
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: environment.production, // Restrict extension to log-only mode
        connectInZone: true,
      }),
      ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
      DaffSearchDocsStateModule,
      DaffSearchIncrementalStateModule.withConfig(),
    ),
    provideRouter(
      appRoutes,
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
      withRouterConfig({
        onSameUrlNavigation: 'reload',
      }),
    ),
    DAFF_THEME_INITIALIZER,
    {
      provide: APP_ID,
      useValue: 'serverApp',
    },
    provideDaffSeoRouterSchema(),
    provideHttpClient(withInterceptorsFromDi()),
    provideDaffRouterDataServiceConfig(daffioRouterDataServiceConfig),
    provideDaffioSidebarFeature(),
    provideScrollOffset(),
    provideDaffioAlgolia(),
    provideDaffioDocsSearchStoreResult(),
  ],
};
