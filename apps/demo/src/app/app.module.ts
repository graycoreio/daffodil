import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { DaffProgressIndicatorModule } from '@daffodil/design';

import { AppComponent } from './app.component';

import { ProductModule } from './product/product.module';
import { CheckoutModule } from './checkout/checkout.module';

import { NotFoundModule } from './misc/not-found/not-found.module';
import { TemplateModule } from './core/template/template/template.module';
import { ThankYouModule } from './thank-you/thank-you.module';

import { DemoRoutingComponentModule } from './routing/routing-component.module';
import { InMemoryModule } from './in-memory.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    HttpClientModule,

    InMemoryModule,
    
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),

    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    
    AppRoutingModule,
    DemoRoutingComponentModule,

    ProductModule,
    CheckoutModule,
    ThankYouModule,
    TemplateModule,
    NotFoundModule,
    DaffProgressIndicatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class DemoModule {}