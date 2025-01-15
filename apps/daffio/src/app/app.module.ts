import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  APP_ID,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  FullRouterStateSerializer,
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { DAFF_THEME_INITIALIZER } from '@daffodil/design';
import {
  provideDaffRouterActivatedRoute,
  provideDaffRouterDataServiceConfig,
} from '@daffodil/router';
import { provideDaffSeoRouterSchema } from '@daffodil/seo/router';

import { AppRoutingModule } from './app-routing.module';
import { DaffioAppComponent } from './app.component';
import { environment } from '../environments/environment';
import { DaffioMarketingFooterComponentModule } from './core/footer/marketing-footer/marketing-footer.module';
import { DaffioSimpleFooterComponentModule } from './core/footer/simple-footer/simple-footer.module';
import { daffioRouterDataServiceConfig } from './core/router/data-service-config';
import { DaffioSidebarFooterComponentModule } from './core/sidebar/components/sidebar-footer/sidebar-footer.module';
import { DaffioSidebarHeaderComponentModule } from './core/sidebar/components/sidebar-header/sidebar-header.module';
import { TemplateModule } from './core/template/template.module';

@NgModule({
  declarations: [
    DaffioAppComponent,
  ],
  bootstrap: [
    DaffioAppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    AppRoutingModule,
    DaffioSidebarHeaderComponentModule,
    DaffioSidebarFooterComponentModule,
    DaffioSimpleFooterComponentModule,
    DaffioMarketingFooterComponentModule,
    //Make sure this loads after Router and Store
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
    TemplateModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    DAFF_THEME_INITIALIZER,
    {
      provide: APP_ID,
      useValue: 'serverApp',
    },
    provideDaffRouterActivatedRoute(),
    provideDaffSeoRouterSchema(),
    provideHttpClient(withInterceptorsFromDi()),
    provideDaffRouterDataServiceConfig(daffioRouterDataServiceConfig),
  ],
})
export class AppModule {}
