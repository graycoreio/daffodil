import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffContentBlock,
  DaffContentBlockCollection,
} from '@daffodil/content';
import { createSingletonInjectionToken } from '@daffodil/core';

/**
 * Query content objects accessible by the logged-in user.
 */
export interface DaffContentServiceInterface<
  T extends DaffContentBlock = DaffContentBlock,
> {
  /**
   * Get an content object with the specified content ID.
   */
  getBlocks(...blockIds: T['id'][]): Observable<DaffContentBlockCollection<T>>;
}

export const {
  token: DaffContentDriver,
  /**
   * Provider function for {@link DaffContentDriver}.
   */
  provider: provideDaffContentDriver,
} = createSingletonInjectionToken<DaffContentServiceInterface>('DaffContentDriver');
