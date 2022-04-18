import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  ActivatedRoute,
  Event,
  Router,
} from '@angular/router';

import { DaffRestoreableTitleService } from '@daffodil/seo';

import { DAFF_SEO_TITLE_ROUTER_UPDATES } from '../../injection-tokens/title/router/updates.token';
import { DaffSeoUpdateEventPair } from '../../models/update-event-pair.interface';
import { DaffSeoPageHookRouterEffects } from './page-hook.effects';

/**
 * Page hook effects for the page title.
 */
@Injectable()
export class DaffSeoNativeTitleEffects extends DaffSeoPageHookRouterEffects<
DaffRestoreableTitleService,
DaffSeoUpdateEventPair<Event, string>,
string
> {
  constructor(
    router: Router,
    @Inject(DAFF_SEO_TITLE_ROUTER_UPDATES) updates: DaffSeoUpdateEventPair<Event, string>[],
    service: DaffRestoreableTitleService,
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
