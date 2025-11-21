import {
  Component,
  Injector,
  ComponentFactoryResolver,
} from '@angular/core';

import { ACCORDION_EXAMPLES } from '@daffodil/design-examples/accordion';
import { ARTICLE_EXAMPLES } from '@daffodil/design-examples/article';
import { BREADCRUMB_EXAMPLES } from '@daffodil/design-examples/breadcrumb';
import { BUTTON_EXAMPLES } from '@daffodil/design-examples/button';
import { CALLOUT_EXAMPLES } from '@daffodil/design-examples/callout';
import { CARD_EXAMPLES } from '@daffodil/design-examples/card';
import { CHECKBOX_EXAMPLES } from '@daffodil/design-examples/checkbox';
import { CONTAINER_EXAMPLES } from '@daffodil/design-examples/container';
import { FORM_FIELD_EXAMPLES } from '@daffodil/design-examples/form-field';
import { HERO_EXAMPLES } from '@daffodil/design-examples/hero';
import { IMAGE_EXAMPLES } from '@daffodil/design-examples/image';
import { INPUT_EXAMPLES } from '@daffodil/design-examples/input';
import { LIST_EXAMPLES } from '@daffodil/design-examples/list';
import { LOADING_ICON_EXAMPLES } from '@daffodil/design-examples/loading-icon';
import { MEDIA_GALLERY_EXAMPLES } from '@daffodil/design-examples/media-gallery';
import { MENU_EXAMPLES } from '@daffodil/design-examples/menu';
import { MODAL_EXAMPLES } from '@daffodil/design-examples/modal';
import { NATIVE_SELECT_EXAMPLES } from '@daffodil/design-examples/native-select';
import { NAVBAR_EXAMPLES } from '@daffodil/design-examples/navbar';
import { NOTIFICATION_EXAMPLES } from '@daffodil/design-examples/notification';
import { PAGINATOR_EXAMPLES } from '@daffodil/design-examples/paginator';
import { PROGRESS_BAR_EXAMPLES } from '@daffodil/design-examples/progress-bar';
import { QUANTITY_FIELD_EXAMPLES } from '@daffodil/design-examples/quantity-field';
import { RADIO_EXAMPLES } from '@daffodil/design-examples/radio';
import { SELECT_EXAMPLES } from '@daffodil/design-examples/select';
import { SIDEBAR_EXAMPLES } from '@daffodil/design-examples/sidebar';
import { STICKY_EXAMPLES } from '@daffodil/design-examples/sticky';
import { SWITCH_EXAMPLES } from '@daffodil/design-examples/switch';
import { TABS_EXAMPLES } from '@daffodil/design-examples/tabs';
import { TAG_EXAMPLES } from '@daffodil/design-examples/tag';
import { TEXTAREA_EXAMPLES } from '@daffodil/design-examples/textarea';
import { TOAST_EXAMPLES } from '@daffodil/design-examples/toast';
import { TREE_EXAMPLES } from '@daffodil/design-examples/tree';

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
      ...ACCORDION_EXAMPLES,
      ...ARTICLE_EXAMPLES,
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
          this.componentFactoryResolver.resolveComponentFactory(customElement.class).selector,
          customElement.element,
        );
      });
  }
}
