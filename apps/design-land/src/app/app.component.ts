import {
  Component,
  Injector,
  ComponentFactoryResolver,
} from '@angular/core';

import { ACCORDION_EXAMPLES } from '@daffodil/design-example/accordion/examples';
import { ARTICLE_EXAMPLES } from '@daffodil/design-example/article/examples';
import { BREADCRUMB_EXAMPLES } from '@daffodil/design-example/breadcrumb/examples';
import { BUTTON_EXAMPLES } from '@daffodil/design-example/button/examples';
import { CALLOUT_EXAMPLES } from '@daffodil/design-example/callout/examples';
import { CARD_EXAMPLES } from '@daffodil/design-example/card/examples';
import { CHECKBOX_EXAMPLES } from '@daffodil/design-example/checkbox/examples';
import { CONTAINER_EXAMPLES } from '@daffodil/design-example/container/examples';
import { FORM_FIELD_EXAMPLES } from '@daffodil/design-example/form-field/examples';
import { HERO_EXAMPLES } from '@daffodil/design-example/hero/examples';
import { IMAGE_EXAMPLES } from '@daffodil/design-example/image/examples';
import { INPUT_EXAMPLES } from '@daffodil/design-example/input/examples';
import { LIST_EXAMPLES } from '@daffodil/design-example/list/examples';
import { LOADING_ICON_EXAMPLES } from '@daffodil/design-example/loading-icon/examples';
import { MEDIA_GALLERY_EXAMPLES } from '@daffodil/design-example/media-gallery/examples';
import { MENU_EXAMPLES } from '@daffodil/design-example/menu/examples';
import { MODAL_EXAMPLES } from '@daffodil/design-example/modal/examples';
import { NATIVE_SELECT_EXAMPLES } from '@daffodil/design-example/native-select/examples';
import { NAVBAR_EXAMPLES } from '@daffodil/design-example/navbar/examples';
import { NOTIFICATION_EXAMPLES } from '@daffodil/design-example/notification/examples';
import { PAGINATOR_EXAMPLES } from '@daffodil/design-example/paginator/examples';
import { PROGRESS_BAR_EXAMPLES } from '@daffodil/design-example/progress-bar/examples';
import { QUANTITY_FIELD_EXAMPLES } from '@daffodil/design-example/quantity-field/examples';
import { RADIO_EXAMPLES } from '@daffodil/design-example/radio/examples';
import { SELECT_EXAMPLES } from '@daffodil/design-example/select/examples';
import { SIDEBAR_EXAMPLES } from '@daffodil/design-example/sidebar/examples';
import { STICKY_EXAMPLES } from '@daffodil/design-example/sticky/examples';
import { SWITCH_EXAMPLES } from '@daffodil/design-example/switch/examples';
import { TABS_EXAMPLES } from '@daffodil/design-example/tabs/examples';
import { TAG_EXAMPLES } from '@daffodil/design-example/tag/examples';
import { TEXTAREA_EXAMPLES } from '@daffodil/design-example/textarea/examples';
import { TOAST_EXAMPLES } from '@daffodil/design-example/toast/examples';
import { TREE_EXAMPLES } from '@daffodil/design-example/tree/examples';

import { createCustomElementFromExample } from './core/elements/create-element-from-example';

@Component({
  selector: 'design-land-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class DesignLandAppComponent {
  constructor(
    injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    [
      ...ARTICLE_EXAMPLES,
      ...ACCORDION_EXAMPLES,
      ...TAG_EXAMPLES,
      ...BREADCRUMB_EXAMPLES,
      ...BUTTON_EXAMPLES,
      ...RADIO_EXAMPLES,
      ...CARD_EXAMPLES,
      ...CALLOUT_EXAMPLES,
      ...CHECKBOX_EXAMPLES,
      ...CONTAINER_EXAMPLES,
      ...SELECT_EXAMPLES,
      ...HERO_EXAMPLES,
      ...LOADING_ICON_EXAMPLES,
      ...MEDIA_GALLERY_EXAMPLES,
      ...MENU_EXAMPLES,
      ...MODAL_EXAMPLES,
      ...NATIVE_SELECT_EXAMPLES,
      ...NAVBAR_EXAMPLES,
      ...NOTIFICATION_EXAMPLES,
      ...QUANTITY_FIELD_EXAMPLES,
      ...LIST_EXAMPLES,
      ...PAGINATOR_EXAMPLES,
      ...PROGRESS_BAR_EXAMPLES,
      ...IMAGE_EXAMPLES,
      ...INPUT_EXAMPLES,
      ...FORM_FIELD_EXAMPLES,
      ...SIDEBAR_EXAMPLES,
      ...STICKY_EXAMPLES,
      ...SWITCH_EXAMPLES,
      ...TOAST_EXAMPLES,
      ...TEXTAREA_EXAMPLES,
      ...TABS_EXAMPLES,
      ...TREE_EXAMPLES,
    ].map((componentExample) => createCustomElementFromExample(componentExample, injector))
      .map((customElement) => {
        // Register the custom element with the browser.
        customElements.define(
          this.componentFactoryResolver.resolveComponentFactory(customElement.class).selector + '-example',
          customElement.element,
        );
      });
  }
}
