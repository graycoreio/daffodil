import { Provider } from '@angular/core';

import {
  provideDaffDocsLocation,
  provideDaffDocsExampleViewerContainerCustomElement,
} from './code-preview/public_api';
import {
  DaffDocsComponentExample,
  DaffDocsComponentExamples,
  provideDaffDocsExampleComponents,
} from './examples/public_api';

/**
 * Provide the documentation example feature.
 *
 * @param docsLocation The location of the documentation.
 * @returns
 */
export const provideDaffDocsComponents = (docsLocation: string, components: DaffDocsComponentExample[] = []): Provider[] => [
  provideDaffDocsExampleComponents(...components),
  DaffDocsComponentExamples,
  provideDaffDocsLocation(docsLocation),
  provideDaffDocsExampleViewerContainerCustomElement(),
];
