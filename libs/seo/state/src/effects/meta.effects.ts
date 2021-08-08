import {
  Injectable,
  Inject,
} from '@angular/core';
import { MetaDefinition } from '@angular/platform-browser';
import { Actions } from '@ngrx/effects';

import { DaffRestoreableMetaService } from '@daffodil/seo';

import { DAFF_SEO_META_UPDATES } from '../injection-tokens/public_api';
import { DaffSeoMetaUpdate } from '../models/public_api';
import { DaffSeoPageHookEffects } from './page-hook.effects';


@Injectable()
export class DaffSeoMetaEffects extends DaffSeoPageHookEffects<DaffRestoreableMetaService, DaffSeoMetaUpdate, MetaDefinition> {
  constructor(
    actions$: Actions,
    @Inject(DAFF_SEO_META_UPDATES) updates: DaffSeoMetaUpdate[],
    service: DaffRestoreableMetaService,
  ) {
    super(
      actions$,
      updates,
      service,
    );
  }
}
