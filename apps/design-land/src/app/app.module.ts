import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DAFF_THEME_INITIALIZER } from '@daffodil/design';
import { DaffArticleModule } from '@daffodil/design/article';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffLinkSetModule } from '@daffodil/design/link-set';
import { DaffNavbarModule } from '@daffodil/design/navbar';
import { DaffSidebarModule } from '@daffodil/design/sidebar';
import { DaffThemeSwitchButtonModule } from '@daffodil/theme-switch';

import { DesignLandAppRoutingModule } from './app-routing.module';
import { DesignLandAppComponent } from './app.component';
import { DesignLandNavModule } from './core/nav/nav.module';
import { DesignLandTemplateModule } from './core/template/template.module';

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
    DesignLandTemplateModule,
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
