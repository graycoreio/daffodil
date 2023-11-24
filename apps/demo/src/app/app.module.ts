import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { DaffProgressIndicatorModule } from '@daffodil/design';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoCartRootModule } from './cart/cart-root.module';
import { CategoryModule } from './category/category.module';
import { TemplateModule } from './core/template/template/template.module';
import { DemoDriverMap } from './drivers/map';
import { NotFoundModule } from './misc/not-found/not-found.module';
import { ProductModule } from './product/product.module';
import { DemoRoutingComponentModule } from './routing/routing-component.module';
import { ThankYouModule } from './thank-you/thank-you.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    HttpClientModule,

    DemoDriverMap[environment.driver.variant],

    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),

    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),

    AppRoutingModule,
    DemoRoutingComponentModule,
    DemoCartRootModule,
    ProductModule,
    CategoryModule,
    ThankYouModule,
    TemplateModule,
    NotFoundModule,
    DaffProgressIndicatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class DemoModule {}
