import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffContentBlock,
  DaffContentBlockCollection,
} from '@daffodil/content';

export const DaffContentDriver = new InjectionToken<DaffContentServiceInterface>('DaffContentDriver');

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
