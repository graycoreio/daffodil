import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DAFF_THEME_INITIALIZER } from '@daffodil/design';
import { ACCORDION_EXAMPLES } from '@daffodil/design/accordion/examples';
import { DaffArticleModule } from '@daffodil/design/article';
import { ARTICLE_EXAMPLES } from '@daffodil/design/article/examples';
import { DaffButtonModule } from '@daffodil/design/button';
import { BUTTON_EXAMPLES } from '@daffodil/design/button/examples';
import { CALLOUT_EXAMPLES } from '@daffodil/design/callout/examples';
import { CARD_EXAMPLES } from '@daffodil/design/card/examples';
import { CHECKBOX_EXAMPLES } from '@daffodil/design/checkbox/examples';
import { CONTAINER_EXAMPLES } from '@daffodil/design/container/examples';
import { HERO_EXAMPLES } from '@daffodil/design/hero/examples';
import { IMAGE_EXAMPLES } from '@daffodil/design/image/examples';
import { INPUT_EXAMPLES } from '@daffodil/design/input/examples';
import { DaffLinkSetModule } from '@daffodil/design/link-set';
import { LIST_EXAMPLES } from '@daffodil/design/list/examples';
import { LOADING_ICON_EXAMPLES } from '@daffodil/design/loading-icon/examples';
import { MEDIA_GALLERY_EXAMPLES } from '@daffodil/design/media-gallery/examples';
import { MENU_EXAMPLES } from '@daffodil/design/menu/examples';
import { MODAL_EXAMPLES } from '@daffodil/design/modal/examples';
import { DaffNavbarModule } from '@daffodil/design/navbar';
import { NAVBAR_EXAMPLES } from '@daffodil/design/navbar/examples';
import { NOTIFICATION_EXAMPLES } from '@daffodil/design/notification/examples';
import { PAGINATOR_EXAMPLES } from '@daffodil/design/paginator/examples';
import { PROGRESS_BAR_EXAMPLES } from '@daffodil/design/progress-bar/examples';
import { QUANTITY_FIELD_EXAMPLES } from '@daffodil/design/quantity-field/examples';
import { RADIO_EXAMPLES } from '@daffodil/design/radio/examples';
import { DaffSidebarModule } from '@daffodil/design/sidebar';
import { SIDEBAR_EXAMPLES } from '@daffodil/design/sidebar/examples';
import { provideDaffToast } from '@daffodil/design/toast';
import { TOAST_EXAMPLES } from '@daffodil/design/toast/examples';
import { TREE_EXAMPLES } from '@daffodil/design/tree/examples';
import { provideDaffDocsComponents } from '@daffodil/docs-components';
import { DaffThemeSwitchButtonModule } from '@daffodil/theme-switch';

import { DesignLandAppRoutingModule } from './app-routing.module';
import { DesignLandAppComponent } from './app.component';
import { DesignLandNavModule } from './core/nav/nav.module';
import { DesignLandTemplateModule } from './core/template/template.module';
import { DesignLandSwitchModule } from './switch/switch.module';

@NgModule({
  declarations: [
    DesignLandAppComponent,
  ],
  bootstrap: [
    DesignLandAppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DesignLandAppRoutingModule,
    DaffSidebarModule,
    DaffLinkSetModule,
    DaffArticleModule,
    DaffThemeSwitchButtonModule,
    DaffNavbarModule,
    DaffButtonModule,
    FontAwesomeModule,
    DesignLandNavModule,
    DesignLandTemplateModule,
    DesignLandSwitchModule,
  ],
  providers: [
    DAFF_THEME_INITIALIZER,
    provideHttpClient(withInterceptorsFromDi()),
    provideDaffToast(),
    provideDaffDocsComponents('/assets', [
      ...ARTICLE_EXAMPLES,
      ...ACCORDION_EXAMPLES,
      ...BUTTON_EXAMPLES,
      ...RADIO_EXAMPLES,
      ...CARD_EXAMPLES,
      ...CALLOUT_EXAMPLES,
      ...CHECKBOX_EXAMPLES,
      ...CONTAINER_EXAMPLES,
      ...HERO_EXAMPLES,
      ...LOADING_ICON_EXAMPLES,
      ...MEDIA_GALLERY_EXAMPLES,
      ...MENU_EXAMPLES,
      ...MODAL_EXAMPLES,
      ...NAVBAR_EXAMPLES,
      ...NOTIFICATION_EXAMPLES,
      ...QUANTITY_FIELD_EXAMPLES,
      ...LIST_EXAMPLES,
      ...PAGINATOR_EXAMPLES,
      ...PROGRESS_BAR_EXAMPLES,
      ...IMAGE_EXAMPLES,
      ...INPUT_EXAMPLES,
      ...SIDEBAR_EXAMPLES,
      ...TOAST_EXAMPLES,
      ...TREE_EXAMPLES,
    ]),
  ],
})
export class AppModule { }
