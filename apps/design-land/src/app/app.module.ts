import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DesignLandAppRoutingModule } from './app-routing.module';

import { DesignLandAppComponent } from './app.component';

import {
  DaffSidebarModule,
  DaffLinkSetModule,
  DaffArticleModule
 } from '@daffodil/design';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http';

 /**
 * Import specific languages to avoid importing everything
 * The following will lazy load highlight.js core script (~9.6KB) + the selected languages bundle (each lang. ~1kb)
 */
export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml')
  };
}


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DesignLandAppRoutingModule,
    HighlightModule,
    HttpClientModule,

    DaffSidebarModule,
    DaffLinkSetModule,
    DaffArticleModule
  ],
  declarations: [
    DesignLandAppComponent,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
      }
    }
  ],
  bootstrap: [
    DesignLandAppComponent
  ]
})
export class AppModule { }
