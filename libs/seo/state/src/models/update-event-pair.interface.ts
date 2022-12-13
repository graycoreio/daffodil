import {
  ActivatedRoute,
  Event,
  Router,
} from '@angular/router';

import { Constructable } from '@daffodil/core';

/**
 * Specifies a function to run in response to a particular action.
 * Used to add feature-specific SEO behavior.
 */
export interface DaffSeoUpdateEventPair<T extends Event = Event, V = unknown> {
  /**
   * The type of action to respond to.
   */
  event: Constructable<T>;
  /**
   * A function that gets SEO info from the particular action.
   */
  getData: (event: T, activatedRoute: ActivatedRoute, url: Router['url']) => V;
}
