import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
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

import { AppRoutingModule } from './app-routing.module';
import { DaffioAppComponent } from './app.component';
import { DaffioDocsHeaderContainerModule } from './core/header/containers/docs-header/docs-header.module';
import { DaffioMarketingHeaderContainerModule } from './core/header/containers/marketing-header/marketing-header.module';
import { DaffioDocsSidebarComponentModule } from './core/sidebar/components/docs-sidebar/docs-sidebar.module';
import { DaffioMarketingSidebarComponentModule } from './core/sidebar/components/marketing-sidebar/marketing-sidebar.module';
import { TemplateModule } from './core/template/template.module';
import { DaffioDocsPackagesSidebarComponentModule } from './guides/components/packages-sidebar/packages-sidebar.module';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,

    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,

    AppRoutingModule,
    DaffioMarketingHeaderContainerModule,
    DaffioDocsHeaderContainerModule,
    DaffioMarketingSidebarComponentModule,
    DaffioDocsSidebarComponentModule,
    DaffioDocsPackagesSidebarComponentModule,

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
    }),
    TemplateModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  declarations: [
    DaffioAppComponent,
  ],
  bootstrap: [
    DaffioAppComponent,
  ],
  providers: [
    DAFF_THEME_INITIALIZER,
  ],
})
export class AppModule {}
