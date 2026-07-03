import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDesignAccordionExamplesContent } from '@daffodil/design-examples/accordion';
import { provideDaffDesignArticleExamplesContent } from '@daffodil/design-examples/article';
import { provideDaffDesignArticleEncapsulatedExamplesContent } from '@daffodil/design-examples/article-encapsulated';
import { provideDaffDesignBeaconExamplesContent } from '@daffodil/design-examples/beacon';
import { provideDaffDesignBreadcrumbExamplesContent } from '@daffodil/design-examples/breadcrumb';
import { provideDaffDesignButtonExamplesContent } from '@daffodil/design-examples/button';
import { provideDaffDesignCalloutExamplesContent } from '@daffodil/design-examples/callout';
import { provideDaffDesignCardExamplesContent } from '@daffodil/design-examples/card';
import { provideDaffDesignCheckboxExamplesContent } from '@daffodil/design-examples/checkbox';
import { provideDaffDesignContainerExamplesContent } from '@daffodil/design-examples/container';
import { provideDaffDesignFormFieldExamplesContent } from '@daffodil/design-examples/form-field';
import { provideDaffDesignHeroExamplesContent } from '@daffodil/design-examples/hero';
import { provideDaffDesignImageExamplesContent } from '@daffodil/design-examples/image';
import { provideDaffDesignInputExamplesContent } from '@daffodil/design-examples/input';
import { provideDaffDesignListExamplesContent } from '@daffodil/design-examples/list';
import { provideDaffDesignLoadingIconExamplesContent } from '@daffodil/design-examples/loading-icon';
import { provideDaffDesignMediaGalleryExamplesContent } from '@daffodil/design-examples/media-gallery';
import { provideDaffDesignMenuExamplesContent } from '@daffodil/design-examples/menu';
import { provideDaffDesignModalExamplesContent } from '@daffodil/design-examples/modal';
import { provideDaffDesignNativeSelectExamplesContent } from '@daffodil/design-examples/native-select';
import { provideDaffDesignNavbarExamplesContent } from '@daffodil/design-examples/navbar';
import { provideDaffDesignNotificationExamplesContent } from '@daffodil/design-examples/notification';
import { provideDaffDesignPaginatorExamplesContent } from '@daffodil/design-examples/paginator';
import { provideDaffDesignProgressBarExamplesContent } from '@daffodil/design-examples/progress-bar';
import { provideDaffDesignRadioExamplesContent } from '@daffodil/design-examples/radio';
import { provideDaffDesignRtiExamplesContent } from '@daffodil/design-examples/roving-tab-index';
import { provideDaffDesignSelectExamplesContent } from '@daffodil/design-examples/select';
import { provideDaffDesignSidebarExamplesContent } from '@daffodil/design-examples/sidebar';
import { provideDaffDesignSpinnerExamplesContent } from '@daffodil/design-examples/spinner';
import { provideDaffDesignStickyExamplesContent } from '@daffodil/design-examples/sticky';
import { provideDaffDesignSwitchExamplesContent } from '@daffodil/design-examples/switch';
import { provideDaffDesignTabsExamplesContent } from '@daffodil/design-examples/tabs';
import { provideDaffDesignTagExamplesContent } from '@daffodil/design-examples/tag';
import { provideDaffDesignTextSnippetExamplesContent } from '@daffodil/design-examples/text-snippet';
import { provideDaffDesignTextareaExamplesContent } from '@daffodil/design-examples/textarea';
import { provideDaffDesignToastExamplesContent } from '@daffodil/design-examples/toast';
import { provideDaffDesignTreeExamplesContent } from '@daffodil/design-examples/tree';
import { provideDaffDocsColorPaletteGeneratorExampleContent } from '@daffodil/docs';

import { provideDaffioDesignColorPalettesExampleContent } from '../containers/color-palettes/provider';

export const provideDaffioDesignExamplesContent = () => makeEnvironmentProviders([
  provideDaffioDesignColorPalettesExampleContent(),
  provideDaffDocsColorPaletteGeneratorExampleContent(),
  provideDaffDesignAccordionExamplesContent(),
  provideDaffDesignArticleExamplesContent(),
  provideDaffDesignBeaconExamplesContent(),
  provideDaffDesignBreadcrumbExamplesContent(),
  provideDaffDesignButtonExamplesContent(),
  provideDaffDesignCalloutExamplesContent(),
  provideDaffDesignCardExamplesContent(),
  provideDaffDesignCheckboxExamplesContent(),
  provideDaffDesignContainerExamplesContent(),
  provideDaffDesignFormFieldExamplesContent(),
  provideDaffDesignHeroExamplesContent(),
  provideDaffDesignImageExamplesContent(),
  provideDaffDesignInputExamplesContent(),
  provideDaffDesignListExamplesContent(),
  provideDaffDesignLoadingIconExamplesContent(),
  provideDaffDesignMediaGalleryExamplesContent(),
  provideDaffDesignMenuExamplesContent(),
  provideDaffDesignModalExamplesContent(),
  provideDaffDesignNativeSelectExamplesContent(),
  provideDaffDesignNavbarExamplesContent(),
  provideDaffDesignNotificationExamplesContent(),
  provideDaffDesignPaginatorExamplesContent(),
  provideDaffDesignProgressBarExamplesContent(),
  provideDaffDesignRadioExamplesContent(),
  provideDaffDesignRtiExamplesContent(),
  provideDaffDesignSelectExamplesContent(),
  provideDaffDesignSidebarExamplesContent(),
  provideDaffDesignSpinnerExamplesContent(),
  provideDaffDesignStickyExamplesContent(),
  provideDaffDesignSwitchExamplesContent(),
  provideDaffDesignTabsExamplesContent(),
  provideDaffDesignTagExamplesContent(),
  provideDaffDesignTextSnippetExamplesContent(),
  provideDaffDesignTextareaExamplesContent(),
  provideDaffDesignToastExamplesContent(),
  provideDaffDesignTreeExamplesContent(),
  provideDaffDesignArticleEncapsulatedExamplesContent(),
]);
