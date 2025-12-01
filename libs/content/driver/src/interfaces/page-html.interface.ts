import { Observable } from 'rxjs';

import { DaffContentHtmlPage } from '@daffodil/content';
import { createSingletonInjectionToken } from '@daffodil/core';

/**
 * Query CMS pages.
 */
export interface DaffContentPageHtmlServiceInterface<
  T extends DaffContentHtmlPage = DaffContentHtmlPage,
> {
  /**
   * Get a content page with the specified ID.
   */
  get(id: T['id']): Observable<T>;
}

export const {
  token: DaffContentPageHtmlDriver,
  /**
   * Provider function for {@link DaffContentPageHtmlDriver}.
   */
  provider: provideDaffContentHtmlPageDriver,
} = createSingletonInjectionToken<DaffContentPageHtmlServiceInterface<DaffContentHtmlPage>>('DaffContentPageHtmlDriver');
