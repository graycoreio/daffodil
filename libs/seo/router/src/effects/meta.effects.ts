import {
  Injectable,
  Inject,
} from '@angular/core';
import { MetaDefinition } from '@angular/platform-browser';
import {
  ActivatedRoute,
  Event,
  Router,
} from '@angular/router';

import {
  DaffRestoreableMetaService,
  DaffSeoMetaDefinition,
} from '@daffodil/seo';


import { DaffSeoPageHookRouterEffects } from './page-hook.effects';
import { DAFF_SEO_META_ROUTER_UPDATES } from '../meta/updates.token';
import { DaffSeoUpdateEventPair } from '../model/update-event-pair.interface';

/**
 * Page hook effects for the page meta tags.
 */
@Injectable()
export class DaffSeoNativeMetaEffects extends DaffSeoPageHookRouterEffects<
  DaffRestoreableMetaService,
  DaffSeoUpdateEventPair<Event, DaffSeoMetaDefinition>,
  MetaDefinition
> {

  constructor(
    router: Router,
    @Inject(DAFF_SEO_META_ROUTER_UPDATES) updates: DaffSeoUpdateEventPair<Event, DaffSeoMetaDefinition>[],
    service: DaffRestoreableMetaService,
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
