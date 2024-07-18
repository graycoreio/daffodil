import { Provider } from '@angular/core';

import { provideDaffDocsAssetPath } from '@daffodil/documentation';

/**
 * A provider for the docs path for the browser.
 */
export function provideBrowserDocsPath(): Provider {
  return provideDaffDocsAssetPath('/assets/daffio/');
};
