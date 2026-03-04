import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffStorefrontCarouselExamplesContent } from '@daffodil/storefront-examples/carousel';
import { provideDaffStorefrontThemeToggleExamplesContent } from '@daffodil/storefront-examples/theme-toggle';

export const provideDaffioStorefrontExamplesContent = () => makeEnvironmentProviders([
  provideDaffStorefrontThemeToggleExamplesContent(),
  provideDaffStorefrontCarouselExamplesContent(),
]);
