import { Provider } from '@angular/core';

import { provideDaffDocsExampleViewerContainerCustomElement } from './container/custom-element.provider';
import { provideDaffDocsLocation } from './service/docs-location.token';
import {
  DaffDocsComponentExample,
  provideDaffDocsExampleComponents,
} from '../public_api';

/**
 * Provide the documentation example feature.
 *
 * @param docsLocation The location of the documentation.
 * @returns
 */
export const provideDaffDocsComponents = (docsLocation: string, components: DaffDocsComponentExample[] = []): Provider[] => [
  provideDaffDocsLocation(docsLocation),
  provideDaffDocsExampleViewerContainerCustomElement(),
  provideDaffDocsExampleComponents(...components),
];
