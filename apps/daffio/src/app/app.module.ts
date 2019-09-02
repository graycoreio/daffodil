import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DaffioAppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TemplateModule } from './core/template/template.module';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,

    AppRoutingModule,

    //Make sure this loads after Router and Store
    StoreRouterConnectingModule.forRoot({
      /*
        They stateKey defines the name of the state used by the router-store reducer.
        This matches the key defined in the map of reducers
      */
      stateKey: 'router',
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    TemplateModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    DaffioAppComponent
  ],
  bootstrap: [
    DaffioAppComponent
  ]
})
export class AppModule {}
