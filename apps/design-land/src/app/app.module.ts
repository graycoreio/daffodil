import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  DaffSidebarModule,
  DaffLinkSetModule,
  DaffArticleModule,
  DAFF_THEME_INITIALIZER,
} from '@daffodil/design';

import { DesignLandAppRoutingModule } from './app-routing.module';
import { DesignLandAppComponent } from './app.component';
import { DesignLandThemeSwitchModule } from './core/theme-switch/theme-switch.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DesignLandAppRoutingModule,
    HttpClientModule,
    DaffSidebarModule,
    DaffLinkSetModule,
    DaffArticleModule,
    DesignLandThemeSwitchModule,
  ],
  declarations: [
    DesignLandAppComponent,
  ],
  bootstrap: [
    DesignLandAppComponent,
  ],
  providers: [
    DAFF_THEME_INITIALIZER,
  ],
})
export class AppModule { }
