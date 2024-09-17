import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  ActivatedRoute,
  Event,
  Router,
} from '@angular/router';

import { DaffRestoreableCanonicalService } from '@daffodil/seo';


import { DaffSeoPageHookRouterEffects } from './page-hook.effects';
import { DAFF_SEO_CANONICAL_URL_ROUTER_UPDATES } from '../canonical/updates.token';
import { DaffSeoUpdateEventPair } from '../model/update-event-pair.interface';

/**
 * Page hook effects for the canonical URL.
 */
@Injectable()
export class DaffSeoNativeCanonicalUrlEffects extends DaffSeoPageHookRouterEffects<
  DaffRestoreableCanonicalService,
  DaffSeoUpdateEventPair<Event, string>,
  string
> {
  constructor(
    router: Router,
    @Inject(DAFF_SEO_CANONICAL_URL_ROUTER_UPDATES) updates: DaffSeoUpdateEventPair<Event, string>[],
    service: DaffRestoreableCanonicalService,
    activatedRoute: ActivatedRoute,
  ) {
    super(
      router,
      updates,
      service,
      activatedRoute,
    );
  }
}
