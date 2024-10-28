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

import { DaffSeoPageHookRouterEffects } from './page-hook.effects';
import { DaffSeoUpdateEventPair } from '../model/update-event-pair.interface';
import { DAFF_SEO_TITLE_ROUTER_UPDATES } from '../title/updates.token';

/**
 * Page hook effects for the page title.
 *
 * @deprecated since Angular 14. See https://angular.io/api/router/TitleStrategy Deprecated in version 0.78.0. Will be removed in version 0.81.0.
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
