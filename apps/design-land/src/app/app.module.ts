import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  DaffSidebarModule,
  DaffLinkSetModule,
  DaffArticleModule,
  DAFF_THEME_INITIALIZER,
  DaffNavbarModule,
  DaffButtonModule,
} from '@daffodil/design';
import { DaffThemeSwitchButtonModule } from '@daffodil/theme-switch';

import { DesignLandAppRoutingModule } from './app-routing.module';
import { DesignLandAppComponent } from './app.component';
import { DesignLandNavModule } from './core/nav/nav.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DesignLandAppRoutingModule,
    HttpClientModule,
    DaffSidebarModule,
    DaffLinkSetModule,
    DaffArticleModule,
    DaffThemeSwitchButtonModule,
    DaffNavbarModule,
    DaffButtonModule,
    FontAwesomeModule,
    DesignLandNavModule,
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
